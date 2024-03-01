import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F76%2Fcb%2F76cb2124085fe54107b7780b87c65152050a5685.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" /> 
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-grey-900">
              Nofliter
          </h3>
          <p className="mt-2 text-sm text-grey-500">
            Cotton Tshirt for men
          </p>
        </div>
    </div>
  );
};

export default HomeSectionCard;
