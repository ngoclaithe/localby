import React, { useState } from "react";
import { APP_CONFIG } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-content">
          <h1 className="page-title">Liên hệ với chúng tôi</h1>

          <div className="contact-grid">
            <div className="contact-info">
              <h2>Thông tin liên hệ</h2>
              <p>
                Bạn có câu hỏi, góp ý hoặc muốn chia sẻ câu chuyện du lịch?
                Chúng tôi rất mong nhận được phản hồi từ bạn!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <h4>📧 Email</h4>
                  <a href={`mailto:${APP_CONFIG.CONTACT_EMAIL}`}>
                    {APP_CONFIG.CONTACT_EMAIL}
                  </a>
                </div>

                <div className="contact-method">
                  <h4>🌐 Mạng xã hội</h4>
                  <div className="social-links">
                    <a
                      href={APP_CONFIG.SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                    <a
                      href={APP_CONFIG.SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                    <a
                      href={APP_CONFIG.SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Gửi tin nhắn</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tin nhắn *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Gửi tin nhắn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
