export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export const generateExcerpt = (content, length = 200) => {
  const textContent = content.replace(/<[^>]*>/g, "");
  return truncateText(textContent, length);
};

export const formatUrl = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};

export const getImageUrl = (imagePath, transformation = "") => {
  if (!imagePath) return "/images/placeholder.jpg";

  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // Cloudinary transformation
  if (transformation && imagePath.includes("cloudinary")) {
    const parts = imagePath.split("/upload/");
    return `${parts[0]}/upload/${transformation}/${parts[1]}`;
  }

  return imagePath;
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
