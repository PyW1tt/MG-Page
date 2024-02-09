import React from "react";

function View() {
  return (
    <>
      <div className=" mt-2 relative">
        <div className="">
          <img src="../../public/img/bg/bg-360view.png" alt="" className="" />
        </div>
        <div className="absolute top-[360px] left-0 skew-y-[10deg] h-[350px] bg-gradient-to-br from-[#438cd4] from-50%  to-[#26458c]  w-full z-10"></div>

        <div className="absolute top-36 z-20">
          <img src="../../public/img/car/360ViewCar.png" alt="" />
          <img
            src="../../public/360ViewButton.png"
            alt=""
            className="mt-10 hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-20 relative bg-[#438cd4] h-[1000px]">
        <div className="relative z-10">
          <img src="../../public/img/bg/Exterior.png" alt="" />
        </div>
        <div className="absolute top-10 px-[29px] mt-14 z-20 ">
          <div className="text-8xl">
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-white from-20% to-[#438cd4] ">
              EXTERIOR
            </div>
            <div className=" bg-clip-text text-transparent bg-gradient-to-b from-white from-20% to-[#438cd4] font-extralight">
              DESIGN
            </div>
          </div>
          <div className="mt-2 text-white font-light text-xl ">
            <div>ภายนอกเรียบหรู ล้ำสมัยใต้แนวคิด</div>
            <div>BRIT DYNAMIC ที่ให้ทั้งสมรรถนะ</div>
            <div>
              <span className="font-thin">(PERFOEMANCE)&nbsp;</span>
              การควบคุม
            </div>
            <div>
              <span className="font-thin">(HANDLING)&nbsp;</span>
              การออกแบบ
              <span className="font-thin">&nbsp;(DESIGN)</span>
            </div>
            <div>
              และความปลอดภัย
              <span className="font-thin">&nbsp;(SAFETY)</span>
            </div>
            <div>ชีวิตดี ๆ ในโลกยุค EV</div>
            <div>เริ่มต้นได้กับยนตรกรรมคันนี้</div>
          </div>
        </div>
        <div className="  bg-gradient-to-b from-[#438cd4] from-10% to-[#26458c] w-full absolute bottom-0">
          <div className="w-[800px] flex items-center text-center text-white ">
            <img
              src="../../public/img/icon/arrow-left.png"
              alt=""
              className="h-12 hover:cursor-pointer"
            />
            <div className="">
              <img
                src="../../public/img/car/car1.png"
                alt=""
                className="relative z-10"
              />
              <p className="font-light text-md mt-1">
                กระจัง และกันชนหน้า <br /> GRILLE-LESS DESIGN
              </p>
            </div>
            <div>
              <img
                src="../../public/img/car/car2.png"
                alt=""
                className="relative z-10"
              />
              <p className="font-light text-md mt-1">
                ล้ออัลลอยด์ พร้อมฝาครอบแม็ก <br /> ดีไซน์ใหม่ 17 นิ้ว{" "}
              </p>
            </div>
            <img
              src="../../public/img/icon/arrow-right.png"
              alt=""
              className="h-12 relative z-10 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
