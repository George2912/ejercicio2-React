import React from "react";

/* Importar los componentes */
import Logo from "./logo";
import Icon from "./icon";
import Login from "./login";
import Searchbar from "./search-bar";

/* Importar los iconos */
import Log from "../icons/iconfinder_youtube_294703.png";
import icon1 from "../icons/iconfinder_ic_home_48px_3669170.png";
import icon2 from "../icons/iconfinder_icon-ios7-bell_211694.png";
import icon3 from "../icons/iconfinder_ic_view_module_48px_3669149.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={Log} />
      <Searchbar  />
      <Icon iconUrl={icon1} />
      <Icon iconUrl={icon2} />
      <Icon iconUrl={icon3} />
      <Login />
    </div>
  );
}
