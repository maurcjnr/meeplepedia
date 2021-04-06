import React from "react";

export default (props) => {
  return (
    <div className="background">
      <div className="temp">
        <div className="temp__title">Novidades em breve...</div>
        <div className="temp__image"></div>
        <div className="temp__loader"></div>
        <div className="temp__social">
          <a
            className="temp__social__facebook"
            href="https://pt-br.facebook.com/"
            target="_blank"
          ></a>
          <a
            className="temp__social__instagram"
            href="https://www.instagram.com/meeplepedia"
            target="_blank"
          ></a>
          <a
            className="temp__social__linkedin"
            href="https://www.linkedin.com/"
            target="_blank"
          ></a>
          <a
            className="temp__social__twitter"
            href="https://www.twitter.com/meeplepedia"
            target="_blank"
          ></a>
        </div>
        <div className="temp__contact">
          <p>E-mail para contato:</p>
          <p>contato@meeplepedia.com.br</p>
        </div>
      </div>
    </div>
  );
};
