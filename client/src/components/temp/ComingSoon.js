import React from "react";

export default (props) => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__title">Novidades em breve...</div>
      <div className="coming-soon__image"></div>
      <div className="coming-soon__loader"></div>
      <div className="coming-soon__social">
        <a
          className="coming-soon__social__facebook"
          href="https://pt-br.facebook.com/"
          target="_blank"
        ></a>
        <a
          className="coming-soon__social__instagram"
          href="https://www.instagram.com/meeplepedia"
          target="_blank"
        ></a>
        <a
          className="coming-soon__social__linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
        ></a>
        <a
          className="coming-soon__social__twitter"
          href="https://www.twitter.com/meeplepedia"
          target="_blank"
        ></a>
      </div>
      <div className="coming-soon__contact">
        <p>E-mail para contato:</p>
        <p>contato@meeplepedia.com.br</p>
      </div>
    </div>
  );
};
