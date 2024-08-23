import React from 'react'
import Headings from '../Headings'
import { ArrowRight } from 'lucide-react'


const Experience = () => {


    const experience = [
        {
            id: 1,
            company: 'Eidiko Systems & Integrators',
            role: 'Fullstack Developer',
            description: 'Worked on the Eidiko internal project, developing a system to manage employee details, work assignments, and attendance tracking. Implemented warning emails and created distinct modules for HR and admin levels to streamline management processes.'
        },
        {
            id: 2,
            company: 'Canara HSBC',
            role: 'Backend & Wso2 Esb Developer',
            description: 'Developed a customer portal application with features for logging in, creating change requests, policy revival, redirection, and fund switching. Implemented asynchronous email notifications using Kafka for efficient communication.'
        },
        {
            id: 1,
            company: 'Mashreq Bank',
            role: 'Backend Developer',
            description: 'Worked on the Owner Association and CCMS projects, developing DTOs, APIs, and other core components to facilitate data handling, integration, and overall system functionality.'
        }
    ]

    return (
        <div className='container mx-auto mt-20'>
            <div>
                <Headings title={'Experience'} description={'With over 3 years of experience, I’m a versatile developer proficient in Java for backend, React for frontend, and WSO2 for enterprise integration and API management. Adept in modern development practices including CI/CD, agile methodologies, and cross-functional teamwork.'} />
            </div>
            <div className='flex flex-wrap'>
                {experience.map(ex => (
                    <div key={ex.id} className="lg:w-1/3 md:w-1/2 w-full h-96 p-5">
                        <div className="card bg-gradient-to-br from-slate-950 to-black w-full h-full">
                            <div className="flex justify-around px-5 items-center py-5">
                                <div class="relative inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 overflow-hidden bg-gray-100 rounded-full bg-gradient-to-r from-red-800 to-orange-500 ">
                                    <span class="font-medium text-gray-600 dark:text-gray-300 text-2xl lg:text-4xl">{ex.company.slice(0,2)}</span>
                                </div>
                                <div className=''>
                                    <p className='text-xl'>{ex.company}</p>
                                    <p className='text-xs font-thin'>{ex.role}</p>
                                </div>
                            </div>
                            <div className='p-5 tracking-wider font-light text-sm'>
                                <p className='text-gray-200'>
                                    {ex.description}
                                </p>
                            </div>
                            <div className='flex justify-end mt-5 mr-10'>
                                <ArrowRight className='text-orange-800 cursor-pointer' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
