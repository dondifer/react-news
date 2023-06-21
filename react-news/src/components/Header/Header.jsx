/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Header = (props) => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { news, getNews, changeTheme } = useContext(GlobalContext);

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <nav>
        <ul className="bullet-less">
          {props.links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={changeTheme}>Change Theme</button>
      </nav>
    </div>
  );
};

export default Header;
