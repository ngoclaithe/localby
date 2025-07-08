import { Cloudinary } from "cloudinary-js";

// Initialize Cloudinary
const cloudinary = new Cloudinary({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  secure: true,
});

// Upload presets (configure these in your Cloudinary dashboard)
const UPLOAD_PRESETS = {
  blog_images: "localby_blog_preset",
  user_avatars: "localby_avatar_preset",
  general: "localby_general_preset",
};

// Image transformations
const TRANSFORMATIONS = {
  thumbnail: "c_thumb,w_150,h_150,g_face",
  medium: "c_scale,w_500,q_auto",
  large: "c_scale,w_1200,q_auto",
  hero: "c_scale,w_1920,h_1080,c_fill,q_auto",
  blog_featured: "c_scale,w_800,h_450,c_fill,q_auto",
};

class CloudinaryService {
  constructor() {
    this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    this.apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;
    this.uploadUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/upload`;
  }

  // Upload image to Cloudinary
  async uploadImage(file, options = {}) {
    const {
      preset = "general",
      folder = "localby",
      tags = [],
      transformation = null,
    } = options;

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        UPLOAD_PRESETS[preset] || UPLOAD_PRESETS.general,
      );
      formData.append("folder", folder);

      if (tags.length > 0) {
        formData.append("tags", tags.join(","));
      }

      if (transformation) {
        formData.append("transformation", transformation);
      }

      const response = await fetch(this.uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: {
          public_id: result.public_id,
          secure_url: result.secure_url,
          width: result.width,
          height: result.height,
          format: result.format,
          resource_type: result.resource_type,
        },
      };
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Upload multiple images
  async uploadMultipleImages(files, options = {}) {
    try {
      const uploadPromises = files.map((file) =>
        this.uploadImage(file, options),
      );
      const results = await Promise.allSettled(uploadPromises);

      const successful = results
        .filter(
          (result) => result.status === "fulfilled" && result.value.success,
        )
        .map((result) => result.value.data);

      const failed = results
        .filter(
          (result) => result.status === "rejected" || !result.value.success,
        )
        .map((result) => result.reason || result.value.error);

      return {
        successful,
        failed,
        total: files.length,
        successCount: successful.length,
        failCount: failed.length,
      };
    } catch (error) {
      console.error("Multiple upload error:", error);
      throw error;
    }
  }

  // Generate image URL with transformation
  generateImageUrl(publicId, transformation = "") {
    if (!publicId) return null;

    return cloudinary.url(publicId, {
      transformation: transformation || "q_auto,f_auto",
      secure: true,
    });
  }

  // Get optimized image URL
  getOptimizedImageUrl(publicId, size = "medium") {
    const transformation = TRANSFORMATIONS[size] || TRANSFORMATIONS.medium;
    return this.generateImageUrl(publicId, transformation);
  }

  // Delete image from Cloudinary (requires backend API call with signature)
  async deleteImage(publicId) {
    try {
      // This should be handled by your backend API
      // as it requires API secret for signature generation
      const response = await fetch("/api/cloudinary/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ public_id: publicId }),
      });

      return await response.json();
    } catch (error) {
      console.error("Delete image error:", error);
      throw error;
    }
  }

  // Validate file before upload
  validateFile(file, options = {}) {
    const {
      maxSize = 5 * 1024 * 1024, // 5MB default
      allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"],
    } = options;

    const errors = [];

    if (file.size > maxSize) {
      errors.push(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
    }

    if (!allowedTypes.includes(file.type)) {
      errors.push(`File type must be one of: ${allowedTypes.join(", ")}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Create upload widget (for advanced upload UI)
  createUploadWidget(options = {}) {
    const defaultOptions = {
      cloudName: this.cloudName,
      uploadPreset: UPLOAD_PRESETS.general,
      sources: ["local", "url", "camera"],
      multiple: false,
      maxFiles: 1,
      maxFileSize: 5000000, // 5MB
      maxImageWidth: 2000,
      maxImageHeight: 2000,
      cropping: true,
      croppingAspectRatio: 16 / 9,
      showPoweredBy: false,
      folder: "localby",
      tags: ["localby"],
      resourceType: "image",
    };

    const widgetOptions = { ...defaultOptions, ...options };

    return window.cloudinary?.createUploadWidget(widgetOptions);
  }
}

// Create and export service instance
const cloudinaryService = new CloudinaryService();

export default cloudinaryService;

// Helper functions
export const uploadBlogImage = (file, tags = []) => {
  return cloudinaryService.uploadImage(file, {
    preset: "blog_images",
    folder: "localby/blog",
    tags: ["blog", ...tags],
  });
};

export const uploadAvatar = (file) => {
  return cloudinaryService.uploadImage(file, {
    preset: "user_avatars",
    folder: "localby/avatars",
    tags: ["avatar"],
    transformation: TRANSFORMATIONS.thumbnail,
  });
};

export const getImageUrl = (publicId, size = "medium") => {
  return cloudinaryService.getOptimizedImageUrl(publicId, size);
};

export { TRANSFORMATIONS, UPLOAD_PRESETS };
