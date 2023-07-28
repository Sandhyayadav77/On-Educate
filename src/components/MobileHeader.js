import React from 'react'
import logo from '../assets/images/logo.png'
import { AiFillFileText } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'

const MobileHeader = () => {
  return (
    <div>
        {/* mobile screen */}
        <div className="mobile-header before:content-[''] after:content-[''] bg-[#fff] py-[10px] shadow md:hidden ">
                <div className='container px-4 mx-auto flex justify-between items-center ' >
                    <div className="logo-mobile before:content-[''] after:content-['']">
                        <a href="/">
                            <img src={logo} width={150} alt="Logo" />
                        </a>
                    </div>
                  
                    <div className="btn-panel flex justify-center items-center gap-2">
                        <a className="before:content-[''] inline-block p-2 text-white rounded-md border bg-[#a53692] border-[#a53692]" href="/">
                           
                            <AiFillFileText/>
                        </a>
                        <a className="before:content-[''] inline-block p-2 text-white rounded-md border bg-[#a53692] border-[#a53692]" href="/">
                            <FiMenu />
                        </a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default MobileHeader