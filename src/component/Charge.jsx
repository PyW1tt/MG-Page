import React from "react";

function Charge() {
  return (
    <div className="relative mb-24">
      <img src="../../public/img/bg/bg-blue.png" alt="" />
      <div className="absolute -top-16 left-[10%]">
        <img src="../../public/img/car/charge.png" alt="" />
        <div>
          <div className="bg-clip-text text-transparent bg-gradient-to-b from-white from-40% to-[#438cd4] text-7xl tracking-widest text-center mt-10">
            <span className="font-extralight">EASY </span>
            CHARGE
          </div>
          <div className="text-white text-center text-2xl">
            <div className="mt-5">
              <p className="font-bold text-3xl tracking-wider">
                MG SUPER CHARGE STATION
              </p>
              <p>
                ด้วยเครือข่ายสถานีชาร์จทั่วไทย <br /> ไปได้ไกลทั่วทุกภูมิภาค
              </p>
            </div>
            <div className="mt-4">
              <p className="font-bold tracking-wider">QUICK CHARGE</p>
              <p className="font-normal">
                ชาร์จพลังงาน 30% - 80% ใช้เวลาประมาณ 30 นาที
              </p>
              <p className=" font-thin">
                (ระยะเวลาในการชาร์จ ขึ้นอยู่กับระดับแบตเตอรี่ <br />{" "}
                ที่เหลือและกำลังไฟของสถานีชาร์จนั้น ๆ )
              </p>
            </div>
            <div className="mt-4">
              <p className="font-bold tracking-wider">NORMAL CHARGE</p>
              <p className="font-light">
                ผ่าน MG HOME CHARGER 0 - 100% <br />
                ใช้เวลาประมาณ 7 ชั่วโมง 15 นาที
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-clip-text text-transparent bg-gradient-to-b from-white from-40% to-[#438cd4] text-7xl tracking-widest text-center mt-16">
            <span className="font-extralight">EASY </span>
            MAINTENANCE
          </div>
          <div className="text-white text-start mt-5 text-2xl">
            <span>
              ค่าบำรุงรักษาตามระยะทางตลอด 5 ปี หรือ 100,000 กม. <br />{" "}
              <span>(แล้วแต่อย่างใดอย่างหนึ่งถึงกก่อน) </span>
              รวมค่าแรงทั้งสิ้น <br />
              ไม่เกิน 9,000 บาท
            </span>
            <img
              src="../../public/img/car/car-maintenance.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charge;
