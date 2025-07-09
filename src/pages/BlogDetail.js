import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { mockData } from "../services/api";
import { formatDate, formatReadingTime } from "../utils/formatters";
import { BLOG_CATEGORIES } from "../utils/constants";
import { usePerformanceMonitor } from "../hooks/usePerformanceMonitor";
import "../BlogDetailGenZ.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  // Performance monitoring
  usePerformanceMonitor("BlogDetail");

  // Optimized scroll progress with throttling
  const updateReadingProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);
    setReadingProgress(progress);
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateReadingProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledUpdate, { passive: true });
    return () => window.removeEventListener("scroll", throttledUpdate);
  }, [updateReadingProgress]);

  // Memoized detailed content for the post
  const getDetailedContent = useMemo(
    () => (postData) => {
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

        <p>Sau khi tới trung tâm thị trấn Bắc Hà hoặc Bến xe Bắc Hà, di chuyển tới Khách sạn Ngân Nga (Ngan Nga Bac Ha Hotel trên Google maps) để nghỉ ngơi hoặc thuê xe máy, liên hệ anh Đông theo SĐT 0817801988. Ngoài ra quý khách cũng có thể đặt dịch vụ xe ôm (khoảng 200k/người) liên hệ chú An - đ���i trưởng đội xe ôm du lịch Bắc Hà SĐT 0827999339 hoặc taxi (khoảng 700-800k) để tới Bản Liền. Vào mùa cao điểm như tháng 8-9-10 quý khách nên gọi điện đặt xe trước tránh tình trạng quá tải.</p>

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
            <div class="homestay-gallery">
              <div class="gallery-main">
                <img src="/images/ban-lien/pine-homestay/1.jpg" alt="Phòng tập thể" class="main-gallery-image" />
              </div>
              <div class="gallery-grid">
                <img src="/images/ban-lien/pine-homestay/2.jpg" alt="Phòng tắm" />
                <img src="/images/ban-lien/pine-homestay/3.jpg" alt="Bungalow" />
                <img src="/images/ban-lien/pine-homestay/4.jpg" alt="Không gian chung" />
                <img src="/images/ban-lien/pine-homestay/5.jpg" alt="Khu vực ăn uống" />
                <img src="/images/ban-lien/pine-homestay/6.jpg" alt="Phòng vệ sinh" />
                <img src="/images/ban-lien/pine-homestay/7.jpg" alt="Bungalow interior" />
                <img src="/images/ban-lien/pine-homestay/8.jpg" alt="Khu vực nghỉ ngơi" />
                <img src="/images/ban-lien/pine-homestay/9.jpg" alt="View từ homestay" />
              </div>
            </div>

            <div class="homestay-info">
              <div class="capacity-info">
                <div class="info-item">
                  <span class="info-icon">👥</span>
                  <div class="info-content">
                    <h4>Sức chứa</h4>
                    <p>15-20 khách (phòng tập thể)<br/>2-5 khách (bungalow)</p>
                  </div>
                </div>
                <div class="info-item">
                  <span class="info-icon">🛁</span>
                  <div class="info-content">
                    <h4>Tiện nghi</h4>
                    <p>2 phòng tắm + bình nóng lạnh<br/>2 phòng vệ sinh</p>
                  </div>
                </div>
              </div>

              <div class="services-card">
                <h4 class="services-title">🌟 Dịch vụ</h4>
                <div class="services-list">
                  <span class="service-item">🏠 Lưu trú</span>
                  <span class="service-item">🍽️ Ăn uống</span>
                  <span class="service-item">🗺️ Hướng dẫn viên</span>
                </div>
              </div>

              <div class="pricing-card">
                <h4 class="pricing-title">💰 Bảng giá</h4>
                <div class="price-list">
                  <div class="price-item">
                    <span class="price-label">🛏️ Phòng tập thể</span>
                    <span class="price-value">150k/người/đêm</span>
                  </div>
                  <div class="price-item">
                    <span class="price-label">🍽️ Bữa chính</span>
                    <span class="price-value">150k/người</span>
                  </div>
                  <div class="price-item">
                    <span class="price-label">🌅 Bữa sáng</span>
                    <span class="price-value">50k/người</span>
                  </div>
                  <div class="price-item">
                    <span class="price-label">👨‍🏫 Hướng dẫn viên</span>
                    <span class="price-value">400-500k/ngày</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          <img src="/images/ban-lien/huong-hoan-homestay/9.jpg" alt="H��ớng Hoan Homestay - Sân" />
        </div>
        <p>Hướng Hoan Homestay hiện đang có sức chứa khoảng dưới 10 khách đối với phòng tập thể, gia đình hiện chưa có phòng bungalow. Homestay hiện có 1 phòng tắm có trang bị bình nóng lạnh và 1 phòng vệ sinh và sẽ xây dựng thêm trong thời gian tới.</p>

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
          <img src="/images/ban-lien/vang-a-binh-homestay/3.jpg" alt="Vang A Binh Homestay - Khu v��c chung" />
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

        <div class="content-section" id="section-3">
          <h2 class="section-heading"><span class="section-icon">🎯</span>3. Hoạt động trải nghiệm</h2>

          <div class="intro-card">
            <p class="intro-text">🌿 Tại Bản Liền, bạn sẽ được hòa mình vào cuộc sống của người Tày với những trải nghiệm đích thực không thể tìm thấy ở nơi nào khác!</p>
          </div>

          <div class="activities-grid">
            <div class="activity-item">
              <span class="activity-icon">🍃</span>
              <span class="activity-name">Hái chè & làm chè hữu cơ</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🌾</span>
              <span class="activity-name">Thăm ruộng bậc thang</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🌱</span>
              <span class="activity-name">Cấy lúa</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🐃</span>
              <span class="activity-name">Chăn trâu</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🐟</span>
              <span class="activity-name">Xúc cá suối</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🏞️</span>
              <span class="activity-name">Tắm thác</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🎋</span>
              <span class="activity-name">Lên rừng lấy tre</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🥢</span>
              <span class="activity-name">Làm đũa cẩm truyền thống</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">👨‍🍳</span>
              <span class="activity-name">Nấu ăn cùng gia đình</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">👒</span>
              <span class="activity-name">Đan nón lá</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🎭</span>
              <span class="activity-name">Văn nghệ truyền thống</span>
            </div>
            <div class="activity-item">
              <span class="activity-icon">🌾</span>
              <span class="activity-name">Làm cốm (theo mùa)</span>
            </div>
          </div>


          <div class="itinerary-section">
            <h3 class="itinerary-title">📋 Lịch trình 2 ngày 1 đêm</h3>

            <div class="day-schedule">
              <div class="day-header">
                <span class="day-number">1</span>
                <h4 class="day-title">Ngày đầu - Khám phá & Trải nghiệm</h4>
              </div>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="time-badge">7:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🌅</span>
                    <p>Đón bình minh tại Bản Liền + ăn sáng</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">8:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🌲</span>
                    <p>Lên rừng chè cổ thụ, uống nước suối nguồn, hái rau mầm đá</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">12:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🍽️</span>
                    <p>Dùng bữa trưa cùng gia đình + nghỉ trưa</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">14:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🏞️</span>
                    <p>Thăm quan thác nước, tắm thác, hái rau rừng</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">19:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🌙</span>
                    <p>Bữa tối + hoạt động văn hóa (làm đũa cẩm, trò chơi dân tộc)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="day-schedule">
              <div class="day-header">
                <span class="day-number">2</span>
                <h4 class="day-title">Ngày thứ hai - Thư giãn & Về nhà</h4>
              </div>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="time-badge">7:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">☕</span>
                    <p>Ăn sáng & lựa chọn hoạt động</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">8:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🎣</span>
                    <p>Chơi suối, xúc cá, hái chè, check-in ruộng bậc thang</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="time-badge">12:00</div>
                  <div class="activity-content">
                    <span class="activity-emoji">🚗</span>
                    <p>Bữa trưa cuối + chuẩn bị về Hà Nội</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
    },
    [],
  );

  useEffect(() => {
    setIsLoading(true);

    // Simulate API loading with reduced delay
    const timeoutId = setTimeout(() => {
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
    }, 300); // Reduced from 800ms to 300ms

    return () => clearTimeout(timeoutId);
  }, [slug, getDetailedContent]);

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
    <div className="blog-detail-page genz-style">
      {/* Reading Progress Bar */}
      <div className="reading-progress-bar">
        <div
          className="reading-progress-fill"
          style={{ width: `${readingProgress * 100}%` }}
        ></div>
      </div>

      {/* Breadcrumb */}
      <section className="breadcrumb modern-breadcrumb">
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
      <section className="article-header genz-header">
        <div className="container">
          <div className="article-header-content">
            <div className="article-meta-top">
              <span className="article-category genz-badge">
                {category?.name}
              </span>
              <span className="article-date genz-date">
                📅 {formatDate(post.published_at)}
              </span>
              <span className="trending-badge">🔥 Hot</span>
            </div>

            <h1 className="article-title genz-title">{post.title}</h1>
            <p className="article-excerpt genz-excerpt">{post.excerpt}</p>

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
