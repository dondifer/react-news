import { useContext, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";

const List = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const newsList = news.map((el, index) => {
    return (
      <div key={index}>
        <h3>{el.title}</h3>
        <span>{el.abstract}</span>
        <p>Date: {el.created_date}</p>
        <p>Author: {el.byline}</p>
      </div>
    );
  });
  return (
    <div>
      <div className="profile">
        <h1 className="menu__title">List</h1>
        <div className="max-heigth-list ">{newsList}</div>
      </div>
    </div>
  );
};

export default List;
