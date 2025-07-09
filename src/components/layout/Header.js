import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_CONFIG, BLOG_CATEGORIES } from "../../utils/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Trang chủ", path: "/", icon: "🏠" },
    { name: "Đi Đâu Này?", path: "/destinations", icon: "🗺️" },
    { name: "Đi Đâu Mới Zui?", path: "/blog", icon: "📝" },
    { name: "Tui tui", path: "/about", icon: "💫" },
    { name: "Chat với bảnk nè", path: "/contact", icon: "📞" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  return (
    <header className={`header-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-wrapper">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/" className="logo-link">
            <div className="logo-text">
              <span className="logo-main">Local</span>
              <span className="logo-accent">By</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActiveLink(item.path) ? "active" : ""}`}
                >
                  <span>
                    {item.icon} {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Search Button */}
          <button
            className="search-toggle"
            onClick={toggleSearch}
            aria-label="Tìm kiếm"
          >
            <svg
              className="search-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div
          className="search-bar"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            padding: "var(--space-lg) var(--space-xl)",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            animation: "fadeInUp 0.3s var(--ease-smooth)",
          }}
        >
          <form
            onSubmit={handleSearch}
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              gap: "var(--space-md)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                position: "relative",
              }}
            >
              <input
                type="text"
                placeholder="Tìm kiếm bài viết, điểm đến, ẩm thực..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "var(--space-lg) var(--space-xl)",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "var(--radius-xl)",
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-primary)",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "var(--color-neutral-800)",
                  transition: "all var(--duration-normal) var(--ease-smooth)",
                }}
                autoFocus
              />
              <div
                style={{
                  position: "absolute",
                  right: "var(--space-lg)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-neutral-400)",
                  fontSize: "0.9rem",
                  pointerEvents: "none",
                }}
              >
                ⌘K
              </div>
            </div>
            <button
              type="submit"
              style={{
                padding: "var(--space-lg) var(--space-xl)",
                background: "var(--gradient-primary)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-xl)",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "1rem",
                transition: "all var(--duration-normal) var(--ease-bounce)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-sm)",
              }}
            >
              <span>🔍</span>
              Tìm kiếm
            </button>
          </form>

          {/* Quick Search Categories */}
          <div
            style={{
              maxWidth: "1400px",
              margin: "var(--space-lg) auto 0",
              display: "flex",
              gap: "var(--space-sm)",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "var(--color-neutral-600)",
                fontSize: "0.9rem",
                fontWeight: "500",
              }}
            >
              Tìm kiếm nhanh:
            </span>
            {["Hà Nội", "Sài Gòn", "Đà Nẵng", "Ẩm thực", "Du lịch bụi"].map(
              (tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(tag)}
                  style={{
                    padding: "var(--space-sm) var(--space-md)",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-full)",
                    color: "var(--color-neutral-600)",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all var(--duration-normal) var(--ease-smooth)",
                  }}
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "var(--space-xl)",
            animation: "fadeInUp 0.3s var(--ease-smooth)",
          }}
        >
          <nav className="mobile-nav">
            <ul
              style={{
                listStyle: "none",
                marginBottom: "var(--space-xl)",
              }}
            >
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${isActiveLink(item.path) ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-md)",
                      padding: "var(--space-lg) var(--space-md)",
                      textDecoration: "none",
                      color: "var(--color-neutral-700)",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      borderRadius: "var(--radius-lg)",
                      transition:
                        "all var(--duration-normal) var(--ease-smooth)",
                      marginBottom: "var(--space-sm)",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Categories */}
          <div className="mobile-categories">
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                marginBottom: "var(--space-lg)",
                color: "var(--color-neutral-700)",
              }}
            >
              🗂️ Danh mục nổi bật
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "var(--space-md)",
              }}
            >
              {BLOG_CATEGORIES.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                    padding: "var(--space-md)",
                    textDecoration: "none",
                    color: "var(--color-neutral-600)",
                    fontSize: "0.9rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    transition: "all var(--duration-normal) var(--ease-smooth)",
                    fontWeight: "500",
                  }}
                >
                  <span>
                    {category.slug === "am-thuc" && "🍜"}
                    {category.slug === "thien-nhien" && "🏞️"}
                    {category.slug === "van-hoa" && "🏛️"}
                    {category.slug === "festival" && "🎉"}
                    {category.slug === "pho-tay" && "🌃"}
                    {category.slug === "kinh-nghiem" && "💡"}
                  </span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Social Links */}
          <div
            style={{
              marginTop: "var(--space-xl)",
              paddingTop: "var(--space-xl)",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--color-neutral-600)",
                marginBottom: "var(--space-lg)",
                fontSize: "0.9rem",
              }}
            >
              Theo dõi chúng tôi
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "var(--space-lg)",
              }}
            >
              {[
                {
                  icon: "📘",
                  name: "Facebook",
                  url: APP_CONFIG.SOCIAL_LINKS.facebook,
                },
                {
                  icon: "📷",
                  name: "Instagram",
                  url: APP_CONFIG.SOCIAL_LINKS.instagram,
                },
                {
                  icon: "📺",
                  name: "YouTube",
                  url: APP_CONFIG.SOCIAL_LINKS.youtube,
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "var(--radius-lg)",
                    fontSize: "1.5rem",
                    transition: "all var(--duration-normal) var(--ease-bounce)",
                    textDecoration: "none",
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
