import React from "react";

export default function DescriptionBox() {
  return (
    <div className="my-20 mx-40">
      <div className="flex ">
        <div className="flex items-center justify-center font-semibold w-[120px] h-[50px] border-r-0 border-2 border-gray-300  border-b-0">
          Description
        </div>
        <div className="flex items-center justify-center font-semibold w-[120px] h-[50px] border-2 border-gray-300 text-gray-400 bg-gray-100 border-b-0">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-3 border-2 border-gray-300 p-5 pb-7 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos
          dolores dolorem itaque obcaecati, distinctio velit aliquid repellat?
          Quo excepturi beatae quod ratione ab aut, dolore eos inventore
          expedita quam eum repudiandae mollitia vero minima ducimus, facere
          velit, iure consequuntur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          neque, accusantium repellat tempora at quia exercitationem deleniti
          molestias fugiat doloremque, architecto harum, aliquid ipsum magni!
        </p>
      </div>
    </div>
  );
}
