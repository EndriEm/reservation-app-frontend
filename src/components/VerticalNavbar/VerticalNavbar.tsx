import React, { useState } from "react";

const CustomNav = () => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img src="../src/assets/img/menu.svg" alt="burger" />
      </div>
      <ul className="navbar__list">
        <div className="navbar__li-box">
          <img
            src={"../src/assets/img/dashboard.svg"}
            alt={"img/dashboard.svg"}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            <p>Dashboard</p>
          </li>
        </div>
        <div className="navbar__li-box">
          <img
            src={"../src/assets/img/restaurant.svg"}
            alt={"img/restaurant.svg"}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            <p>Shop</p>
          </li>
        </div>

        <div className="navbar__li-box">
          <img
            src={"../src/assets/img/manage user.svg"}
            alt={"img/dashboard.svg"}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            <p>Manage User’s</p>
          </li>
        </div>

        <div className="navbar__li-box">
          <img
            src={"../src/assets/img/manage  order.svg"}
            alt={"img/dashboard.svg"}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            <p>Manage Appointments</p>
          </li>
        </div>

        <div className="navbar__li-box">
          <img
            src={"../src/assets/img/manage coupon.svg"}
            alt={"img/dashboard.svg"}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            <p>Manage Coupon’s</p>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default CustomNav;
