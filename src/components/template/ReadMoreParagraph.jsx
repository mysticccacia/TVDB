import React, { useState } from 'react';

const ReadMoreParagraph = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const shouldTruncate = text.length > 1200;
  const displayText = expanded || !shouldTruncate ? text : text.slice(0, 1200) + '...';

  return (
    <div className=" leading-relaxed">
      <p className="whitespace-pre-line">{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={toggleReadMore}
          className="text-zinc-100 hover:underline mt-2 inline-block"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMoreParagraph;
