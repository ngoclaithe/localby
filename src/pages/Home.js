import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES, FEATURED_DESTINATIONS } from "../utils/constants";

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      const featured = mockData.blogPosts.filter((post) => post.featured);
      const latest = mockData.blogPosts.slice(0, 6);

      setFeaturedPosts(featured);
      setLatestPosts(latest);
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Khám phá Việt Nam qua
              <span className="hero-accent"> góc nhìn địa phương</span>
            </h1>
            <p className="hero-description">
              Trải nghiệm du lịch chân thực với những câu chuyện kể từ trái tim
              người dân địa phương. Khám phá văn hóa, ẩm thực và vẻ đẹp ẩn giấu
              của mảnh đất hình chữ S qua LocalBy.
            </p>
            <div className="hero-actions">
              <Link to="/destinations" className="cta-button primary">
                <span>🌟</span>
                Khám phá ngay
              </Link>
              <Link to="/blog" className="cta-button secondary">
                <span>📚</span>
                Đi Đâu Mới Zui?
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Vịnh Hạ Long - Kỳ quan thiên nhiên Việt Nam"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section featured-section">
          <div className="container">
            <h2 className="section-title">
              <span className="text-gradient">✨ Nổi bật tuần này</span>
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
                      src={`https://images.unsplash.com/photo-${
                        index % 2 === 0
                          ? "1583417319070-4a69db38a482"
                          : "1588392382425-d9181b0bd8c0"
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
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
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="text-gradient">🗂️ Khám phá theo chủ đề</span>
            </h2>
            <p className="section-subtitle">
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
                      <h3 className="category-name-enhanced">
                        {category.name}
                      </h3>
                      <p className="category-description">
                        {categoryData.description}
                      </p>
                    </div>
                    <div className="category-arrow">
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

      {/* Latest Posts */}
      <section className="section latest-section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "var(--space-3xl)",
              flexWrap: "wrap",
              gap: "var(--space-lg)",
            }}
          >
            <h2
              className="section-title"
              style={{ marginBottom: 0, textAlign: "left" }}
            >
              <span className="text-gradient">📝 Câu chuyện mới nhất</span>
            </h2>
            <Link
              to="/blog"
              className="cta-button secondary"
              style={{
                padding: "var(--space-md) var(--space-xl)",
                fontSize: "1rem",
              }}
            >
              Xem tất cả →
            </Link>
          </div>
          <div className="grid posts-grid">
            {latestPosts.map((post, index) => {
              const imageIds = [
                "1588392382425-d9181b0bd8c0",
                "1552465011-b4e21bf6e79a",
                "1583417319070-4a69db38a482",
                "1559827260-dc66d52bef19",
                "1551632436-cbf8dd35adfa",
                "1528127269322-539801943592",
              ];

              return (
                <article
                  key={post.id}
                  className="card post-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-image">
                    <img
                      src={`https://images.unsplash.com/photo-${imageIds[index % imageIds.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
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
                      <span>📅 {formatDate(post.published_at)}</span>
                      <span>👁️ {post.views.toLocaleString()} lượt xem</span>
                    </div>
                  </div>
                </article>
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
                "1559827260-dc66d52bef19", // Ha Long Bay
                "1583417319070-4a69db38a482", // Ho Chi Minh
                "1588392382425-d9181b0bd8c0", // Da Nang
                "1552465011-b4e21bf6e79a", // Hoi An
                "1551632436-cbf8dd35adfa", // Sapa
                "1528127269322-539801943592", // Phu Quoc
                "1578662996442-48f60103fc96", // Nha Trang
                "1571218447-b7ba11f10515", // Da Lat
              ];

              return (
                <Link
                  key={index}
                  to={`/destination/${destination.toLowerCase().replace(/\s+/g, "-")}`}
                  className="destination-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="section"
        style={{
          background: "var(--gradient-hero)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                marginBottom: "var(--space-lg)",
                background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              📮 Nhận tin mới nhất
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                marginBottom: "var(--space-2xl)",
                opacity: "0.9",
                lineHeight: "1.7",
              }}
            >
              Đăng ký để nhận những câu chuyện du lịch độc đáo và mẹo hay từ
              người địa phương
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-md)",
                maxWidth: "500px",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                style={{
                  flex: "1",
                  minWidth: "250px",
                  padding: "var(--space-lg)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "var(--radius-xl)",
                  fontSize: "1rem",
                  fontFamily: "var(--font-primary)",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                }}
              />
              <button
                style={{
                  padding: "var(--space-lg) var(--space-xl)",
                  background: "var(--gradient-warm)",
                  color: "white",
                  border: "none",
                  borderRadius: "var(--radius-xl)",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize: "1rem",
                  fontFamily: "var(--font-primary)",
                  transition: "all var(--duration-normal) var(--ease-bounce)",
                  whiteSpace: "nowrap",
                }}
              >
                🚀 Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="section"
        style={{
          background: "var(--color-neutral-100)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-xl)",
              textAlign: "center",
            }}
          >
            {[
              { number: "500+", label: "Bài viết", icon: "📝" },
              { number: "50+", label: "Điểm đến", icon: "🗺️" },
              { number: "10K+", label: "Độc giả", icon: "👥" },
              { number: "100+", label: "Tác giả", icon: "✍️" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glassmorphism fade-in-up"
                style={{
                  padding: "var(--space-xl)",
                  borderRadius: "var(--radius-xl)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  style={{ fontSize: "3rem", marginBottom: "var(--space-md)" }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "var(--space-sm)",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    color: "var(--color-neutral-600)",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
