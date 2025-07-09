import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES } from "../utils/constants";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  const [sortBy, setSortBy] = useState("latest");
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
      setFilteredPosts(posts);
      setIsLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    let filtered = [...allPosts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "latest":
          return new Date(b.published_at) - new Date(a.published_at);
        case "oldest":
          return new Date(a.published_at) - new Date(b.published_at);
        case "popular":
          return b.views - a.views;
        case "reading_time":
          return a.reading_time - b.reading_time;
        default:
          return 0;
      }
    });

    setFilteredPosts(filtered);

    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (searchTerm) params.set("search", searchTerm);
    setSearchParams(params);
  }, [allPosts, selectedCategory, searchTerm, sortBy, setSearchParams]);

  const featuredPosts = allPosts.filter((post) => post.featured);
  const sortOptions = [
    { value: "latest", label: "Mới nhất" },
    { value: "popular", label: "Phổ biến nhất" },
    { value: "oldest", label: "Cũ nhất" },
    { value: "reading_time", label: "Đọc nhanh nhất" },
  ];

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
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-background"></div>
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">
              <span className="title-main">Câu chuyện</span>
              <span className="title-accent">Du lịch</span>
            </h1>
            <p className="blog-hero-description">
              Khám phá Việt Nam qua những câu chuyện chân thực từ người dân địa
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
            <div className="featured-posts-grid">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="featured-post-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="featured-post-image">
                    <img
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? "1583417319070-4a69db38a482" : "1588392382425-d9181b0bd8c0"}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={post.title}
                      loading="lazy"
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

      {/* Filters and Search */}
      <section className="blog-filters">
        <div className="container">
          <div className="filters-container">
            {/* Search */}
            <div className="search-section">
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết, tác giả, từ khóa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="search-clear"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`category-filter ${selectedCategory === "all" ? "active" : ""}`}
              >
                Tất cả ({allPosts.length})
              </button>
              {BLOG_CATEGORIES.map((category) => {
                const count = allPosts.filter(
                  (post) => post.category === category.slug,
                ).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`category-filter ${selectedCategory === category.slug ? "active" : ""}`}
                  >
                    {category.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="sort-section">
              <label htmlFor="sort-select" className="sort-label">
                Sắp xếp:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Info */}
          <div className="results-info">
            <p>
              Hiển thị <strong>{filteredPosts.length}</strong> bài viết
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  trong chủ đề{" "}
                  <strong>
                    {
                      BLOG_CATEGORIES.find(
                        (cat) => cat.slug === selectedCategory,
                      )?.name
                    }
                  </strong>
                </span>
              )}
              {searchTerm && (
                <span>
                  {" "}
                  cho từ khóa "<strong>{searchTerm}</strong>"
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-content">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">📝</span>
              <h3>Không tìm thấy bài viết nào</h3>
              <p>Hãy thử tìm kiếm với từ khóa khác hoặc chọn chủ đề khác</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="reset-filters-btn"
              >
                Xóa bộ lọc
              </button>
            </div>
          ) : (
            <div className="blog-posts-grid">
              {filteredPosts.map((post, index) => {
                const imageIds = [
                  "1588392382425-d9181b0bd8c0",
                  "1552465011-b4e21bf6e79a",
                  "1583417319070-4a69db38a482",
                  "1559827260-dc66d52bef19",
                  "1551632436-cbf8dd35adfa",
                  "1528127269322-539801943592",
                  "1578662996442-48f60103fc96",
                  "1571218447-b7ba11f10515",
                ];

                return (
                  <article
                    key={post.id}
                    className="blog-post-card fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="blog-post-image">
                      <img
                        src={`https://images.unsplash.com/photo-${imageIds[index % imageIds.length]}?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                        alt={post.title}
                        loading="lazy"
                      />
                      <div className="blog-post-category">
                        {
                          BLOG_CATEGORIES.find(
                            (cat) => cat.slug === post.category,
                          )?.name
                        }
                      </div>
                      <div className="blog-post-reading-time">
                        ⏱️ {formatReadingTime(post.content)}
                      </div>
                    </div>
                    <div className="blog-post-content">
                      <h3 className="blog-post-title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="blog-post-excerpt">{post.excerpt}</p>
                      <div className="blog-post-meta">
                        <div className="meta-left">
                          <span className="post-author">👤 {post.author}</span>
                          <span className="post-date">
                            📅 {formatDate(post.published_at)}
                          </span>
                        </div>
                        <div className="meta-right">
                          <span className="post-views">
                            👁️ {post.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="post-tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && filteredPosts.length % 6 === 0 && (
            <div className="load-more-section">
              <button className="load-more-btn">
                <span>📖</span>
                Xem thêm bài viết
              </button>
            </div>
          )}
        </div>
      </section>

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
