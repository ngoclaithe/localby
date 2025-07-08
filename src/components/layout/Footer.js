import React from "react";
import { Link } from "react-router-dom";
import { APP_CONFIG, BLOG_CATEGORIES } from "../../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-main">Local</span>
              <span className="logo-accent">By</span>
            </div>
            <p className="footer-description">
              Khám phá Việt Nam qua góc nhìn người dân địa phương. Chia sẻ những
              trải nghiệm du lịch chân thực và hữu ích.
            </p>
            <div className="social-links">
              <a
                href={APP_CONFIG.SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
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
              >
                <svg
                  className="social-icon"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h4 className="footer-title">Điều hướng</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="footer-link">
                  Điểm đến
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-title">Danh mục</h4>
            <ul className="footer-links">
              {BLOG_CATEGORIES.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className="footer-link"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Liên hệ</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label">Email:</span>
                <a
                  href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}
                  className="contact-link"
                >
                  {APP_CONFIG.CONTACT_EMAIL}
                </a>
              </p>
              <p className="contact-item">
                <span className="contact-label">Địa chỉ:</span>
                <span>Hà Nội, Việt Nam</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} {APP_CONFIG.SITE_NAME}. Tất cả quyền được bảo
              lưu.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="footer-bottom-link">
                Điều khoản sử dụng
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
