import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES, FEATURED_DESTINATIONS } from "../utils/constants";

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    // Simulate API call with mock data
    const featured = mockData.blogPosts.filter((post) => post.featured);
    const latest = mockData.blogPosts.slice(0, 6);

    setFeaturedPosts(featured);
    setLatestPosts(latest);
  }, []);

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
              Hành trình khám phá những điều kỳ diệu của Việt Nam thông qua
              những câu chuyện chân thực từ người dân địa phương. Cùng LocalBy
              tìm hiểu văn hóa, ẩm thực và vẻ đẹp ẩn giấu của mảnh đất hình chữ
              S.
            </p>
            <div className="hero-actions">
              <Link to="/destinations" className="cta-button primary">
                🗺️ Khám phá ngay
              </Link>
              <Link to="/about" className="cta-button secondary">
                📖 Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Phong cảnh Việt Nam - Vịnh Hạ Long"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">✨ Bài viết nổi bật</h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-card">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt={post.title}
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
                      <span className="author">👤 {post.author}</span>
                      <span className="date">
                        📅 {formatDate(post.published_at)}
                      </span>
                      <span className="reading-time">
                        ⏱️ {formatReadingTime(post.content)}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">🗂️ Khám phá theo chủ đề</h2>
          <div className="categories-grid">
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="category-card"
              >
                <div className="category-icon">
                  {category.slug === "am-thuc" && "🍜"}
                  {category.slug === "thien-nhien" && "🏞️"}
                  {category.slug === "van-hoa" && "🏛️"}
                  {category.slug === "festival" && "🎉"}
                  {category.slug === "pho-tay" && "🌃"}
                  {category.slug === "kinh-nghiem" && "💡"}
                </div>
                <h3 className="category-name">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="latest-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">📝 Bài viết mới nhất</h2>
            <Link to="/blog" className="view-all-link">
              Xem tất cả →
            </Link>
          </div>
          <div className="posts-grid">
            {latestPosts.map((post, index) => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index % 2 === 0
                        ? "1588392382425-d9181b0bd8c0"
                        : "1552465011-b4e21bf6e79a"
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={post.title}
                  />
                  <div className="post-category">
                    {
                      BLOG_CATEGORIES.find((cat) => cat.slug === post.category)
                        ?.name
                    }
                  </div>
                </div>
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">
                      📅 {formatDate(post.published_at)}
                    </span>
                    <span className="post-views">👁️ {post.views} lượt xem</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">🏖️ Điểm đến nổi bật</h2>
          <div className="destinations-grid">
            {FEATURED_DESTINATIONS.slice(0, 8).map((destination, index) => {
              const imageIds = [
                "1559827260-dc66d52bef19", // Ha Long Bay
                "1583417319070-4a69db38a482", // Ho Chi Minh
                "1588392382425-d9181b0bd8c0", // Da Nang
                "1552465011-b4e21bf6e79a", // Hoi An
                "1551632436-cbf8dd35adfa", // Sapa
                "1528127269322-539801943592", // Phu Quoc
                "1578662996442-48f60103fc96", // Nha Trang
                "1551632436-cbf8dd35adfa", // Da Lat
              ];

              return (
                <Link
                  key={index}
                  to={`/destination/${destination.toLowerCase().replace(/\s+/g, "-")}`}
                  className="destination-card"
                >
                  <div className="destination-image">
                    <img
                      src={`https://images.unsplash.com/photo-${imageIds[index]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                      alt={destination}
                    />
                  </div>
                  <div className="destination-name">{destination}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="newsletter-section"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "6rem 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            📮 Đăng ký nhận tin
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "2.5rem",
              opacity: "0.9",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            Nhận những bài viết mới nhất về du lịch Việt Nam và các mẹo hay từ
            người địa phương
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              maxWidth: "500px",
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              style={{
                flex: "1",
                minWidth: "250px",
                padding: "1rem 1.5rem",
                border: "none",
                borderRadius: "16px",
                fontSize: "1rem",
              }}
            />
            <button
              style={{
                padding: "1rem 2rem",
                background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
                color: "#1f2937",
                border: "none",
                borderRadius: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
