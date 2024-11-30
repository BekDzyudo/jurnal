import React from "react";
import { Link, Outlet } from "react-router-dom";

function NashrLayout() {
  return (
    <div className="align-elements flex gap-5">
      <ul className="w-[20%] flex flex-col gap-2">
        <li>
          <Link className="sidebar_btn">Barcha sonlari</Link>
        </li>
        <li>
          <Link className="sidebar_btn">2022-yil sonlari</Link>
        </li>
        <li>
          <Link className="sidebar_btn">2023-yil sonlari</Link>
        </li>
        <li>
          <Link className="sidebar_btn">2024-yil sonlari</Link>
        </li>
      </ul>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}

export default NashrLayout;
