import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES } from "../utils/constants";

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use only the mock data from API
  const getAllPosts = () => {
    return mockData.blogPosts;
  };

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      const posts = getAllPosts();
      setAllPosts(posts);
      setIsLoading(false);
    }, 600);
  }, []);

  const featuredPosts = allPosts.filter((post) => post.featured);

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
          Đang tải bài viết...
        </p>
      </div>
    );
  }

  return (
    <div className="blog-page genz-blog">
      {/* Hero Section */}
      <section className="blog-hero genz-hero">
        <div className="blog-hero-background genz-background"></div>
        <div className="container">
          <div className="blog-hero-content">
            <div className="hero-badge">✨ Khám phá Việt Nam</div>
            <h1 className="blog-hero-title genz-hero-title">
              <span className="title-main">Câu chuyện</span>
              <span className="title-accent">Du lịch</span>
              <span className="title-emoji">🇻🇳</span>
            </h1>
            <p className="blog-hero-description">
              Khám phá Việt Nam qua những câu chuyện chân th��c từ người dân địa
              phương. Mỗi bài viết là một hành trình, mỗi hành trình là một kỷ
              niệm đáng nhớ.
            </p>
            <div className="blog-stats">
              <div className="blog-stat">
                <span className="stat-number">{allPosts.length}</span>
                <span className="stat-label">Bài viết</span>
              </div>
              <div className="blog-stat">
                <span className="stat-number">{BLOG_CATEGORIES.length}</span>
                <span className="stat-label">Chủ đề</span>
              </div>
              <div className="blog-stat">
                <span className="stat-number">
                  {allPosts
                    .reduce((sum, post) => sum + post.views, 0)
                    .toLocaleString()}
                </span>
                <span className="stat-label">Lượt đọc</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="blog-featured">
          <div className="container">
            <h2 className="section-title">
              <span className="text-gradient">⭐ Nổi bật</span>
            </h2>
            <div
              className={`featured-posts-grid ${featuredPosts.length <= 2 ? "featured-posts-grid-equal" : ""}`}
            >
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="featured-post-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="featured-post-image">
                    <img
                      src={"/images/ban-lien/cover.jpg"}
                      alt={post.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="featured-post-category">
                      {
                        BLOG_CATEGORIES.find(
                          (cat) => cat.slug === post.category,
                        )?.name
                      }
                    </div>
                  </div>
                  <div className="featured-post-content">
                    <h3 className="featured-post-title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="featured-post-excerpt">{post.excerpt}</p>
                    <div className="featured-post-meta">
                      <span className="post-author">👤 {post.author}</span>
                      <span className="post-date">
                        📅 {formatDate(post.published_at)}
                      </span>
                      <span className="post-reading-time">
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

      {/* Newsletter CTA */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              Đừng bỏ lỡ những câu chuyện mới nhất!
            </h2>
            <p className="newsletter-description">
              Đăng ký để nhận thông báo khi có bài viết mới và những mẹo du lịch
              hay từ LocalBy
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="newsletter-input"
              />
              <button className="newsletter-submit">
                <span>📮</span>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
