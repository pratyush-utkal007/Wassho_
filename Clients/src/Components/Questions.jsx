import React from 'react'
import {FaAngleDown} from 'react-icons/fa'

const Questions = ({question, answer,index,openIndex,setOpenIndex}) => {
    const isOpen = openIndex === index;

    const handleToggle = () => {
      setOpenIndex(isOpen ? null : index);
    };
  return (
    <div className='px-2 py-1 md:p-3'>
      <div className="question bg-white p-2 flex items-center justify-between cursor-pointer" onClick={handleToggle}>
        <h1 className='md:text-xl text-lg font-semibold text-red-800'>{question}</h1>
        <FaAngleDown className={`text-2xl duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      <div className={`bg-white duration-300 ${isOpen ? '' : 'h-0 overflow-hidden'}`}>
        <p className='p-2 text-slate-500'>{answer}</p>
      </div>
    </div>
  )
}

export default Questions