import React, { useState } from "react";
import faqsApi from "../FaqsApi";
import Questions from "./Questions";

const Accordian = () => {
  const [data, setData] = useState(faqsApi);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      <div>
        {data.map((elem, index) => {
          return (
            <Questions
              key={index}
              {...elem}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
