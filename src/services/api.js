import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add timestamp to prevent caching issues
    config.params = {
      ...config.params,
      _t: Date.now(),
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear auth and redirect to login
          localStorage.removeItem("auth_token");
          window.location.href = "/login";
          break;
        case 403:
          console.error("Access forbidden");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error");
          break;
        default:
          console.error("API Error:", data?.message || error.message);
      }

      return Promise.reject(data || error.response);
    } else if (error.request) {
      console.error("Network error - no response received");
      return Promise.reject({ message: "Lỗi kết nối mạng" });
    } else {
      console.error("Request error:", error.message);
      return Promise.reject({ message: error.message });
    }
  },
);

// Generic API methods
export const apiClient = {
  get: (url, config = {}) => api.get(url, config),
  post: (url, data = {}, config = {}) => api.post(url, data, config),
  put: (url, data = {}, config = {}) => api.put(url, data, config),
  patch: (url, data = {}, config = {}) => api.patch(url, data, config),
  delete: (url, config = {}) => api.delete(url, config),
};

// Mock data for development (remove when backend is ready)
export const mockData = {
  blogPosts: [
    {
      id: 1,
      title: "Gà gáy 5h sáng, bản Liền gọi mình dậy bằng bình yên",
      slug: "ga-gay-5h-sang-ban-lien-goi-minh-day-bang-binh-yen",
      excerpt:
        "Ở bản Liền, người ta không cần báo thức. Một sáng dậy giữa sương, ngắm ruộng bậc thang xa xa, nghe tiếng gà gáy vọng qua thung – đáng 1000 story Instagram luôn!",
      content: "Nội dung bài viết đầy đủ...",
      author: "Phúc Đỗ TourGuide",
      category: "du-lich",
      tags: ["Bắc Hà", "bản Liền", "du lịch vùng cao", "Lào Cai", "cuối tuần chill"],
      featured_image: "https://vntravel.org.vn/uploads/images/2025/06/26/509441539-1303551227806945-1122938122157054925-n-1750898806.jpg",
      published_at: "2025-07-09T10:00:00Z",
      views: 1250,
      reading_time: 4,
      featured: true,
    }
  ],

  destinations: [
    {
      id: 1,
      name: "Hà Nội",
      slug: "ha-noi",
      province: "Hà Nội",
      region: "Bắc Bộ",
    },
    {
      id: 2,
      name: "Hồ Chí Minh",
      slug: "ho-chi-minh",
      province: "TP.HCM",
      region: "Nam Bộ",
    },
    {
      id: 3,
      name: "Đà Nẵng",
      slug: "da-nang",
      province: "Đà Nẵng",
      region: "Trung Bộ",
    },
    {
      id: 4,
      name: "Hội An",
      slug: "hoi-an",
      province: "Quảng Nam",
      region: "Trung Bộ",
    },
    {
      id: 5,
      name: "Sapa",
      slug: "sapa",
      province: "Lào Cai",
      region: "Bắc Bộ",
    },
    {
      id: 6,
      name: "Phú Quốc",
      slug: "phu-quoc",
      province: "Kiên Giang",
      region: "Nam Bộ",
    },
  ],
};

export default api;
