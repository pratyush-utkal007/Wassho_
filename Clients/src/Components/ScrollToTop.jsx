import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import '../App.css'
const ScrollToTop = () => {
  const [srollUp, setScrollUp] = useState(true)
  const handleScroll =()=>{
    if(window.scrollY>200){
      setScrollUp(false)
    }
    else{
      setScrollUp(true)
    }
  }
  const handleScrollUp = () =>{
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }

  useEffect(()=>{
    handleScrollUp()
    window.addEventListener("scroll", handleScroll);

  },[])
  return (
    <>
    <button className={`fixed bottom-5 right-7 bg-white h-14 w-14 flex justify-center items-center rounded-full z-[999] animate ${srollUp ?"hidden":"block"}`} onClick={handleScrollUp}>
    <FaAngleUp className='inline text-4xl'/>
    </button>
    </>
  )
}

export default ScrollToTop