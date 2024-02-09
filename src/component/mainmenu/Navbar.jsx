import React from "react";

function Navbar() {
  return (
    <div className="bg-[#b04139]  h-[163px] px-[29px] py-[22px] flex justify-between items-center relative z-10">
      <img
        src="../../img/logo/Logo.png"
        alt=""
        className="m-0 hover:cursor-pointer"
      />
      <img
        src="../../public/img/logo/menu.svg"
        alt=""
        className="m-0 hover:cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
