import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <h1 className="page-title">Về LocalBy</h1>

          <div className="about-intro">
            <h2>Khám phá Việt Nam qua góc nhìn địa phương</h2>
            <p className="intro-text">
              LocalBy là nền tảng chia sẻ những trải nghiệm du lịch chân thực,
              được kể bởi chính những người dân địa phương. Chúng tôi tin rằng
              những câu chuyện đẹp nhất, những góc ẩn mê hoặc nhất chỉ có thể
              được khám phá khi bạn nhìn qua đôi mắt của người địa phương.
            </p>
          </div>

          <div className="mission-section">
            <h3>Sứ mệnh của chúng tôi</h3>
            <p>
              Mang đến cho du khách những trải nghiệm du lịch độc đáo, chân thực
              và có ý nghĩa thông qua những câu chuyện, lời khuyên từ người dân
              địa phương.
            </p>
          </div>

          <div className="values-section">
            <h3>Giá trị cốt lõi</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>🎯 Chân thực</h4>
                <p>Mọi chia sẻ đều dựa trên trải nghiệm thực tế</p>
              </div>
              <div className="value-item">
                <h4>🤝 Cộng đồng</h4>
                <p>Kết nối du khách với người dân địa phương</p>
              </div>
              <div className="value-item">
                <h4>💡 Hữu ích</h4>
                <p>Thông tin thiết thực cho chuyến đi của bạn</p>
              </div>
              <div className="value-item">
                <h4>🌱 Bền vững</h4>
                <p>Khuyến khích du lịch có trách nhiệm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
