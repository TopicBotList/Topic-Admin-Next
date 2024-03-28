import React from "react";
import Router from "next/router";

const Dropdown = () => (
  <ul className="p-2 shadow menu dropdown-content z-[1] bf-bas-100 rounded-box w-52">
    <div style={{ justifyContent: "center" }}>
      <li onClick={() => Router.push("/bots/approved")}>
        <a>All Bots</a>
      </li>
      <li onClick={() => Router.push("/bots/unapproved")}>
        <a>Unapproved Bots</a>
      </li>
    </div>
  </ul>
);

export default Dropdown;
