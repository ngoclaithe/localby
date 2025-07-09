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
  const [readingProgress, setReadingProgress] = useState(0);

  // Scroll progress for reading indicator
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  // Mock detailed content for the post
  const getDetailedContent = (postData) => {
    if (
      postData.slug === "ga-gay-5h-sang-ban-lien-goi-minh-day-bang-binh-yen"
    ) {
      return `
        <div class="content-section" id="section-1">
          <h2 class="section-heading"><span class="section-icon">🚗</span>1. Di chuyển</h2>

          <div class="transport-option">
            <h3 class="option-title"><span class="option-icon">🚙</span>Di chuyển bằng phương tiện cá nhân</h3>
            <div class="highlight-box info-box">
              <p><strong>Quãng đường:</strong> ~300km từ Hà Nội → Bắc Hà + 22km → Bản Liền</p>
              <p><strong>Thời gian:</strong> Khoảng 6 tiếng đồng hồ</p>
              <p><strong>Lưu ý:</strong> Chỉ nên sử dụng xe từ 16 chỗ trở xuống</p>
            </div>
          </div>

          <div class="media-showcase">
            <div class="main-image">
              <img src="/images/ban-lien/bando.jpg" alt="Lộ trình di chuyển" />
              <div class="image-overlay">
                <span class="image-caption">📍 Lộ trình di chuyển từ trung tâm thị trấn Bắc Hà tới Bản Liền</span>
              </div>
            </div>
          </div>

          <div class="transport-option">
            <h3 class="option-title"><span class="option-icon">🚌</span>Di chuyển bằng xe khách</h3>
        <p>Từ Hà Nội có thể bắt xe khách của những nhà xe như Futa Hà Sơn (ưu tiên), xe Trúc Nghiêu, xe Vũ Hán Group… Đặt vé qua ứng dụng Vexere hoặc tổng đài nhà xe. Thời gian di chuyển khoảng 6 tiếng đồng hồ.</p>

        <p>(Ngoài ra có thể đặt xe đi Sapa và xuống tại điểm Bến xe trung tâm thành phố Lào Cai, sau đó bắt xe trung chuyển lên thị trấn Bắc Hà. Tại bến xe có rất nhiều xe lên Bắc Hà, để có thêm thông tin về nhà xe vui lòng hỏi sự tư vấn của nhân viên nhà xe. Đối với cách này quý khách sẽ có nhiều lựa chọn về khung giờ hơn, tuy nhiên nhược điểm là sẽ phải đổi xe nhiều lần và tốn nhiều thời gian chờ đợi.)</p>

        <p>Sau khi tới trung tâm thị trấn Bắc Hà hoặc Bến xe Bắc Hà, di chuyển tới Khách sạn Ngân Nga (Ngan Nga Bac Ha Hotel trên Google maps) để nghỉ ngơi hoặc thuê xe máy, liên hệ anh Đông theo SĐT 0817801988. Ngoài ra quý khách cũng có thể đặt dịch vụ xe ôm (khoảng 200k/người) liên hệ chú An - đội trưởng đội xe ôm du lịch Bắc Hà SĐT 0827999339 hoặc taxi (khoảng 700-800k) để tới Bản Liền. Vào mùa cao điểm như tháng 8-9-10 quý khách nên gọi điện đặt xe trước tránh tình trạng quá tải.</p>

        <p>Tiếp theo, nhập tên homestay tại Bản Liền và di chuyển theo Google Maps. Từ trung tâm Bắc Hà tới Bản Liền quãng đường khoảng 22km tương ứng với hơn 1 tiếng đồng hồ lái xe.</p>

        <div class="image-grid">
          <img src="/images/ban-lien/duong.jpg" alt="Đường vào Bản Liền" />
          <img src="/images/ban-lien/satlo.jpg" alt="Sạt lở" />
        </div>
        <p class="image-caption">Hình ảnh 2 và hình ảnh 3</p>

        <blockquote>
          <strong>Lưu ý:</strong> Đường vào Bản Liền từ Bắc Hà tương đối đẹp, không quá dốc và không có quá nhiều khúc cua khó, tuy nhiên sau những ngày mưa có thể xuất hiện nhiều đoạn đường bị bùn đất từ trên núi sạt xuống che lấp, qua những đoạn này quý khách nên đi chậm và về số thấp đối với xe số. Những đoạn đường xấu không quá nhiều nên quý khách hoàn toàn có thể yên tâm. Ngoài ra nên đi dép và quần ngắn khi di chuyển bằng xe máy vào bản để tránh bị bùn đất làm bẩn.
        </blockquote>

        <p>Khi gần tới homestay nếu không tìm được đường xuống hoặc đường quá dốc và khó đi, quý khách có thể liên hệ chủ nhà lên hỗ trợ đưa xe và hành lý xuống.</p>

        </div>

        <div class="content-section" id="section-2">
          <h2 class="section-heading"><span class="section-icon">🏠</span>2. Các cơ sở lưu trú</h2>

          <div class="homestay-card featured-homestay">
            <div class="homestay-header">
              <h3 class="homestay-name">Banlien Pine Homestay</h3>
              <div class="contact-info">
                <span class="phone-number">📞 0886 073 408</span>
                <span class="owner-name">👤 Vàng Thị Thông</span>
              </div>
            </div>
        <div class="image-grid large">
          <img src="/images/ban-lien/pine-homestay/1.jpg" alt="Banlien Pine Homestay - Phòng tập thể" />
          <img src="/images/ban-lien/pine-homestay/2.jpg" alt="Banlien Pine Homestay - Phòng tắm" />
          <img src="/images/ban-lien/pine-homestay/3.jpg" alt="Banlien Pine Homestay - Bungalow" />
          <img src="/images/ban-lien/pine-homestay/4.jpg" alt="Banlien Pine Homestay - Không gian chung" />
          <img src="/images/ban-lien/pine-homestay/5.jpg" alt="Banlien Pine Homestay - Khu vực ăn uống" />
          <img src="/images/ban-lien/pine-homestay/6.jpg" alt="Banlien Pine Homestay - Phòng vệ sinh" />
          <img src="/images/ban-lien/pine-homestay/7.jpg" alt="Banlien Pine Homestay - Bungalow interior" />
          <img src="/images/ban-lien/pine-homestay/8.jpg" alt="Banlien Pine Homestay - Khu vực nghỉ ngơi" />
          <img src="/images/ban-lien/pine-homestay/9.jpg" alt="Banlien Pine Homestay - View từ homestay" />
        </div>

        <p>BanLien Pine Homestay hiện đang có sức chứa khoảng 15-20 khách đối với phòng tập thể (ảnh 3-4) và 2-5 khách đối với phòng bungalow (ảnh 7-8-9). Hiện tại gia đình có 1 phòng bungalow và tương lai sẽ có thêm một phòng nữa. Gia đình hiện có 2 phòng tắm có trang bị bình nóng lạnh và 2 phòng vệ sinh (ảnh 6), phòng bungalow có phòng tắm và phòng vệ sinh khép kín.</p>

        <p><strong>Dịch vụ:</strong> Lưu trú, ăn uống, hướng dẫn viên hướng dẫn trải nghiệm các hoạt động đặc sắc tại Bản Liền.</p>

        <p><strong>Phí dịch vụ:</strong></p>
        <ul>
          <li>150k/người/đêm cho phòng tập thể</li>
          <li>Ăn uống: 150k/người áp dụng với bữa trưa và bữa tối, 50k/người cho bữa sáng</li>
          <li>Hướng dẫn viên: 400k - 500k/ngày áp dụng cho cả đoàn</li>
          <li>Đối với phòng Bungalow mức giá sẽ phụ thuộc vào số lượng khách, vui lòng liên hệ chủ nhà để có thêm thông tin chi tiết.</li>
        </ul>

        <h3>Bản Liền Forest Homestay (0343 639 564 - Lâm A Nâng)</h3>
        <div class="image-grid large">
          <img src="/images/ban-lien/forest-homestay/1.jpg" alt="Forest Homestay - Exterior" />
          <img src="/images/ban-lien/forest-homestay/2.jpg" alt="Forest Homestay - Phòng tập thể" />
          <img src="/images/ban-lien/forest-homestay/3.jpg" alt="Forest Homestay - Phòng riêng" />
          <img src="/images/ban-lien/forest-homestay/4.jpg" alt="Forest Homestay - Khu vực chung" />
          <img src="/images/ban-lien/forest-homestay/5.jpg" alt="Forest Homestay - Phòng tắm" />
          <img src="/images/ban-lien/forest-homestay/6.jpg" alt="Forest Homestay - Khu bếp" />
          <img src="/images/ban-lien/forest-homestay/7.jpg" alt="Forest Homestay - Phòng bungalow" />
          <img src="/images/ban-lien/forest-homestay/8.jpg" alt="Forest Homestay - Toilet riêng" />
          <img src="/images/ban-lien/forest-homestay/9.jpg" alt="Forest Homestay - View" />
        </div>

        <p>Bản Liền Forest Homestay hiện đang có sức chứa khoảng 15-20 khách đối với phòng tập thể (ảnh 4) và 2-6 khách đối với phòng bungalow 2 giường (ảnh 7-8). Hiện tại gia đình có 1 phòng riêng chứa được tối đa 6 người. Homestay được trang bị 2 phòng tắm có bình nóng lạnh và 2 phòng vệ sinh (ảnh 6), phòng riêng có phòng tắm và phòng vệ sinh khép kín (ảnh 9).</p>

        <p><strong>Dịch vụ:</strong> Lưu trú, ăn uống, hướng dẫn viên hướng dẫn trải nghiệm các hoạt động đặc sắc tại Bản Liền.</p>

        <p><strong>Phí dịch vụ:</strong></p>
        <ul>
          <li>150k/người/đêm cho phòng tập thể</li>
          <li>Ăn uống: 150k/người áp dụng với bữa trưa và bữa tối, 50k/người cho bữa sáng</li>
          <li>Hướng dẫn viên: 400k - 500k/ngày áp dụng cho cả đoàn</li>
          <li>Phòng riêng có giá 600k/đêm áp cho tối đa 6 khách</li>
        </ul>

        <h3>Hướng Hoan Homestay (0837 856 293 - Lâm A Hướng)</h3>
        <div class="image-grid large">
          <img src="/images/ban-lien/huong-hoan-homestay/1.jpg" alt="Hướng Hoan Homestay - Exterior" />
          <img src="/images/ban-lien/huong-hoan-homestay/2.jpg" alt="Hướng Hoan Homestay - Phòng tập thể" />
          <img src="/images/ban-lien/huong-hoan-homestay/3.jpg" alt="Hướng Hoan Homestay - Khu vực chung" />
          <img src="/images/ban-lien/huong-hoan-homestay/4.jpg" alt="Hướng Hoan Homestay - Phòng tắm" />
          <img src="/images/ban-lien/huong-hoan-homestay/5.jpg" alt="Hướng Hoan Homestay - Khu bếp" />
          <img src="/images/ban-lien/huong-hoan-homestay/6.jpg" alt="Hướng Hoan Homestay - Khu vực ăn" />
          <img src="/images/ban-lien/huong-hoan-homestay/7.jpg" alt="Hướng Hoan Homestay - Giường ngủ" />
          <img src="/images/ban-lien/huong-hoan-homestay/8.jpg" alt="Hướng Hoan Homestay - View núi" />
          <img src="/images/ban-lien/huong-hoan-homestay/9.jpg" alt="Hướng Hoan Homestay - Sân" />
        </div>
        <p>Hướng Hoan Homestay hiện đang có sức chứa khoảng dưới 10 khách đối với phòng tập thể, gia đình hiện chưa có phòng bungalow. Homestay hi���n có 1 phòng tắm có trang bị bình nóng lạnh và 1 phòng vệ sinh và sẽ xây dựng thêm trong thời gian tới.</p>

        <p><strong>Dịch vụ:</strong> Lưu trú, ăn uống, hướng dẫn viên hướng dẫn trải nghiệm các hoạt động đặc sắc tại Bản Liền.</p>

        <p><strong>Phí dịch vụ:</strong></p>
        <ul>
          <li>150k/người/đêm cho phòng tập thể</li>
          <li>Ăn uống: 150k/người áp dụng với bữa trưa và bữa tối, 50k/người cho bữa sáng</li>
          <li>Hướng dẫn viên: 400k - 500k/ngày áp dụng cho cả đoàn</li>
        </ul>

        <h3>Vang A Binh Homestay (0388 572 409 - Vàng A Bình)</h3>
        <div class="image-grid large">
          <img src="/images/ban-lien/vang-a-binh-homestay/1.jpg" alt="Vang A Binh Homestay - Exterior" />
          <img src="/images/ban-lien/vang-a-binh-homestay/2.jpg" alt="Vang A Binh Homestay - Phòng tập" />
          <img src="/images/ban-lien/vang-a-binh-homestay/3.jpg" alt="Vang A Binh Homestay - Khu vực chung" />
          <img src="/images/ban-lien/vang-a-binh-homestay/4.jpg" alt="Vang A Binh Homestay - Phòng ngủ" />
          <img src="/images/ban-lien/vang-a-binh-homestay/5.jpg" alt="Vang A Binh Homestay - Khu bếp" />
          <img src="/images/ban-lien/vang-a-binh-homestay/6.jpg" alt="Vang A Binh Homestay - Khu vực ăn" />
          <img src="/images/ban-lien/vang-a-binh-homestay/7.jpg" alt="Vang A Binh Homestay - Phòng tắm" />
          <img src="/images/ban-lien/vang-a-binh-homestay/8.jpg" alt="Vang A Binh Homestay - View đường" />
          <img src="/images/ban-lien/vang-a-binh-homestay/9.jpg" alt="Vang A Binh Homestay - Cảnh quan" />
        </div>

        <p>Vang A Binh Homestay nằm ở cuối đường bê tông của Bản Liền, từ trung tâm xã tới homestay khoảng 15-20 phút di chuyển. Homestay hiện đang có sức chứa tối đa khoảng 15 khách tại phòng tập thể. Gia đình hiện chưa có phòng riêng.</p>

        <p><strong>Dịch vụ:</strong> Lưu trú, ăn uống, hướng dẫn viên hướng dẫn trải nghiệm các hoạt động đặc sắc tại Bản Liền.</p>

        <p><strong>Phí dịch vụ:</strong></p>
        <ul>
          <li>150k/người/đêm cho phòng tập thể</li>
          <li>Ăn uống: 150k/người áp dụng với bữa trưa và bữa tối, 50k/người cho bữa sáng</li>
          <li>Hướng dẫn viên: 400k - 500k/ngày áp dụng cho cả đoàn</li>
        </ul>

        <h2>3. Hoạt động trải nghiệm</h2>
        <p>Tại Bản Liền quý khách có thể trải nghiệm vô số các hoạt động đặc sắc để hiểu hơn về văn hoá của người dân tộc thiểu số nói chung và của người Tày tại Bản Liền nói riêng.</p>

        <p>Một số hoạt động có thể kể tới như: Hái chè và làm chè hữu cơ, thăm ruộng bậc thang, cấy lúa, chăn trâu, xúc cá, tắm thác, dùng bữa bên suối, lên rừng lấy tre, làm đũa cẩm truyền thống, nấu ăn cùng gia đình, đan nón lá, văn nghệ truyền thống, trò chơi dân tộc, làm cốm (theo mùa)….</p>

        <h3>Lịch trình tham khảo cho chương trình trải nghiệm 2 ngày 1 đêm tại Bản Liền:</h3>

        <h4>Ngày 1:</h4>
        <ul>
          <li><strong>7h:</strong> Thức dậy đón bình minh tại Bản Liền, vệ sinh cá nhân sau đó dùng bữa sáng</li>
          <li><strong>8h - 11h:</strong> Lên rừng chè cổ thụ, uống nước suối nguồn, hái rau mầm đá và lấy tre về làm đũa cẩm</li>
          <li><strong>12h:</strong> Dùng bữa trưa cùng gia đình sau đó nghỉ trưa</li>
          <li><strong>14h:</strong> Thăm quan thác nước tại trung tâm xã, tắm thác, hái rau rừng</li>
          <li><strong>19h:</strong> Dùng bữa tối sau đó nghỉ ngơi hoặc tham gia hoạt động làm cốc tre, làm đũa cẩm, làm trà, chơi trò chơi dân tộc…</li>
        </ul>

        <h4>Ngày 2:</h4>
        <ul>
          <li><strong>7h:</strong> Dùng bữa sáng sau đó quý khách có thể chọn tham gia các hoạt động trải nghiệm hoặc nghỉ ngơi thư giãn và tận hưởng thiên nhiên tại homestay.</li>
          <li><strong>8h:</strong> Ra chơi suối, xúc cá suối, hái chè, check-in ruộng bậc thang quanh nhà</li>
          <li><strong>12h:</strong> Dùng bữa trưa và nghỉ ngơi sau đó di chuyển về Hà Nội</li>
        </ul>

        <blockquote>
          <strong>Lưu ý:</strong><br/>
          Đây chỉ là lịch trình tham khảo, tuỳ vào tình hình thời tiết và mùa vụ mà các hoạt động trải nghiệm có thể khác nhau và có những điều chỉnh sao cho phù hợp với tình hình thực tế. Để có thêm thông tin về những hoạt động trải nghiệm cụ thể theo từng ngày quý khách vui lòng liên hệ với chủ nhà để được tư vấn thêm.<br/>
          Các hoạt động trải nghiệm áp dụng cho tất cả các hộ homestay tại Bản Liền.
        </blockquote>
      `;
    }

    // Default content for other posts (if any)
    return `
      <p>Việt Nam - đất nước hình chữ S xinh đẹp của chúng ta, không chỉ nổi tiếng với những cảnh quan thiên nhiên hùng vĩ mà còn với nền ẩm thực phong phú và đa dạng.</p>
      <p><em>Hãy cùng LocalBy khám phá thêm nhiều câu chuyện du lịch thú vị khác!</em></p>
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
          </div>

          <div className="article-image">
            <img
              src={"/images/ban-lien/cover.jpg"}
              alt={post.title}
              loading="eager"
              style={{ width: "100%", height: "auto" }}
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
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: post.title,
                            text: post.excerpt,
                            url: window.location.href,
                          })
                          .catch(console.error);
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link đã được sao chép vào clipboard!");
                      }
                    }}
                    className="share-button native"
                  >
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
                      <a href="#section-1">Di chuyển</a>
                    </li>
                    <li>
                      <a href="#section-2">Các cơ sở lưu trú</a>
                    </li>
                    <li>
                      <a href="#section-3">Hoạt động trải nghiệm</a>
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
