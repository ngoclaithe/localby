import React, { useState } from "react";
import { APP_CONFIG } from "../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactReasons = [
    { value: "general", label: "Câu hỏi chung", icon: "💬" },
    { value: "collaboration", label: "Hợp tác & Partnership", icon: "🤝" },
    { value: "contribution", label: "Đóng góp nội dung", icon: "✍️" },
    { value: "technical", label: "Vấn đề kỹ thuật", icon: "🔧" },
    { value: "feedback", label: "Góp ý & Phản hồi", icon: "💡" },
  ];

  const contactMethods = [
    {
      type: "Email",
      value: APP_CONFIG.CONTACT_EMAIL,
      icon: "📧",
      description: "Gửi email cho bảnk nè, phản hồi trong vòng 24 giờ luôn á!",
      action: `mailto:${APP_CONFIG.CONTACT_EMAIL}`,
      actionText: "Gửi email",
    },
    {
      type: "Social Media",
      value: "Theo dõi bảnk",
      icon: "🌐",
      description: "Kết nối và theo dõi update mới nhất từ LocalBy nha",
      action: null,
      actionText: "Theo dõi",
    },
    {
      type: "Community",
      value: "Tham gia cộng đồng",
      icon: "👥",
      description: "Gia nhập cộng đồng LocalBy để chia sẻ và kết nối với bảnk",
      action: "/community",
      actionText: "Tham gia",
    },
  ];

  const faqItems = [
    {
      question: "Làm thế nào để chia sẻ câu chuyện du lịch của tôi?",
      answer:
        "Bạn có thể gửi câu chuyện qua form liên hệ hoặc email trực tiếp. Bảnk sẽ hỗ trợ bạn trong quá trình biên tập và xuất bản nha!",
    },
    {
      question: "Tôi có thể hợp tác với LocalBy như thế nào?",
      answer:
        "LocalBy luôn chào đón các hình thức hợp tác từ tác giả cá nhân, doanh nghiệp du lịch đến các tổ chức văn hóa. Hãy liên hệ với bảnk để thảo luận chi tiết nha!",
    },
    {
      question: "Có phí để đăng bài trên LocalBy không?",
      answer:
        "Không đâu! Việc chia sẻ câu chuyện trên LocalBy hoàn toàn miễn phí luôn. Bảnk tin rằng những câu chuyện hay cần được chia sẻ rộng rãi mà.",
    },
    {
      question: "Tôi có thể sử dụng nội dung từ LocalBy không?",
      answer:
        "Vui lòng liên hệ với bảnk trước khi sử dụng nội dung nha. Bảnk sẽ hướng dẫn bạn về quyền sử dụng và ghi credit phù hợp.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: "general",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background"></div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              <span className="title-line">Chat với</span>
              <span className="title-line gradient-text">bảnk nè!</span>
            </h1>
            <p className="contact-hero-description">
              Bảnk luôn sẵn sàng lắng nghe và hỗ trợ bạn đấy! Hãy chia sẻ câu
              hỏi, ý tưởng hoặc câu chuyện du lịch của bạn với bảnk nha. LocalBy
              mà, chill chill thôi! 😎
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-icon">⚡</span>
                <span
                  className="stat-text"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Phản hồi trong 24h
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <span
                  className="stat-text"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Hỗ trợ tận tình
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🌟</span>
                <span
                  className="stat-text"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Dịch vụ miễn phí
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <h2 className="section-title">
            <span className="text-gradient">📞 Cách liên hệ với bảnk</span>
          </h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="method-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="method-icon">{method.icon}</div>
                <h3 className="method-type">{method.type}</h3>
                <p className="method-value">{method.value}</p>
                <p className="method-description">{method.description}</p>
                {method.type === "Social Media" ? (
                  <div className="social-actions">
                    {Object.entries(APP_CONFIG.SOCIAL_LINKS).map(
                      ([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-button"
                        >
                          {platform === "facebook" && "📘"}
                          {platform === "instagram" && "📷"}
                          {platform === "youtube" && "📺"}
                          <span>
                            {platform.charAt(0).toUpperCase() +
                              platform.slice(1)}
                          </span>
                        </a>
                      ),
                    )}
                  </div>
                ) : (
                  <a
                    href={method.action || "#"}
                    className="method-action"
                    {...(method.action?.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {method.actionText}
                    <span className="action-arrow">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="form-title">
                <span className="text-gradient">✉️ Gửi tin nhắn cho bảnk</span>
              </h2>
              <p className="form-description">
                Điền thông tin bên dưới và bảnk sẽ phản hồi bạn sớm nhất có thể
                nha! 💪
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Contact Reason */}
              <div className="form-group full-width">
                <label className="form-label">Lý do liên hệ</label>
                <div className="reason-options">
                  {contactReasons.map((reason) => (
                    <label key={reason.value} className="reason-option">
                      <input
                        type="radio"
                        name="reason"
                        value={reason.value}
                        checked={formData.reason === reason.value}
                        onChange={handleChange}
                        className="reason-input"
                      />
                      <div className="reason-label">
                        <span className="reason-icon">{reason.icon}</span>
                        <span className="reason-text">{reason.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Name and Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Họ tên <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group full-width">
                <label htmlFor="subject" className="form-label">
                  Chủ đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Tóm tắt nội dung bạn muốn trao đổi"
                />
              </div>

              {/* Message */}
              <div className="form-group full-width">
                <label htmlFor="message" className="form-label">
                  Tin nhắn <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Chia sẻ chi tiết về điều bạn muốn trao đổi với bảnk..."
                ></textarea>
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="submit-status success">
                  <span className="status-icon">✅</span>
                  <span>
                    Cảm ơn bạn đã liên hệ! Bảnk sẽ phản hồi sớm nhất có thể nha!
                    🥰
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="submit-status error">
                  <span className="status-icon">❌</span>
                  <span>
                    Có lỗi xảy ra rồi! Vui lòng thử lại hoặc liên hệ trực tiếp
                    qua email nha.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner"></span>
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Gửi tin nhắn cho bảnk
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="section-title">
            <span className="text-gradient">❓ Câu hỏi thường gặp</span>
          </h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="faq-item fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Bạn có câu chuyện du lịch hay muốn chia sẻ với bảnk không?
            </h2>
            <p className="cta-description">
              Đừng chần chừ! Hãy chia sẻ những trải nghiệm độc đáo của bạn với
              bảnk và cộng đồng LocalBy. Câu chuyện của bạn có thể truyền cảm
              hứng cho hàng ngàn người khác đấy! 🌟
            </p>
            <div className="cta-actions">
              <a href="#contact-form" className="cta-button primary">
                <span>✍️</span>
                Chia sẻ ngay với bảnk
              </a>
              <a href="/blog" className="cta-button secondary">
                <span>📖</span>
                Xem các câu chuyện khác
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
