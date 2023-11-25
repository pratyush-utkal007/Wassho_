import React from 'react'
import ProblemCard from './ProblemCard'
import problem1 from '../assets/problem-1.png'
import problem2 from '../assets/problem-2.png'
import problem3 from '../assets/problem-3.png'
import problem4 from '../assets/problem-4.png'
import problem5 from '../assets/problem-5.png'

const problems = [
    {
        img: problem1,
        title: "Scratches",
        desc:"Rough cleaning by local washers leaves Scratches on the car"
    },
    {
        img: problem2,
        title: "Damage Paint",
        desc:"Pressure from dirty water can damage the paint of the car"
    },
    {
        img: problem3,
        title: "Bad Chemicals/Water",
        desc:"Bad Chemicals/Water deteriorates the overall appearance of the car"
    },
    {
        img: problem4,
        title: "Interior Smell",
        desc:"not thoroughly drying your car"
    },
    {
        img: problem5,
        title: "Water Spots",
        desc:"Not completely drying the car also leaves water spots on the car"
    },
]

const ProbleWrapper = () => {
  return (
    <>
    <section className="problems">
    <div className="problem-wrapper md:px-16 px-4 md:py-6 py-2">
        <div>
            <h1 className='text-4xl font-bold text-center md:my-8 my-4 text-white'>5 PROBLEMS A BAD CAR WASH CAN CAUSE</h1>
        </div>
        <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5'>
            {
                problems.map((problem, index)=>{
                    const {img, title, desc} = problem
                    return (
                        <ProblemCard
                        key={index}
                           img={img} 
                        title={title}
                        desc={desc}
                        />
                    )
                })
            }
        </div>
    </div>
    </section>

    </>
  )
}

export default ProbleWrapper