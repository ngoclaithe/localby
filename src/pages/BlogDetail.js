import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES } from "../utils/constants";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock detailed content for the post
  const getDetailedContent = (postData) => {
    return `
      <p>Việt Nam - đất nước hình chữ S xinh đẹp của chúng ta, không chỉ nổi tiếng với những cảnh quan thiên nhiên hùng vĩ mà còn với nền ẩm thực phong phú và đa dạng. Mỗi vùng miền đều có những đặc sản riêng, mang đậm dấu ấn văn hóa địa phương.</p>

      <h2>🍜 Ẩm thực miền Bắc - Tinh tế và đậm đà</h2>
      <p>Miền Bắc nổi tiếng với những món ăn tinh tế, hương vị đậm đà và cách chế biến cầu kỳ. Từ tô phở nóng hổi vào buổi sáng đến chén bún chả thơm phức vào buổi trưa, mỗi món ăn đều kể một câu chuyện riêng về văn hóa và con người nơi đây.</p>

      <blockquote>
        "Ẩm thực không chỉ là thức ăn, mà là cầu nối kết nối con người với nhau, kết nối quá khứ với hiện tại." - Đầu bếp Ngọc Lai
      </blockquote>

      <h3>🥢 Những món ăn không thể bỏ qua:</h3>
      <ul>
        <li><strong>Phở Hà Nội:</strong> Biểu tượng của ẩm thực Việt Nam với nước dùng trong vắt, bánh phở dai dai và thịt bò tươi ngon.</li>
        <li><strong>Bún chả:</strong> Món ăn đặc trưng với thịt nướng thơm phức, bún tươi và nước mắm chua ngọt.</li>
        <li><strong>Chả cá Lã Vọng:</strong> Món ăn truyền thống v��i cá lang tẩm ướp nghệ và galangal, nướng trên bếp than.</li>
      </ul>

      <h2>🌶️ Ẩm thực miền Trung - Cay nồng và đậm chất</h2>
      <p>Miền Trung với khí hậu khắc nghiệt đã tạo nên những món ăn có vị cay nồng đặc trưng. Huế - cố đô của Việt Nam, không chỉ nổi tiếng với những di tích lịch sử mà còn với nền ẩm thực cung đình tinh tế.</p>

      <div class="image-gallery">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ẩm thực Việt Nam" />
        <p class="image-caption">Hương vị đặc trưng của ẩm thực Việt Nam (Ảnh: Unsplash)</p>
      </div>

      <h2>🥥 Ẩm thực miền Nam - Ngọt ngào và đậm đà</h2>
      <p>Miền Nam với đất đai phì nhiêu, khí hậu ôn hòa đã tạo nên những món ăn mang hương vị ngọt ngào đặc trưng. Sự sáng tạo và phong phú trong cách chế biến đã làm nên sự đa dạng của ẩm thực miền Nam.</p>

      <h3>💡 Mẹo hay khi thưởng thức ẩm thực Việt Nam:</h3>
      <ol>
        <li>Hãy thử ăn như người địa phương - dùng đũa và thìa đúng cách</li>
        <li>Đừng ngần ngại thử các loại rau thơm địa phương</li>
        <li>Nước mắm là linh hồn của ẩm thực Việt, hãy học cách sử dụng</li>
        <li>Mỗi vùng miền có cách ăn riêng, hãy tôn trọng và trải nghiệm</li>
      </ol>

      <p>Ẩm thực Việt Nam không chỉ là những món ăn ngon, mà còn là câu chuyện về con người, về tình yêu quê hương và niềm tự hào dân tộc. Mỗi lần thưởng thức một món ăn Việt Nam, chúng ta đang cảm nhận được tâm hồn và tình cảm mà người đầu bếp đã gửi gắm vào đó.</p>

      <p><em>Hãy cùng LocalBy khám phá thêm nhiều câu chuyện ẩm thực thú vị khác từ khắp mọi miền đất nước Việt Nam xinh đẹp!</em></p>
    `;
  };

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      // Find the post by slug
      const foundPost = mockData.blogPosts.find((p) => p.slug === slug);

      if (foundPost) {
        const detailedPost = {
          ...foundPost,
          content: getDetailedContent(foundPost),
          views: foundPost.views + Math.floor(Math.random() * 10) + 1, // Simulate view increment
        };
        setPost(detailedPost);

        // Get related posts (same category, different slug)
        const related = mockData.blogPosts
          .filter((p) => p.category === foundPost.category && p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(related);
      }

      setIsLoading(false);
    }, 800);
  }, [slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link đã được sao chép vào clipboard!");
    }
  };

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

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Không tìm thấy bài viết</h1>
            <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link to="/blog" className="back-to-blog">
              ← Quay lại trang Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const category = BLOG_CATEGORIES.find((cat) => cat.slug === post.category);

  return (
    <div className="blog-detail-page">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">
              Trang chủ
            </Link>
            <span className="breadcrumb-separator">→</span>
            <Link to="/blog" className="breadcrumb-link">
              Blog
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="article-header">
        <div className="container">
          <div className="article-header-content">
            <div className="article-meta-top">
              <span className="article-category">{category?.name}</span>
              <span className="article-date">
                {formatDate(post.published_at)}
              </span>
            </div>

            <h1 className="article-title">{post.title}</h1>
            <p className="article-excerpt">{post.excerpt}</p>

            <div className="article-info">
              <div className="author-info">
                <div className="author-avatar">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                    alt={post.author}
                    loading="lazy"
                  />
                </div>
                <div className="author-details">
                  <div className="author-name">Bởi {post.author}</div>
                  <div className="author-title">Tác giả LocalBy</div>
                </div>
              </div>

              <div className="article-stats">
                <span className="stat-item">
                  <span className="stat-icon">⏱️</span>
                  {formatReadingTime(post.content)}
                </span>
                <span className="stat-item">
                  <span className="stat-icon">👁️</span>
                  {post.views.toLocaleString()} lượt xem
                </span>
              </div>
            </div>

            <div className="article-actions">
              <button
                onClick={handleLike}
                className={`action-button ${isLiked ? "active" : ""}`}
              >
                <span className="action-icon">{isLiked ? "❤️" : "🤍"}</span>
                <span>Thích</span>
              </button>
              <button
                onClick={handleBookmark}
                className={`action-button ${isBookmarked ? "active" : ""}`}
              >
                <span className="action-icon">
                  {isBookmarked ? "🔖" : "📌"}
                </span>
                <span>Lưu</span>
              </button>
              <button onClick={handleShare} className="action-button">
                <span className="action-icon">📤</span>
                <span>Chia sẻ</span>
              </button>
            </div>
          </div>

          <div className="article-image">
            <img
              src={`https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
              alt={post.title}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="content-layout">
            <article className="main-content">
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="article-tags">
                <h4 className="tags-title">Tags:</h4>
                <div className="tags-list">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag-item">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="article-share">
                <h4 className="share-title">Chia sẻ bài viết này:</h4>
                <div className="share-buttons">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button facebook"
                  >
                    <span>📘</span>
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button twitter"
                  >
                    <span>🐦</span>
                    Twitter
                  </a>
                  <button onClick={handleShare} className="share-button native">
                    <span>📱</span>
                    Chia sẻ
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar">
              {/* Table of Contents */}
              <div className="sidebar-widget">
                <h4 className="widget-title">📋 Mục lục</h4>
                <nav className="table-of-contents">
                  <ul>
                    <li>
                      <a href="#section-1">Ẩm thực miền Bắc</a>
                    </li>
                    <li>
                      <a href="#section-2">Ẩm thực miền Trung</a>
                    </li>
                    <li>
                      <a href="#section-3">Ẩm thực miền Nam</a>
                    </li>
                    <li>
                      <a href="#section-4">Mẹo hay</a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Author Bio */}
              <div className="sidebar-widget">
                <h4 className="widget-title">👤 Về tác giả</h4>
                <div className="author-bio">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                    alt={post.author}
                    className="author-bio-avatar"
                  />
                  <h5 className="author-bio-name">{post.author}</h5>
                  <p className="author-bio-description">
                    Tác giả LocalBy với niềm đam mê khám phá và chia sẻ những
                    câu chuyện du lịch độc đáo từ khắp Việt Nam.
                  </p>
                  <div className="author-stats">
                    <span className="author-stat">
                      <span className="stat-number">25</span>
                      <span className="stat-label">Bài viết</span>
                    </span>
                    <span className="author-stat">
                      <span className="stat-number">1.2K</span>
                      <span className="stat-label">Followers</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="sidebar-widget newsletter-widget">
                <h4 className="widget-title">📮 Đăng ký nhận tin</h4>
                <p className="newsletter-description">
                  Nhận thông báo về những bài viết mới nhất từ LocalBy
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Email của bạn..."
                    className="newsletter-input"
                  />
                  <button className="newsletter-button">Đăng ký</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2 className="section-title">
              <span className="text-gradient">📖 Bài viết liên quan</span>
            </h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={relatedPost.id}
                  className="related-post-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="related-post-image">
                    <img
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? "1588392382425-d9181b0bd8c0" : "1551632436-cbf8dd35adfa"}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                      alt={relatedPost.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="related-post-content">
                    <div className="related-post-category">
                      {
                        BLOG_CATEGORIES.find(
                          (cat) => cat.slug === relatedPost.category,
                        )?.name
                      }
                    </div>
                    <h3 className="related-post-title">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="related-post-excerpt">
                      {relatedPost.excerpt}
                    </p>
                    <div className="related-post-meta">
                      <span>📅 {formatDate(relatedPost.published_at)}</span>
                      <span>⏱️ {formatReadingTime(relatedPost.content)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="blog-detail-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Thích bài viết này? Khám phá thêm!</h2>
            <p className="cta-description">
              Cùng LocalBy khám phá thêm nhiều câu chuyện du lịch thú vị khác từ
              khắp Việt Nam
            </p>
            <div className="cta-actions">
              <Link to="/blog" className="cta-button primary">
                <span>📚</span>
                Xem thêm bài viết
              </Link>
              <Link to="/destinations" className="cta-button secondary">
                <span>🗺️</span>
                Khám phá điểm đến
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
