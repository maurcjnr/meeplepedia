import React from "react";

export default (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left"></div>
        <div className="footer__center"></div>
        <div className="footer__right">
          <a className="footer__right__back" onClick={scrollToTop}></a>
        </div>
      </div>
    </div>
  );
};
