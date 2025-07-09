import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-text">
              <h1 className="about-hero-title">
                <span className="title-line">Về</span>
                <span className="title-line gradient-text">LocalBy</span>
              </h1>
              <p className="about-hero-description">
                Bảnk là một người kể chuyện, kết nối du khách với trái tim và
                tâm hồn của Việt Nam qua những câu chuyện chân thực từ người dân
                địa phương.
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">🌟</span>
                  <span>Trải nghiệm chân thực</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏠</span>
                  <span>Góc nhìn địa phương</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">❤️</span>
                  <span>Kết nối cộng đồng</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vẻ đẹp Việt Nam"
                loading="eager"
              />
              <div className="image-overlay">
                <span className="overlay-text">
                  Vẻ đẹp Việt Nam qua ống kính địa phương
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">
                <span className="text-gradient">📖 Câu chuyện của bảnk</span>
              </h2>
              <div className="story-content-casual">
                <p
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  Lý do đơn giản là bảnk tình cờ lướt Threads thấy bài tổng hợp
                  của bác Phúc Đỗ hay quá, bảnk làm lưu tổng hợp kết hợp vài
                  blog để hôm sau em gái bảnk biết chỗ xem. Thế thôi hẹ hẹ hẹ 😆
                </p>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Hành trình LocalBy"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Hãy cùng bảnk kể câu chuyện của mom</h2>
            <p className="cta-description">
              mom có câu chuyện du lịch thú vị muốn chia sẻ? Hoặc muốn trở thành
              một phần của cộng đồng LocalBy? Bảnk luôn chào đón những người
              cùng chung tâm huyết.
            </p>
            <div className="cta-actions">
              <Link to="/contribute" className="cta-button primary">
                <span>✍️</span>
                Chia sẻ câu chuyện
              </Link>
              <Link to="/contact" className="cta-button secondary">
                <span>💬</span>
                Chat với bảnk
              </Link>
              <Link to="/blog" className="cta-button secondary">
                <span>📖</span>
                Đọc các câu chuyện
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
