import Image from "next/image";
import React from "react";

type Props = {};

const Categories = (props: Props) => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icn-category_rooms.jpg"}
          alt="icn category"
          width={20}
          height={20}
        />
        <span className="text-xs">Rooms</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icn-category_pools.jpg"}
          alt="icn category"
          width={20}
          height={20}
        />
        <span className="text-xs">Amazing Pools</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src={"/icn-category_countryside.jpg"}
          alt="icn category"
          width={20}
          height={20}
        />
        <span className="text-xs">Countryside</span>
      </div>
    </div>
  );
};

export default Categories;
