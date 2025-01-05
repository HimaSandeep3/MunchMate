import React, { useState } from "react";

const Description = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Helper function to limit the description to 30 words
  const getShortDescription = () => {
    const words = description.split(" ");
    return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
  };

  return (
    <div className="text-sm text-black leading-relaxed">
      <p>{isExpanded ? description : getShortDescription()}</p>
      {description.split(" ").length > 30 && (
        <button onClick={toggleDescription} className="bg-none text-black border-none text-md font-bold cursor-pointer mt-1 hover:underline">
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Description;
