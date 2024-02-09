import React from "react";

function Interior() {
  return (
    <>
      <div className="bg-[#26458c] flex justify-between pt-20 ">
        <div className="w-fit mx-0 ">
          <img
            src="../../public/img/car/inside-car.png"
            alt=""
            className="w-[500px]  "
          />
        </div>
        <div className="pr-[29px] ">
          <div className="text-7xl pt-10 ">
            <div className="bg-clip-text text-transparent bg-gradient-to-b from-white from-20% to-[#438cd4] ">
              INTERIOR
            </div>
            <div className=" bg-clip-text text-transparent bg-gradient-to-b from-white from-20% to-[#438cd4] font-extralight">
              DESIGN
            </div>
          </div>
          <div>
            <p className=" pt-5 text-white font-light text-md ">
              ง่าย ให้ชีวิตสบายทุกฟังก์ชั่น <br />{" "}
              ด้วยห้องโดยสารภายในที่คิดมาให้ครบ
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="-translate-y-40 relative ">
          <img src="../../public/img/bg/Rectangle 21.png" alt="" />
          <div className=" absolute top-24 right-2 w-full">
            <div className="flex items-center w-[800px]">
              <img
                src="../../public/img/icon/arrow-left(black).png"
                alt=""
                className="h-12"
              />
              <div className=" ">
                <img src="../../public/img/car/car3.png" alt="" />
                <p className=" pt-1 text-center">
                  หน้าจอสีระบบสัมผัส <br /> ดีไซน์ใหม่ ขนาด 10 นิ้ว
                </p>
              </div>
              <div>
                <img src="../../public/img/car/car4.png" alt="" />
                <p className=" pt-1 text-center">
                  หน้าจอแสดงผลอัจฉริยะ <br /> แบบดิจิตอล ขนาด 7 นิ้ว
                </p>
              </div>

              <img
                src="../../public/img/icon/arrow-right(black).png"
                alt=""
                className="h-12"
              />
            </div>
            <div className="px-[29px]">
              <div className="text-7xl pt-10 ">
                <div className="bg-clip-text text-transparent bg-gradient-to-b from-[#438cd4] from-10% to-[#26458c] ">
                  EASY DRIVER
                </div>
                <hr className="border border-[#acc6e0] w-[550px] my-3" />
                <div className=" bg-clip-text text-transparent bg-gradient-to-b from-[#438cd4] from-10% to-[#26458c] ">
                  SAFETY SYSTEM
                </div>
              </div>
              <div className="py-2 text-[#26458c] font-extralight text-6xl">
                ง่าย และปลอดภัย ทุกการขับเคลื่อน
              </div>
              <div className="text-[#26458c] relative z-20 text-lg">
                <div>
                  เต็มอิ่มกับ{" "}
                  <span className="font-bold">ADVANCED SYNCRONIZED</span>
                </div>
                <div className="font-bold">PROTECTION SYSTEM 20 ระบบ</div>
                <div>เทคโนโลยีความปลอดภัยรอบคันให้คุณมั่นใจ</div>
                <div>
                  กับประสบการณ์
                  <span className="font-bold"> EV </span>ที่ปลอดภัยอย่างแท้จริง
                </div>
              </div>
            </div>
            <div className="-translate-y-10 relative z-10 ">
              <img
                src="../../public/img/bg/bg-car.png"
                alt=""
                className="h-[600px] mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interior;
