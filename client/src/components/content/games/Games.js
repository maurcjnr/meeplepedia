import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactPaginate from "react-paginate";
import Navbar from "../../header/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../../footer/Footer";
import Copyright from "../../footer/Copyright";

import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";

export default (props) => {
  const [boards, setBoards] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    Axios.get("https://bgg-json.azurewebsites.net/hot").then((response) => {
      if (response.status == 200 ) {
        setBoards(response.data);
      } else {
        console.log("IMPLEMENTAR ERROS API!");
      }
    });
  }, []);

  const boardsPerPage = 10;
  const pagesVisited = pageNumber * boardsPerPage;

  const displayBoards = boards
    .slice(pagesVisited, pagesVisited + boardsPerPage)
    .map((board) => {
      const link = "https:boardgamegeek.com/boardgame/" + board.gameId;
      return (
        <div className="hotness__itens__item" key={board.gameId}>
          <div className="hotness__itens__item__content">
            <p>{board.name}</p>
            <p>{board.yearPublished}</p>
          </div>
          <div className="hotness__itens__item__image">
            <a href={link} target="_blank">
              <img src={board.thumbnail} alt={board.name} />
            </a>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(boards.length / boardsPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="games">
      <Navbar />
      <div className="content">
        <div className="games__left">
          <Sidebar />
        </div>
        <div className="games__center"></div>
        <div className="games__right">
          {displayBoards.length == 0 ? (
            ""
          ) : (
            <div className="hotness">
              <h2 className="hotness__title">The Hotness by BoardGameGeek</h2>
              <div className="hotness__itens">
                {displayBoards}
                <ReactPaginate
                  previousLabel={<KeyboardArrowLeftRoundedIcon />}
                  nextLabel={<KeyboardArrowRightRoundedIcon />}
                  pageCount={pageCount}
                  onPageChange={pageChange}
                  containerClassName={"hotness__itens__pagination-buttons"}
                  previousLinkClassName={
                    "hotness__itens__pagination-prev-button"
                  }
                  nextLinkClassName={"hotness__itens__pagination-next-button"}
                  disabledClassName={"hotness__itens__pagination-disable"}
                  activeClassName={"hotness__itens__pagination-active"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
