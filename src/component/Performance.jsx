function Performance() {
  return (
    <div className="relative h-[650px]">
      <div className="-translate-y-[460px] ">
        <img
          src="../../img/car/car-interior.png"
          alt=""
          className="relative z-10"
        />
        <div className="-translate-y-[220px] relative">
          <img src="../../img/bg/bg-car with road.png" alt="" className=" " />
          <div className="px-[29px] absolute bottom-[400px] ">
            <div className=" pt-10 ">
              <div className="bg-clip-text text-transparent bg-gradient-to-b from-white from-40% to-[#438cd4] text-7xl tracking-widest">
                PERFORMANCE
              </div>
            </div>
            <div className="flex text-white mt-5 text-center w-fit mx-0 ">
              <div className="flex flex-col pr-10 ">
                <p className="font-thin">กำลังสูงสุด</p>
                <p className="font-bold tracking-widest">117 แรงม้า</p>
              </div>
              <div className="px-10 border-x-[1px]">
                <p className="font-thin">ความจุแบตเตอรี่</p>
                <p className="font-bold tracking-widest">
                  {" "}
                  50.3 กิโลวัตต์ - ชั่วโมง
                </p>
              </div>
              <div className="pl-10">
                <p className="font-thin">แรงบิดสูงสุด</p>
                <p className="font-bold tracking-widest">280 นิวตัน - เมตร</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
