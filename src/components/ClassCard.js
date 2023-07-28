import React from 'react'
import logo from '../assets/images/book.png'
import { Link } from 'react-router-dom'

const ClassCard = (props) => {
    return (
        <>
            <div className="card mx-auto ">
                <div className="container before:content-[''] after:content-[''] shadow-xl shadow-gray-400 rounded-md w-[210px] px-4 py-4 relative flex flex-col items-center ">
                    <div className='img'>
                        <img src={logo} className='h-52 w-full' alt="" />
                    </div>
                    <p className='uppercase text-[11px] font-medium mt-2 w-full h-8 text-center'>{props.bookname}</p>
               
                    <Link  className='w-full px-2 py-2 my-2 rounded-3xl text-xs round-md text-white bg-blue-900 hover:bg-white hover:shadow-md hover:shadow-blue-900 hover:text-[13px] hover:transition-all hover:duration-200 hover:outline-none hover:ease-linear text-center
                    hover:text-blue-900 hover:font-bold hover:bg-gradient-to-r to-blue-100 from-yellow-200' >
                    View by Chapter/Video
                    </Link>
                    <Link className=' text-center w-full px-5 py-2 rounded-3xl text-sm round-md text-white bg-blue-900 hover:bg-white hover:shadow-md hover:shadow-blue-900 hover:text-[14px] hover:transition-all hover:duration-200 hover:outline-none hover:ease-linear
                    hover:text-blue-900 hover:font-bold hover:bg-gradient-to-r from-blue-100 to-yellow-200 '>Read E-Book</Link>

                </div>
            </div>
        </>
    )
}

export default ClassCard