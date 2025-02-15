import React from "react";

function Indicator({isLast, isFirst}) {
  return (
    <div className={`${isFirst ? 'pt-8' : ''} relative w-16 flex flex-col gap-1 items-center justify-center`}>
      <div className={`${isLast ? 'bg-gradient-to-b from-custom-light-blue via-custom-light-blue to-transparent' : 'bg-custom-light-blue'} w-[2px] h-full`} data-aos="fade-down">&nbsp;</div>
      <div className="absolute top-2 w-6 aspect-square rounded-full bg-custom-blue border-custom-black border-4" data-aos="zoom-in" data-aos-duration="1000"></div>
    </div>
  )
}

export default Indicator