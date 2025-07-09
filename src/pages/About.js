import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Ngọc Lai",
      role: "Founder & CEO",
      description: "Người yêu du lịch với hơn 10 năm khám phá Việt Nam",
      image: "1472099645262-1c1e7e2b0a65",
      specialties: ["Du lịch bụi", "Nhiếp ảnh", "Văn hóa địa phương"],
    },
    {
      name: "Minh Tuấn",
      role: "Content Director",
      description: "Chuyên gia content với niềm đam mê kể chuyện",
      image: "1507003211169-0a1dd7ef92e9",
      specialties: ["Storytelling", "SEO", "Social Media"],
    },
    {
      name: "Thu Hà",
      role: "Community Manager",
      description: "Kết nối cộng đồng và xây dựng mối quan hệ",
      image: "1494790108755-74ab72116be5",
      specialties: ["Community", "Partnership", "Events"],
    },
  ];

  const achievements = [
    { number: "10K+", label: "Độc giả hàng tháng", icon: "👥" },
    { number: "500+", label: "Bài viết chất lượng", icon: "📝" },
    { number: "50+", label: "Điểm đến khám phá", icon: "🗺️" },
    { number: "100+", label: "Tác giả địa phương", icon: "✍️" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Chân thực",
      description:
        "Mọi chia sẻ đều dựa trên trải nghiệm thực tế và góc nhìn trung thực của người dân địa phương",
    },
    {
      icon: "🤝",
      title: "Cộng đồng",
      description:
        "Kết nối du khách với người dân đ��a phương, tạo ra những trải nghiệm ý nghĩa và bền vững",
    },
    {
      icon: "💡",
      title: "Hữu ích",
      description:
        "Cung cấp thông tin thiết thực, mẹo hay và lời khuyên chân thành cho mọi chuyến đi",
    },
    {
      icon: "🌱",
      title: "Bền vững",
      description:
        "Khuyến khích du lịch có trách nhiệm, bảo vệ môi trường và văn hóa địa phương",
    },
  ];

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
                Chúng tôi là những người kể chuyện, kết nối du khách với trái
                tim và tâm hồn của Việt Nam qua những câu chuyện chân thực từ
                người dân địa phương.
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

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">
                <span className="text-gradient">🎯 Sứ mệnh của chúng tôi</span>
              </h2>
              <p className="mission-description">
                LocalBy ra đời từ niềm tin rằng những câu chuyện đẹp nhất, những
                góc ẩn mê hoặc nhất ch�� có thể được khám phá khi bạn nhìn qua
                đôi mắt của người địa phương. Chúng tôi không chỉ là một blog du
                lịch, mà là cầu nối kết nối du khách với linh hồn của mảnh đất
                Việt Nam.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-icon">✨</span>
                  <span>Chia sẻ những trải nghiệm độc đáo và chân thực</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🌏</span>
                  <span>Bảo tồn và lan tỏa văn hóa địa phương</span>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🤝</span>
                  <span>Tạo cầu nối giữa du khách và cộng đồng</span>
                </div>
              </div>
            </div>
            <div className="mission-stats">
              <div className="stats-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="stat-card fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="stat-icon">{achievement.icon}</div>
                    <div className="stat-number">{achievement.number}</div>
                    <div className="stat-label">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="section-title">
            <span className="text-gradient">💎 Giá trị cốt lõi</span>
          </h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon-wrapper">
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-icon-bg"></div>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2 className="section-title">
            <span className="text-gradient">👥 Đội ngũ của chúng tôi</span>
          </h2>
          <p className="team-description">
            Những con người đam mê du lịch và yêu thích việc chia sẻ những câu
            chuyện tuyệt vời về Việt Nam
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-image-wrapper">
                  <img
                    src={`https://images.unsplash.com/photo-${member.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={member.name}
                    className="team-image"
                    loading="lazy"
                  />
                  <div className="team-image-overlay"></div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <p className="team-description">{member.description}</p>
                  <div className="team-specialties">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">
                <span className="text-gradient">
                  📖 Câu chuyện của chúng tôi
                </span>
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
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "var(--color-neutral-600)",
                  }}
                >
                  Rồi càng ngày càng nhiều người hỏi, bảnk chia sẻ thêm... và
                  thế là LocalBy ra đời! Từ một ý tưởng nhỏ đơn giản đến một
                  cộng đồng yêu du lịch thật sự. Ai ngờ được nhỉ? 🤪
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
            <h2 className="cta-title">
              Hãy cùng chúng tôi kể câu chuyện của bạn
            </h2>
            <p className="cta-description">
              Bạn có câu chuyện du lịch thú vị muốn chia sẻ? Hoặc muốn trở thành
              một phần của cộng đồng LocalBy? Chúng tôi luôn chào đón những
              người cùng chung tâm huyết.
            </p>
            <div className="cta-actions">
              <Link to="/contribute" className="cta-button primary">
                <span>✍️</span>
                Chia sẻ câu chuyện
              </Link>
              <Link to="/contact" className="cta-button secondary">
                <span>💬</span>
                Liên hệ với chúng tôi
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
