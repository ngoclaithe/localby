import React from "react";
import { Link } from "react-router-dom";
import { APP_CONFIG, BLOG_CATEGORIES } from "../../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", path: "/", icon: "🏠" },
    { name: "Điểm đến", path: "/destinations", icon: "🗺️" },
    { name: "Blog du lịch", path: "/blog", icon: "📝" },
    { name: "Giới thiệu", path: "/about", icon: "💫" },
    { name: "Liên hệ", path: "/contact", icon: "📞" },
  ];

  const featuredCategories = BLOG_CATEGORIES.slice(0, 6);

  const supportLinks = [
    { name: "Trung tâm trợ giúp", path: "/help" },
    { name: "Câu hỏi thường gặp", path: "/faq" },
    { name: "Chính sách bảo mật", path: "/privacy" },
    { name: "Điều khoản sử dụng", path: "/terms" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-md)",
                marginBottom: "var(--space-xl)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  background: "var(--gradient-sunset)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                LocalBy
              </div>
              <div
                style={{
                  background: "var(--gradient-cosmic)",
                  padding: "var(--space-sm) var(--space-md)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8rem",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                🚀 BETA
              </div>
            </div>

            <p className="footer-description">
              Nền tảng du lịch địa phương hàng đầu Việt Nam. Khám phá những câu
              chuyện chân thực, trải nghiệm độc đáo và kết nối với cộng đồng yêu
              du lịch.
            </p>

            {/* Newsletter Signup */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "var(--radius-xl)",
                padding: "var(--space-xl)",
                marginBottom: "var(--space-xl)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "var(--space-md)",
                  background: "var(--gradient-sunset)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                📮 Đăng ký nhận tin
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-sm)",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  style={{
                    flex: "1",
                    minWidth: "200px",
                    padding: "var(--space-md)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontSize: "0.9rem",
                    fontFamily: "var(--font-primary)",
                  }}
                />
                <button
                  style={{
                    padding: "var(--space-md) var(--space-lg)",
                    background: "var(--gradient-sunset)",
                    color: "white",
                    border: "none",
                    borderRadius: "var(--radius-lg)",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all var(--duration-normal) var(--ease-spring)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Đăng ký
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{ marginBottom: "var(--space-lg)" }}>
                🌐 Theo dõi chúng tôi
              </h4>
              <div className="social-links">
                <a
                  href={APP_CONFIG.SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={APP_CONFIG.SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.902 8.247 7.053 7.757 8.35 7.757s2.448.49 3.324 1.297c.876.807 1.366 1.958 1.366 3.255s-.49 2.448-1.297 3.324c-.876.876-2.027 1.366-3.324 1.366zm7.718 0c-1.297 0-2.448-.49-3.324-1.297-.876-.876-1.366-2.027-1.366-3.324s.49-2.448 1.297-3.324c.876-.876 2.027-1.366 3.324-1.366s2.448.49 3.324 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.297 3.324c-.876.876-2.027 1.366-3.324 1.366z" />
                  </svg>
                </a>
                <a
                  href={APP_CONFIG.SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link"
                  aria-label="TikTok"
                  title="TikTok"
                >
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>🚀 Điều hướng</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    <span style={{ marginRight: "var(--space-sm)" }}>
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "var(--space-xl)",
                padding: "var(--space-lg)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h5
                style={{
                  color: "white",
                  marginBottom: "var(--space-md)",
                  fontSize: "1rem",
                }}
              >
                📱 Ứng dụng di động
              </h5>
              <p
                style={{
                  color: "var(--dark-300)",
                  fontSize: "0.9rem",
                  marginBottom: "var(--space-md)",
                }}
              >
                Sắp ra mắt trên iOS & Android
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-sm)",
                  flexDirection: "column",
                }}
              >
                <button
                  style={{
                    padding: "var(--space-sm) var(--space-md)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    color: "white",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  🍎 App Store
                </button>
                <button
                  style={{
                    padding: "var(--space-sm) var(--space-md)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    color: "white",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    opacity: "0.7",
                  }}
                >
                  🤖 Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>📂 Danh mục hot</h4>
            <ul className="footer-links">
              {featuredCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="footer-link"
                  >
                    <span style={{ marginRight: "var(--space-sm)" }}>
                      {category.slug === "am-thuc" && "🍜"}
                      {category.slug === "thien-nhien" && "🏞️"}
                      {category.slug === "van-hoa" && "🏛️"}
                      {category.slug === "festival" && "🎉"}
                      {category.slug === "pho-tay" && "🌃"}
                      {category.slug === "kinh-nghiem" && "💡"}
                    </span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Stats */}
            <div
              style={{
                marginTop: "var(--space-xl)",
                padding: "var(--space-lg)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h5
                style={{
                  color: "white",
                  marginBottom: "var(--space-md)",
                  fontSize: "1rem",
                }}
              >
                📊 Thống kê
              </h5>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--space-md)",
                  fontSize: "0.85rem",
                }}
              >
                <div>
                  <div style={{ color: "white", fontWeight: "700" }}>500+</div>
                  <div style={{ color: "var(--dark-400)" }}>Bài viết</div>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: "700" }}>50+</div>
                  <div style={{ color: "var(--dark-400)" }}>Điểm đến</div>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: "700" }}>10K+</div>
                  <div style={{ color: "var(--dark-400)" }}>Độc giả</div>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: "700" }}>100+</div>
                  <div style={{ color: "var(--dark-400)" }}>Tác giả</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Contact */}
          <div className="footer-section">
            <h4>💬 Hỗ trợ</h4>
            <ul className="footer-links">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div
              style={{
                marginTop: "var(--space-xl)",
                padding: "var(--space-lg)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h5
                style={{
                  color: "white",
                  marginBottom: "var(--space-md)",
                  fontSize: "1rem",
                }}
              >
                📍 Liên hệ
              </h5>
              <div
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                <div
                  style={{
                    color: "var(--dark-300)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  📧 {APP_CONFIG.CONTACT_EMAIL}
                </div>
                <div
                  style={{
                    color: "var(--dark-300)",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  📞 +84 123 456 789
                </div>
                <div
                  style={{
                    color: "var(--dark-300)",
                  }}
                >
                  🏢 Hà Nội, Việt Nam
                </div>
              </div>

              <button
                style={{
                  marginTop: "var(--space-md)",
                  padding: "var(--space-sm) var(--space-md)",
                  background: "var(--gradient-sunset)",
                  border: "none",
                  borderRadius: "var(--radius-lg)",
                  color: "white",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all var(--duration-normal) var(--ease-spring)",
                }}
              >
                💬 Chat với chúng tôi
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-md)",
                flexWrap: "wrap",
              }}
            >
              <div className="copyright">
                © {currentYear} LocalBy. Tất cả quyền được bảo lưu.
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-sm)",
                  fontSize: "0.85rem",
                  color: "var(--dark-400)",
                }}
              >
                <span>Được xây dựng với</span>
                <span style={{ color: "#ef4444", fontSize: "1rem" }}>❤️</span>
                <span>tại Việt Nam</span>
              </div>
            </div>

            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">
                Bảo mật
              </Link>
              <Link to="/terms" className="footer-bottom-link">
                Điều khoản
              </Link>
              <Link to="/cookies" className="footer-bottom-link">
                Cookies
              </Link>
              <Link to="/sitemap" className="footer-bottom-link">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
