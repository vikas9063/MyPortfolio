import React from 'react'
import Headings from '../Headings'
import expenseImg from './../../assets/expense.png'
import portfolioImg from './../../assets/portfolio.jpg'
import intallyshwImg from './../../assets/intallyshw.jpg'

const MyWorks = () => {
    return (
        <div className='container mx-auto mt-20 bg-gradient-to-tr from-black to-slate-950'>
            <div>
                <Headings title={'Projects'} description={'These are my personal projects, excluding those from company work.'} />
            </div>
            <div className='flex flex-wrap'>
                <div className="lg:w-1/3 md:w-1/2 w-full  p-5">
                    <div className="card bg-black w-full h-full">
                        <div className="card-body">
                            <img src={expenseImg} className='w-full h-72' />
                        </div>
                        <div className="card-footer">
                            <p className='font-light py-5 px-2'>An expense tracker system built with Angular and Spring Boot allows users to manage, categorize, and analyze expenses through a responsive front end and a robust, scalable back end.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full  p-5">
                    <div className="card bg-black w-full h-full">
                        <div className="card-body">
                            <img src={portfolioImg} className='w-full h-72' />
                        </div>
                        <div className="card-footer">
                            <p className='font-light py-5 px-2'>A portfolio system built with the MERN stack (MongoDB, Express, React, Node.js) enables users to showcase their projects and skills with an interactive, dynamic front end and a flexible, powerful back end.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full p-5">
                    <div className="card bg-black w-full h-full">
                        <div className="card-body">
                            <img src={intallyshwImg} className='w-full h-72' />
                        </div>
                        <div className="card-footer">
                            <p className='font-light py-5 px-2'>A full-stack website for Intallysh Wisdom, developed with React and Spring Boot, provides a seamless user experience with a dynamic, interactive front end and a robust, scalable back end.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWorks
