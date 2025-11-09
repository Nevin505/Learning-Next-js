import React from "react";

const NewsDetailLayout = ({ children, modal }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default NewsDetailLayout;
