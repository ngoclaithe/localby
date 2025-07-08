import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { slug } = useParams();

  return (
    <div className="blog-detail-page">
      <div className="container">
        <h1 className="page-title">Chi tiết bài viết: {slug}</h1>
        <p>Trang chi tiết bài viết đang được phát triển...</p>
      </div>
    </div>
  );
};

export default BlogDetail;
