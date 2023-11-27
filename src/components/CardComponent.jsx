import React from "react";
import ComponentHeader from "./ComponentHeader";
import Cards from "./Cards";

const CardComponent = () => {
  return (
    <div className=" flex flex-col items-center h-screen gap-12">
      <ComponentHeader />
      <Cards />
    </div>
  );
};

export default CardComponent;
