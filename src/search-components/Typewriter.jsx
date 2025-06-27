import React, { useState, useEffect, useMemo } from "react";

const TypewriterTextarea = ({ searchInput, setSearchInput }) => {
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const examplePrompts = useMemo(
    () => [
      "3-bedroom house in California under $700k...",
      "2-bedroom apartment in New York for rent...",
      "Luxury villa in Florida with 4 bathrooms...",
      "Modern condo in Texas between $500k and $800k...",
      "4-bedroom house in Seattle with 3 bathrooms under $1M...",
      "Beachfront villa in Miami with at least 3 bedrooms...",
      "Affordable apartment in Chicago with 2 bathrooms under $300k...",
      "Spacious family home in Atlanta with 4 bedrooms and 2 baths...",
      "Penthouse in Los Angeles with 5 beds and 4 baths over $1.5M...",
      "Cozy studio apartment in San Francisco for under $200k...",
      "House in Boston with 2-4 bedrooms priced between $400k and $600k...",
    ],
    []
  );

  useEffect(() => {
    const currentPrompt = examplePrompts[currentPromptIndex];

    if (charIndex < currentPrompt.length) {
      const timeout = setTimeout(() => {
        setPlaceholderText((prev) => prev + currentPrompt[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    if (charIndex === currentPrompt.length) {
      const timeout = setTimeout(() => {
        setPlaceholderText("");
        setCharIndex(0);
        setCurrentPromptIndex((prev) => (prev + 1) % examplePrompts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentPromptIndex, examplePrompts]);

  return (
    <>
      <textarea
        placeholder={placeholderText}
        rows="6"
        className="search-textarea"
        value={searchInput}
        onChange={handleInputChange}
      ></textarea>

      <style>
        {`.search-textarea {
    margin: 10px auto;
    display: block;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
    resize: none;
    width: 50%;  
     box-sizing: border-box;  
}
     @media (max-width:1200px)
     {
    .search-textarea{ width:60%;}
     }

@media (max-width: 984px) {
    .search-textarea {
        width: 90%;  
    }
}

@media (max-width: 600px) {
    .search-textarea {
    width:100%;
        font-size: 14px;  
        padding: 10px;  
    }
}


          .search-textarea:focus {
            outline: none;
            border-color: #007bb5;
          }
`}
      </style>
    </>
  );
};

export default TypewriterTextarea;
