import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import Button from "react-bootstrap/Button";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";

const Header = ({ darkMode, checkDark }) => {
  const darkModeStyle = {
    fontSize: "40px",
    transition: "0.4s",
  };
  const [open, setOpen] = useState(false);
  const menuMode = () => {
    setOpen(!open);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    if (!search) {
      var url = `https://restcountries.com/v3.1/all`;
    } else {
      const value = search.toLowerCase();
      var url = `https://restcountries.com/v3.1/name/${value}`;
    }
    try {
      setLoading(true);
      const response = await axios.get(url);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <form className="site-header__form" onSubmit={handleSubmit}>
              <input
                type="search"
                className="site-header__form-searchInput"
                name="search"
                autoComplete="off"
                maxLength={23}
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="site-header__form-btn"
                variant="outline-dark">
                Qidiruv
              </Button>
            </form>
            <div className="d-m-list">
              <div className="site-header__darkMode-btn" onClick={darkMode}>
                {checkDark ? (
                  <MdOutlineDarkMode style={darkModeStyle} />
                ) : (
                  <MdDarkMode style={darkModeStyle} />
                )}
              </div>
              <div
                className={
                  open ? "site-header__close-menu" : "site-header__menu-btn"
                }
                onClick={menuMode}>
                {open ? (
                  <TfiClose
                    style={{
                      fontSize: "30px",
                      transition: "0.3s",
                    }}
                  />
                ) : (
                  <SlMenu
                    style={{
                      fontSize: "30px",
                      transition: "0.3s",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <ul className={`site-header__menu-list ${open ? "open" : ""}`}>
            <li className="site-header__menu-item">
              <Link
                style={{
                  transition: "0.3s",
                }}
                to={"https://t.me/Sh_Zuxriddin"}
                className={"site-header__menu-item-link"}>
                Profile
              </Link>
            </li>
            <li className="site-header__menu-item">
              <Link className={"site-header__menu-item-link"}>Home</Link>
            </li>
            <li className="site-header__menu-item">
              <Link className={"site-header__menu-item-link"}>About</Link>
            </li>
            <li className="site-header__menu-item">
              <Link className={"site-header__menu-item-link"}>Blog</Link>
            </li>
            <li className="site-header__menu-item">
              <Link className={"site-header__menu-item-link"}>Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <Card data={data} loading={loading} />
    </>
  );
};

export default Header;
