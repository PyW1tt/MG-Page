function ISmart() {
  return (
    <div className="relative ">
      <img
        src="../../img/bg/bg-ismart.png"
        alt=""
        // className="-translate-y-14"
      />
      <div className="absolute top-20 right-12 flex">
        <div className="h-full translate-y-28 -translate-x-1">
          <img src="../../img/phone.png" alt="" />
        </div>
        <div>
          <img src="../../img/icon/ismart.png" alt="" className="mr-0" />
          <img src="../../img/car/car-ismart.png" alt="" className="mt-4" />
        </div>
      </div>
      <div>
        <img
          src="../../img/back-to-top.png"
          alt=""
          className="absolute -bottom-10 left-72 hover:cursor-pointer "
        />
      </div>
    </div>
  );
}

export default ISmart;
