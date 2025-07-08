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
              Chia sẻ những trải nghiệm du lịch chân thực, hữu ích từ người dân
              địa phương. Cùng LocalBy khám phá vẻ đẹp ẩn giấu của mảnh đất hình
              chữ S.
            </p>
            <div className="hero-actions">
              <Link to="/destinations" className="cta-button primary">
                Khám phá ngay
              </Link>
              <Link to="/about" className="cta-button secondary">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/hero/vietnam-landscape.jpg"
              alt="Phong cảnh Việt Nam"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Bài viết nổi bật</h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-card">
                  <div className="card-image">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
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
                      <span className="author">Bởi {post.author}</span>
                      <span className="date">
                        {formatDate(post.published_at)}
                      </span>
                      <span className="reading-time">
                        {formatReadingTime(post.content)}
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
          <h2 className="section-title">Danh mục du lịch</h2>
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
            <h2 className="section-title">Bài viết mới nhất</h2>
            <Link to="/blog" className="view-all-link">
              Xem tất cả →
            </Link>
          </div>
          <div className="posts-grid">
            {latestPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>
                <div className="post-content">
                  <div className="post-category">
                    {
                      BLOG_CATEGORIES.find((cat) => cat.slug === post.category)
                        ?.name
                    }
                  </div>
                  <h3 className="post-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="post-date">
                      {formatDate(post.published_at)}
                    </span>
                    <span className="post-views">{post.views} lượt xem</span>
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
          <h2 className="section-title">Điểm đến nổi bật</h2>
          <div className="destinations-grid">
            {FEATURED_DESTINATIONS.slice(0, 8).map((destination, index) => (
              <Link
                key={index}
                to={`/destination/${destination.toLowerCase().replace(/\s+/g, "-")}`}
                className="destination-card"
              >
                <div className="destination-image">
                  <img
                    src={`/images/destinations/${destination.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                    alt={destination}
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`;
                    }}
                  />
                </div>
                <div className="destination-name">{destination}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
