import React from "react";

function Menu() {
  return (
    <div className="h-fit ">
      <div className="bg-[#9a322a] h-[80px] px-[29px] ">
        <div className="flex justify-between text-2xl text-white font-bold h-full items-center ">
          <div className="m-0 flex items-center">
            ทดลองขับเอ็มจี
            <img
              src="../../../public/img/icon/test-drive.png"
              alt=""
              className="h-5 w-5 ml-5"
            />
          </div>
          <div className="flex items-center">
            ค้นหาผู้จำหน่ายเอ็มจี
            <img
              src="../../../public/img/icon/find-a-showroom.png"
              alt=""
              className="h-5 w-4 ml-5"
            />
          </div>
          <div className="m-0 flex items-center">
            ค้าหาสถานีชาร์จ
            <img
              src="../../../public/img/icon/find-charging-station-white-icon.png"
              alt=""
              className="h-5 w-4 ml-5"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 h-fit px-[29px]">
        <p className="text-5xl font-bold py-[37px] ">NEW MG ZS EV</p>
        <select
          name=""
          id=""
          className="w-full border border-black rounded-md h-[40px] pl-4 text-1xl font-bold"
        >
          <option value="volvo">ภาพรวม</option>
        </select>
      </div>
    </div>
  );
}

export default Menu;
