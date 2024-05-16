import React from "react";
import data from "../assets/data";
import Card from "./Card";
const DocCards = () => {
  return (
    <div className="w-[90%] flex flex-col justify-center text-black">
      <div className="mx-auto ">
      <button className=" mx-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Add Document
  </span>
</button>
      <button className=" mx-10 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Remove Document
  </span>
</button>
       
      </div>
      <div className="grid grid-cols-3 px-4">
        {data.docs.map((card) => (
          <div key={card.id}>
            <Card className='' card={card}></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocCards;
