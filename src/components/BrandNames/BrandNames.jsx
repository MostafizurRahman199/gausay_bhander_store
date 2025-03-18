import React from 'react';
import rever from '../../../public/rever.png';

const BrandNames = () => {
  return (
    <div className="my-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold mb-6">To Whom We Are Trusted</h2>

      {/* Marquee container */}
      <div className="overflow-hidden">
        <div className="marquee flex animate-marquee gap-12">
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCou55E9bQuJ_r-quP81eI4BAEOzmpLVDk8Q&s"
              alt="Brand 1"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4Ta9umqcRDHusd5pwck4hwDCut9JLaUhGw&s"
              alt="Brand 2"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://www.mawbiz.com.bd/application/views/module/logo_image/12919834_1025547657512789_9094842152458692194_n.jpg"
              alt="Brand 3"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0B2dF1QzUTSyVdsif_ZnafiBEk3H_fN1AA&s"
              alt="Brand 4"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2024/03/19/golden_harvest.jpg"
              alt="Brand 5"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://globefisheries.com.bd/uploads/others/Globe_Fisherics_Logo-min.png"
              alt="Brand 6"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src={rever}
              alt="Brand 7"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMJUPMWU9Daxgrc_pBkT_xxi87PkbRw9loVMx2AvG8vnUGlth7jDf5DrzZMm5hKgwqfk&usqp=CAU"
              alt="Brand 8"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL3Z5vDOuiR7ZJbJTGEMVyPm8V61wbT6xx0MgkhorVnrqnYlf98z3ZHuSGVfmD6jF-Icc&usqp=CAU"
              alt="Brand 9"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSv64C_p8W3zPi-erBB83rORC9Ljfgcog-g&s"
              alt="Brand 10"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
          <div className="brand-item flex items-center justify-center">
            <img
              src="https://premiumfoods.us/wp-content/uploads/2023/04/shahjalalfoodsbd-logo-.webp"
              alt="Brand 11"
              className="w-46 h-46 object-contain transition-all duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandNames;
