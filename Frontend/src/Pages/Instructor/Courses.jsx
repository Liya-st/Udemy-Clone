import React from 'react'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PortraitIcon from '@mui/icons-material/Portrait';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export const Courses = () => {
  return (
    <>
    <div className=' flex  justify-start'>
    <Sidebar/>
        <div className='flex-row pl-[6rem] pt-[3rem] gap-10 '>
            <h1 className='text-3xl flex justify-start font-bold pb-[1.5rem] text-gray-700 '>Courses</h1>

            <div className='flex gap-[3rem]'>
                <div ><input type =" text"className='border border-2 border-gray-700 w-64 h-10' placeholder='  Search Your Courses'/> <SearchIcon sx={{ fontSize: 40}}/>
                </div>

                <div className='border ml-[1rem] border-gray-700 w-20 h-10 font-bold'>Newest</div>
                <div ><input type =" text"className='border border-2 border-gray-200 w-64 h-10' placeholder='  Search Your Courses'/> <SearchIcon sx={{ fontSize: 40}}/>
                </div>

                <div className='border ml-[1rem] border-gray-300 w-20 h-10 font-bold'>Newest</div>

                <Link to = "Create/Course1 "><div className='bg-purple-600 hover:bg-purple-800 ml-[43rem] w-[8rem] h-[2.5rem] text-white'>
                New course
                </div>
                </div>
                </div> </Link>
                
            </div>

            <p className=' p-[4rem]  text-grey-700 '>Based on your experience, we think these resources will be helpful.</p>

            <div className='border flex gap-[10rem] shadow-lg border-gray-800 w-80% h-80%'>
            <div className='border flex gap-[10rem] shadow-lg border-gray-200 w-80% h-80%'>
            <div className='border flex gap-[10rem] shadow-lg border-gray-300 w-80% h-80%'>
                <img className = "  pl-[10rem] w-50  h-40" src='https://s.udemycdn.com/instructor/dashboard/engaging-course-2x.jpg'/>
                <div className=''>
                    <p className='text-xl text-gray-700 p-[1rem] flex '>Create an Engaging Course</p>
                    <p className='p-[1rem] whitespace-normal w-[30rem] ' >Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
                    
                   <Link to= "Instructor/Resource"><a className=" p-[1rem] flex justify-startmt-[1rem] underline text-purple-800 hover:text-purple-950 ">Get started</a></Link> 

                </div>
            </div>

                <div className='flex gap-[3rem] m-[1rem]'>
                    <div className='border flex gap-[2.5rem] shadow-lg border-gray-300 w-80% h-80%'>
                        <img className = "  pl-[2.5rem] w-50  h-40" src='https://s.udemycdn.com/instructor/dashboard/video-creation-2x.jpg'/>
                        <div className=''>
                            <p className='text-xl text-gray-700 p-[1rem] flex '>Get Started with Video</p>
                            <p className='p-[1rem] whitespace-normal ' >Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
                            
                            <a className=" p-[1rem] flex justify-startmt-[1rem] underline text-purple-800 hover:text-purple-950 "href="">Get started</a>

                        </div>
                    </div>
                    <div className='border flex gap-[2.5rem] shadow-lg border-gray-300 w-80% h-80%'>
                        <img className = "  pl-[2.5rem] w-50  h-40" src='https://s.udemycdn.com/instructor/dashboard/build-audience-2x.jpg'/>
                    <div className=''>
                        <p className='text-xl text-gray-700 p-[1rem] flex '>Build Your Audience</p>
                        <p className='p-[1rem] whitespace-normal  ' >Set your course up for success by building your audience.</p>
                        
                        <a className=" p-[1rem] flex justify-startmt-[1rem] underline text-purple-800 hover:text-purple-950 "href="">Get started</a>

                    </div>
                </div>
            </div>


            <div className='border flex gap-[10rem] shadow-lg border-gray-300 w-80% h-80%'>
                <img className = "  pl-[10rem] w-50  h-40" src='https://s.udemycdn.com/instructor/dashboard/newcomer-challenge-2x.jpg'/>
                <div className=''>
                    <p className='text-xl text-gray-700 p-[1rem] flex '>Join the New Instructor Challenge!</p>
                    <p className='p-[1rem] whitespace-normal w-[30rem] ' >Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!</p>
                    
                    <a className=" p-[1rem] flex justify-startmt-[1rem] underline text-purple-800 hover:text-purple-950 "href="">Get started</a>

                </div>
            </div>


            <p className=' mt-[2rem] '>Have questions? Here are our most popular instructor resources.</p>
            <p className=' mt-[5rem] '>Have questions? Here are our most popular instructor resources.</p>
            <div className='flex gap-[2rem] pt-[5rem] m-[1rem]'>
                <div>
                     <OndemandVideoIcon color = "disabled" sx={{ fontSize: 50}}/>
                    <p className= "underline text-purple-800 hover:text-purple-950 ">Test Video</p>
                    <p className= "whitespace-normal">Send us a sample video and get expert feedback.</p>
                </div>

                <div>
                     <QuestionAnswerIcon color = "disabled" sx={{ fontSize: 50}}/>
                    <p className= "underline text-purple-800 hover:text-purple-950 ">Instructor Community</p>
                    <p className= "whitespace-normal">Connect with experienced instructors. Ask questions, browse discussions, and more.</p>
                </div>
                <div >
                    <PortraitIcon color = "disabled" sx={{ fontSize: 50}}/>
                    <p className= "underline text-purple-800 hover:text-purple-950 ">Teaching Center</p>
                    <p className= "whitespace-normal">Learn about best practices for teaching on Udemy.</p>
                </div>
                <div >
                    <AutoGraphIcon color = "disabled" sx={{ fontSize: 50}}/>
                    <p className= "underline text-purple-800 hover:text-purple-950 ">Marketplace Insights</p>
                    <p className= "whitespace-normal">Validate your course topic by exploring our marketplace supply and demand.</p>
                </div>
                <div >
                    <HelpCenterIcon color = "disabled" sx={{ fontSize: 50}}/>
                    <p className= "underline text-purple-800 hover:text-purple-950 ">Help and Support</p>
                    <p className= "whitespace-normal">Browse our Help Center or contact our support team.</p>
                </div>
            </div>


        </div>
    </div>
     
    </>
  )
}

