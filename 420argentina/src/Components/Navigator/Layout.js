import "./Layout.css";

import { Outlet, useNavigate } from "react-router-dom";

//import Banner from "../../Images/BannerTest.jpg";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="navB">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/Calendario");
          }}
        >
          Calendario
        </button>
        <button
          onClick={() => {
            navigate("/Documentos");
          }}
        >
          Documentos
        </button>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
