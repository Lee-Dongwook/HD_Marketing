"use client";

import { useState } from "react";
import clsx from "clsx";

interface AccordionProps {
  title: string;
  content: string[];
  initialState?: boolean;
  disabled?: boolean;
  titleBackgroundColor?: string;
  contentBackgroundColor?: string;
}

const Accordion = ({
  title,
  content,
  initialState,
  disabled = false,
  titleBackgroundColor = "bg-white",
  contentBackgroundColor = "bg-white",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialState || false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button
        className={clsx(
          "flex justify-between items-center border-b border-black px-4 py-3 text-left font-pretendard font-medium hover:bg-gray-100 ",
          titleBackgroundColor
        )}
        onClick={toggleAccordion}
        disabled={disabled}
      >
        <span className="text-xl font-bold">{title}</span>
        <span>{disabled ? "▼" : isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className={clsx("px-4 py-2 mt-2", contentBackgroundColor)}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
