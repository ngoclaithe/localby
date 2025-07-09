import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES, FEATURED_DESTINATIONS } from "../utils/constants";
import "../HomeGenZ.css";

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState({
    open: false,
    src: "",
    alt: "",
  });

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      const featured = mockData.blogPosts.filter((post) => post.featured);

      setFeaturedPosts(featured);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p
          style={{
            marginTop: "var(--space-lg)",
            color: "var(--color-neutral-600)",
          }}
        >
          Đang tải nội dung...
        </p>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Image Preview Modal */}
      {imagePreview.open && (
        <div
          className="image-preview-modal"
          onClick={() => setImagePreview({ open: false, src: "", alt: "" })}
        >
          <div
            className="image-preview-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="image-preview-close"
              onClick={() => setImagePreview({ open: false, src: "", alt: "" })}
            >
              ✕
            </button>
            <img
              src={imagePreview.src}
              alt={imagePreview.alt}
              className="image-preview-img"
            />
            <div className="image-preview-caption">{imagePreview.alt}</div>
          </div>
        </div>
      )}
      {/* Hero Section - GenZ Vibes */}
      <section className="hero-section genz-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-emoji">🏞️</div>
            <div className="floating-emoji">🍜</div>
            <div className="floating-emoji">📱</div>
            <div className="floating-emoji">✨</div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="trending-badge">🔥 HOT TREND</div>
            <h1 className="hero-title genz-title">
              Đi khám phá
              <span className="title-gradient"> Việt Nam chill phết!</span>
              <span className="title-emoji">🇻🇳</span>
            </h1>
            <p className="hero-description genz-description">
              Trải nghiệm du lịch <strong>authentic</strong> với những câu
              chuyện kể từ trái tim người địa phương. Khám phá văn hóa, ẩm thực
              và những <em>hidden gems </em>
               của mảnh đất hình chữ S qua LocalBy! 🌟
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Bài review</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Địa điểm</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Followers</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/destinations" className="cta-button primary genz-btn">
                <span>🌟</span>
                Khám phá ngay các mom ơi!
                <div className="btn-shine"></div>
              </Link>
              <Link to="/blog" className="cta-button secondary genz-btn">
                <span>📚</span>
                Đi Đâu Mới Zui?
                <div className="btn-shine"></div>
              </Link>
            </div>
            <div className="social-proof">
              <span className="social-text">
                Join cộng đồng travel addicts 🚀
              </span>
              <div className="social-avatars">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="User 1"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
                  alt="User 2"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  alt="User 3"
                />
                <span className="more-count">+1K</span>
              </div>
            </div>
          </div>
          <div className="hero-image genz-hero-image">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Vịnh Hạ Long - Kỳ quan thiên nhiên Việt Nam"
                loading="eager"
              />
              <div className="image-overlay">
                <div className="trending-tag">📍 Trending Now</div>
                <div className="like-count">
                  <span>❤️</span>
                  <span>1.2K likes</span>
                </div>
              </div>
            </div>
            <div className="story-indicators">
              <div className="story active"></div>
              <div className="story"></div>
              <div className="story"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section featured-section">
          <div className="container">
            <h2 className="section-title genz-section-title">
              <span className="text-gradient">✨ Content hot nhất tuần</span>
              <span className="subtitle text-gradient">
                Những địa điểm đang viral trên MXH 🔥
              </span>
            </h2>
            <div className="grid featured-grid">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="card featured-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <img
                      src={"/images/ban-lien/cover.jpg"}
                      alt={post.title}
                      loading="lazy"
                    />
                    <div className="card-category">
                      {
                        BLOG_CATEGORIES.find(
                          (cat) => cat.slug === post.category,
                        )?.name
                      }
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="card-meta">
                      <span>👤 {post.author}</span>
                      <span>📅 {formatDate(post.published_at)}</span>
                      <span>⏱️ {formatReadingTime(post.content)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section
        className="section categories-section"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          padding: "var(--space-5xl) 0",
        }}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: "var(--dark-800)" }}>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                🗂️ Khám phá theo chủ đề
              </span>
            </h2>
            <p
              className="section-subtitle"
              style={{
                color: "var(--dark-600)",
                fontSize: "1.1rem",
              }}
            >
              Tìm hiểu Việt Nam qua những góc nhìn đa dạng từ người dân địa
              phương
            </p>
          </div>
          <div className="categories-grid-enhanced">
            {BLOG_CATEGORIES.map((category, index) => {
              const categoryIcons = {
                "am-thuc": {
                  icon: "🍜",
                  color: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
                  description: "Khám phá hương vị độc đáo",
                },
                "thien-nhien": {
                  icon: "🏞️",
                  color: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
                  description: "Thiên nhiên hùng vĩ",
                },
                "van-hoa": {
                  icon: "🏛️",
                  color: "linear-gradient(135deg, #A8EDEA 0%, #F8E71C 100%)",
                  description: "Văn hóa truyền thống",
                },
                festival: {
                  icon: "🎉",
                  color: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)",
                  description: "Lễ hội đặc sắc",
                },
                "pho-tay": {
                  icon: "🌃",
                  color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  description: "Cuộc sống phố thị",
                },
                "kinh-nghiem": {
                  icon: "💡",
                  color: "linear-gradient(135deg, #FDBB2D 0%, #22C1C3 100%)",
                  description: "Mẹo hay từ dân địa phương",
                },
              };

              const categoryData =
                categoryIcons[category.slug] || categoryIcons["kinh-nghiem"];

              return (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="enhanced-category-card fade-in-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    "--category-gradient": categoryData.color,
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    color: "var(--dark-800)",
                  }}
                >
                  <div className="category-card-background"></div>
                  <div className="category-card-content">
                    <div className="category-icon-wrapper">
                      <div className="category-icon-large floating">
                        {categoryData.icon}
                      </div>
                      <div className="category-icon-glow"></div>
                    </div>
                    <div className="category-text">
                      <h3
                        className="category-name-enhanced"
                        style={{ color: "var(--dark-800)" }}
                      >
                        {category.name}
                      </h3>
                      <p
                        className="category-description"
                        style={{ color: "var(--dark-600)" }}
                      >
                        {categoryData.description}
                      </p>
                    </div>
                    <div
                      className="category-arrow"
                      style={{ color: "var(--dark-500)" }}
                    >
                      <span>→</span>
                    </div>
                  </div>
                  <div className="category-hover-effect"></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section
        className="section destinations-section"
        style={{
          background:
            "linear-gradient(135deg, var(--color-brand-50) 0%, var(--color-accent-50) 100%)",
        }}
      >
        <div className="container">
          <h2 className="section-title">
            <span className="text-gradient">🏖️ Điểm đến hot nhất</span>
          </h2>
          <div className="grid destinations-grid">
            {FEATURED_DESTINATIONS.slice(0, 8).map((destination, index) => {
              const imageIds = [
                "1589626288925-8b154938a337", // Ha Noi
                "1603852452440-b383ac720729", // Ho Chi Minh
                "1603852452378-a4e8d84324a2", // Da Nang
                "1660562925534-3f6948ac654f", // Hoi An
                "1693474358354-f3d31c5c5af8", // Sapa
                "1583402955903-68dd58b0d463", // Phu Quoc
                "1689326232193-d55f0b7965eb", // Nha Trang
                "1626608017817-211d7c48177d", // Da Lat
              ];

              return (
                <div
                  key={index}
                  className="destination-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    to={`/destination/${destination.toLowerCase().replace(/\s+/g, "-")}`}
                    className="destination-link"
                  >
                    <div className="destination-image">
                      <img
                        src={`https://images.unsplash.com/photo-${imageIds[index]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                        alt={destination}
                        loading="lazy"
                      />
                    </div>
                    <div className="destination-name">{destination}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA - GenZ Style */}
      <section className="newsletter-section genz-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-badge">📱 Stay Connected</div>
            <h2 className="newsletter-title">
              Đăng ký nhận noti
              <span className="gradient-text"> mỗi khi có content mới!</span>
            </h2>
            <p className="newsletter-description">
              Subscribe để không bỏ lỡ những <strong>hidden gems</strong> và 
              <em> travel hacks</em> từ các local experts 🌟
            </p>
            <div className="newsletter-features">
              <div className="feature-item">
                <span className="feature-icon">🔔</span>
                <span>Noti ngay khi có bài mới</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎁</span>
                <span>Exclusive travel guide</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">👥</span>
                <span>Join community Discord</span>
              </div>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Nhập email của mom..."
                className="newsletter-input"
              />
              <button className="newsletter-button">🚀 Subscribe ngay!</button>
            </div>
            <div className="newsletter-social">
              <span>Follow chúng mình tại:</span>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘 Facebook
                </a>
                <a href="#" className="social-link">
                  📸 Instagram
                </a>
                <a href="#" className="social-link">
                  🎵 TikTok
                </a>
                <a href="#" className="social-link">
                  💬 Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
