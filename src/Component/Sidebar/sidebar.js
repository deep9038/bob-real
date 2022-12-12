import React,{useState} from 'react'
import './sidebar.css'
import {motion} from "framer-motion";
import { FaBars, FaHome, } from "react-icons/fa";
import {BiMoney} from "react-icons/bi"
import {TbFileReport} from "react-icons/tb"
import {HiUsers} from "react-icons/hi"
import {IoSettingsSharp} from "react-icons/io5"

const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path:"/",
      name:"Loans",
      icon:<BiMoney/>
    },
    {
      path:"/",
      name:"Reports",
      icon:<TbFileReport/>
    },
    {
      
      path:"/",
      name:"User",
      icon:<HiUsers/>
    },
    {
      path:"/",
      name:"Setting",
      icon:<IoSettingsSharp/>
    }
  ];
  

const Sidebar = () => {
  const [isOpen,setIsOpen]=useState(false)
  let toggle=()=>setIsOpen(!isOpen)
  return (
    <>
        <div className='main-container' >
            <motion.div animate={{width:isOpen ? "100%" : "40px"}}  className="sidebar">
            <div className='top_section'>
               {isOpen &&  <h1 className='logo'>BOB</h1>}
                <div className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            <div className='search'>
                    
                   {isOpen &&  <input placeholder='Search'/>}
                </div>
              <section className='routes'>
                {
                    routes.map((rout)=>{
                        return(
                            <a href={rout.path} key={rout.name} className="link">
                                <div className='icon'>{rout.icon}</div>
                                {isOpen && <div className='link_text'>{rout.name}</div>}
                            </a>
                        )
                    })
                }
              </section> 
            </motion.div>
        </div>
    </>
  )
}

export default Sidebar