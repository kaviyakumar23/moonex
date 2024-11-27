import React from "react";

const SectionHeader = ({ text }) => {
  const words = text.split(" ");
  return (
    <h1 className="px-4 py-5 lg:px-16 font-fira text-2xl md:text-4xl lg:text-5xl font-extrabold">
      {words.length > 1 ? (
        <>
          {words[0]} <span className="text-custom-header pr-1">{words[1]}</span>
        </>
      ) : (
        <span className="text-custom-header">{words[0]}</span>
      )}
    </h1>
  );
};

export default SectionHeader;
