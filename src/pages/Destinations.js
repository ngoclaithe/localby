import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FEATURED_DESTINATIONS } from "../utils/constants";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const regions = {
    all: "Tất cả",
    "Bắc Bộ": "Bắc Bộ",
    "Trung Bộ": "Trung Bộ",
    "Nam Bộ": "Nam Bộ",
  };

  useEffect(() => {
    const destinationDetails = {
      "Hà Nội": {
        description: "Thủ đô nghìn năm văn hiến với phố cổ quyến rũ",
        highlights: ["Phố Cổ", "Hoàn Kiếm", "Văn Miếu", "Lăng Bác"],
        bestTime: "Tháng 10-12, 3-4",
        specialties: ["Phở", "Bún chả", "Chả cá"],
        imageId: "1583417319070-4a69db38a482",
      },
      "Hồ Chí Minh": {
        description: "Thành phố năng động nhất Việt Nam",
        highlights: ["Bến Thành", "Nhà thờ Đức Bà", "Dinh Độc Lập", "Phố Tây"],
        bestTime: "Tháng 12-4",
        specialties: ["Bánh mì", "Cơm tấm", "Hủ tiếu"],
        imageId: "1552465011-b4e21bf6e79a",
      },
      "Đà Nẵng": {
        description: "Thành phố biển hiện đại với những cây cầu nổi tiếng",
        highlights: ["Cầu Rồng", "Bà Nà Hills", "Mỹ Khê", "Ngũ Hành Sơn"],
        bestTime: "Tháng 2-8",
        specialties: ["Mì Quảng", "Bánh tráng cuốn thịt heo", "Cơm gà"],
        imageId: "1588392382425-d9181b0bd8c0",
      },
      "Hội An": {
        description: "Phố cổ lãng mạn bên sông Thu Bồn",
        highlights: ["Phố Cổ", "Chùa Cầu", "Làng rau Trà Quế", "Phố đèn lồng"],
        bestTime: "Tháng 2-8",
        specialties: ["Cao lầu", "White Rose", "Bánh mì Phượng"],
        imageId: "1551632436-cbf8dd35adfa",
      },
      Sapa: {
        description: "Thị trấn sương mù với ruộng bậc thang tuyệt đẹp",
        highlights: ["Ruộng bậc thang", "Fansipan", "Bản Cát Cát", "Chợ tình"],
        bestTime: "Tháng 3-5, 9-11",
        specialties: ["Thịt lợn cắp nách", "Cá tầm", "Rượu táo mèo"],
        imageId: "1528127269322-539801943592",
      },
      "Phú Quốc": {
        description: "Đảo ngọc với bãi biển trong xanh và hải sản tươi ngon",
        highlights: ["Bãi Sao", "Cáp treo Hòn Thơm", "Chợ đêm", "Safari"],
        bestTime: "Tháng 11-3",
        specialties: ["Hải sản nướng", "Nước mắm", "Sim rượu"],
        imageId: "1578662996442-48f60103fc96",
      },
      "Nha Trang": {
        description: "Thành phố biển với những hoạt động thể thao nước hấp dẫn",
        highlights: ["Bãi biển Nha Trang", "Vinpearl", "Tháp Bà", "Hòn Mun"],
        bestTime: "Tháng 1-8",
        specialties: ["Nem nướng", "Bánh căn", "Yến sào"],
        imageId: "1571218447-b7ba11f10515",
      },
      "Đà Lạt": {
        description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm",
        highlights: [
          "Hồ Xuân Hương",
          "Valley of Love",
          "Crazy House",
          "Langbiang",
        ],
        bestTime: "Tháng 12-3",
        specialties: ["Bánh tráng nướng", "Nem nướng", "Sữa đậu nành"],
        imageId: "1559827260-dc66d52bef19",
      },
    };

    // Simulate API loading
    setTimeout(() => {
      const enhancedDestinations = FEATURED_DESTINATIONS.map((name, index) => ({
        id: index + 1,
        name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        region:
          index < 2
            ? "Bắc Bộ"
            : index < 4
              ? "Trung Bộ"
              : index < 6
                ? "Nam Bộ"
                : "Trung Bộ",
        ...destinationDetails[name],
      }));

      setDestinations(enhancedDestinations);
      setFilteredDestinations(enhancedDestinations);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let filtered = destinations;

    // Filter by region
    if (selectedRegion !== "all") {
      filtered = filtered.filter((dest) => dest.region === selectedRegion);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (dest) =>
          dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          dest.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setFilteredDestinations(filtered);
  }, [destinations, selectedRegion, searchTerm]);

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
          Đang tải điểm đến...
        </p>
      </div>
    );
  }

  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="destinations-hero-overlay"></div>
        <div className="container">
          <div className="destinations-hero-content">
            <h1 className="destinations-hero-title">
              <span className="title-line">Khám phá</span>
              <span className="title-line gradient-text">Việt Nam</span>
              <span className="title-line">cùng chúng tôi</span>
            </h1>
            <p className="destinations-hero-description">
              Từ núi rừng Tây Bắc đến biển cả Nam Trung Bộ, mỗi điểm đến là một
              câu chuyện độc đáo chờ bạn khám phá qua góc nhìn của người dân địa
              phương.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span
                  className="stat-label"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Điểm đến
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span
                  className="stat-label"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Địa điểm
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span
                  className="stat-label"
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Trải nghiệm
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="destinations-filter">
        <div className="container">
          <div className="filter-container">
            <div className="search-section">
              <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Tìm kiếm điểm đến..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="region-filters">
              {Object.entries(regions).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedRegion(key)}
                  className={`filter-button ${selectedRegion === key ? "active" : ""}`}
                >
                  {label}
                  {selectedRegion === key && (
                    <span className="filter-active-indicator"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="destinations-content">
        <div className="container">
          {filteredDestinations.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>Không tìm thấy điểm đến nào</h3>
              <p>Hãy thử tìm kiếm với từ khóa khác hoặc chọn vùng miền khác</p>
            </div>
          ) : (
            <div className="destinations-grid">
              {filteredDestinations.map((destination, index) => (
                <article
                  key={destination.id}
                  className="destination-card-enhanced fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="destination-image-container">
                    <img
                      src={`https://images.unsplash.com/photo-${destination.imageId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={destination.name}
                      loading="lazy"
                      className="destination-image"
                    />
                    <div className="destination-overlay">
                      <div className="destination-region-tag">
                        {destination.region}
                      </div>
                      <div className="destination-quick-actions">
                        <button className="quick-action-btn" title="Yêu thích">
                          ❤️
                        </button>
                        <button className="quick-action-btn" title="Chia sẻ">
                          📤
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="destination-content">
                    <div className="destination-header">
                      <h3 className="destination-name">{destination.name}</h3>
                      <div className="destination-rating">
                        <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                        <span className="rating-text">(4.8)</span>
                      </div>
                    </div>

                    <p className="destination-description">
                      {destination.description}
                    </p>

                    <div className="destination-highlights">
                      <h4 className="highlights-title">🎯 Điểm nổi bật:</h4>
                      <div className="highlights-tags">
                        {destination.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <span key={idx} className="highlight-tag">
                              {highlight}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div className="destination-info">
                      <div className="info-item">
                        <span className="info-icon">🌤️</span>
                        <span className="info-text">
                          {destination.bestTime}
                        </span>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">🍽️</span>
                        <span className="info-text">
                          {destination.specialties[0]}
                        </span>
                      </div>
                    </div>

                    <div className="destination-actions">
                      <Link
                        to={`/destination/${destination.slug}`}
                        className="explore-btn primary"
                      >
                        <span>Khám phá ngay</span>
                        <span className="btn-arrow">→</span>
                      </Link>
                      <Link
                        to={`/blog?destination=${destination.slug}`}
                        className="explore-btn secondary"
                      >
                        <span>📖</span>
                        <span>Xem blog</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="destinations-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Bạn có câu chuyện du lịch hay muốn chia sẻ?
            </h2>
            <p className="cta-description">
              Hãy trở thành một phần của cộng đồng LocalBy và chia sẻ những trải
              nghiệm độc đáo của bạn
            </p>
            <div className="cta-actions">
              <Link to="/contribute" className="cta-button primary">
                <span>✍</span>
                Chia sẻ câu chuyện
              </Link>
              <Link to="/contact" className="cta-button secondary">
                <span>💬</span>
                Liên hệ với chúng tôi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;
