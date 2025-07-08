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
      title: "Khám phá ẩm thực đường phố Hà Nội",
      slug: "kham-pha-am-thuc-duong-pho-ha-noi",
      excerpt:
        "Hà Nội không chỉ nổi tiếng với những địa danh lịch sử mà còn là thiên đường ẩm thực đường phố...",
      content: "Nội dung bài viết đầy đủ...",
      author: "Ngọc Lai",
      category: "am-thuc",
      tags: ["Hà Nội", "ẩm thực", "đường phố"],
      featured_image: "/images/destinations/hanoi-food.jpg",
      published_at: "2024-01-15T10:00:00Z",
      views: 1250,
      reading_time: 5,
      featured: true,
    },
    {
      id: 2,
      title: "Top 10 điểm đến phải thăm ở Đà Nẵng",
      slug: "top-10-diem-den-phai-tham-o-da-nang",
      excerpt:
        "Đà Nẵng với bờ biển tuyệt đẹp và những cây cầu nổi tiếng đang chờ đón bạn...",
      content: "Nội dung bài viết đầy đủ...",
      author: "Minh Tuấn",
      category: "thien-nhien",
      tags: ["Đà Nẵng", "biển", "du lịch"],
      featured_image: "/images/destinations/danang-beach.jpg",
      published_at: "2024-01-10T14:30:00Z",
      views: 980,
      reading_time: 7,
      featured: false,
    },
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
