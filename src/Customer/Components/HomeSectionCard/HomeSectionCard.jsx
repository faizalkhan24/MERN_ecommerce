import React from "react";

const HomeSectionCard = ({prodcut}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
            <img className="object-cover object-top w-full h-full" src={prodcut.imageUrl} alt="" /> 
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-grey-900">
              {prodcut.brand}
          </h3>
          <p className="mt-2 text-sm text-grey-500">
            {prodcut.title}
          </p>
        </div>
    </div>
  );
};

export default HomeSectionCard;
