'use client'
import { useState } from "react"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { MdSpaceDashboard, MdProductionQuantityLimits, MdCancel } from "react-icons/md"
import { FaUser, FaChartLine, } from "react-icons/fa"
import { RiListOrdered2 } from "react-icons/ri"
import { BiSolidReport } from "react-icons/bi"
import { BsLayoutTextWindowReverse } from "react-icons/bs"
import { ImEnter } from "react-icons/im"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {AiOutlineMenu, AiCancel} from 'react-icons/ai'



function Navbarii() {

    const [isOpen, setIsOpen] = useState(true)
    const [usersOpen, setUsersOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)
    const [nav, setNav] = useState(false)

        function handleClick(){
            setNav(!nav)
        }

        function handleNav() {
            setIsOpen(!isOpen)
        }

        const toggleUsers = () => setUsersOpen(!usersOpen)
        const toggleProducts = () => setProductsOpen(!productsOpen)
        const pathname = usePathname()

        const isLinkActive = (href) => {
            if (href === '/') {
                return pathname === href;
            }
            return pathname.startsWith(href);
        };


  return (
    <div>
        <section className="">
            {/* Mobile Nav */}
                <header>{nav ? <MdCancel onClick={handleClick} size={38} className='absolute top-[10px] right-4 z-[99] text-[#0ac] md:hidden'/> : <AiOutlineMenu onClick={handleClick} size={32} className='absolute top-[12px] right-4 z-[99] text-[#0ac] md:hidden'/>}</header>

                    {nav ? (
                        <nav className=" md:hidden w-full h-screen absolute z-20 top-0 bg-white opacity-90">
                            <div className='h-screen items-center justify-center text-white relative -bottom-40 p-3 space-y-6 ml-[90px]'>
                            <Link href="/" className={`${
                    isLinkActive('/') ? 'bg-[#0ac] text-white rounded-md' : ''
                }  hover:rounded-md  flex gap-3 p-3 border border-[#116] w-[200px] rounded-md`}>
                            <p><MdSpaceDashboard size={25} className="text-[#0ac]"/></p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Dashboard</p>
                        </Link>

                        <p className="flex gap-x-3 gap-y-5 p-3 items-center border border-[#116] rounded-md w-[200px] justify-center" onClick={toggleUsers}>
                            <p><FaUser size={25} className="text-[#0ac]"/></p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Users
                            
                            </p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ''}`}>{usersOpen ? <FaChevronUp size={15} className="text-[#0ac] font-medium tracking-wider"/> : <FaChevronDown size={15} className="text-[#0ac] font-medium tracking-wider"/>}</p>
                            
                        </p>

                                            {usersOpen && (
                                        <div className="pl-8 py-1 block text-[#0ac] font-medium tracking-wider leading-[60px]">
                                        <Link href='/' className='border border-[#116] w-[150px] p-2 rounded-md space-y-3'>Consumers</Link> <br />
                                        <Link href='/' className='border border-[#116] w-[190px] p-2 rounded-md'>Vendors</Link>
                                        </div>
                                        )}

                        <p className="flex gap-3 p-3 items-center  border border-[#116] w-[200px] rounded-md" onClick={toggleProducts}>
                            <p><MdProductionQuantityLimits size={25} className="text-[#0ac]"/></p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'} flex items-center gap-2`}>Product Management
                            </p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ''}`}>{productsOpen ? <FaChevronUp size={15} className="text-[#0ac] font-medium tracking-wider"/> : <FaChevronDown size={15} className="text-[#0ac] font-medium tracking-wider"/>}</p>
                        </p>

                                        {productsOpen && (
                                    <div className="block pl-8 py-2  text-[#0ac] font-medium tracking-wider leading-[60px]">
                                        <Link className=" hover:bg-gray-100 border border-[#116] w-[190px] p-2 rounded-md" href='/'>Product Inventory</Link> <br />
                                        <Link className=" hover:bg-gray-100 border border-[#116] w-[190px] p-2 rounded-md" href='/'>Managing Products</Link>
                                    </div>
                                    )}

                        <Link className="flex gap-3 p-3 items-center  border border-[#116] w-[200px] rounded-md" href='/'>
                            <p><RiListOrdered2 size={25} className="text-[#0ac]"/></p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Sales</p>
                        </Link>

                      
                        <Link className={`flex gap-3 p-3 items-center  border border-[#116] w-[200px] rounded-md ${
                    isLinkActive('/pages/dashboard/revenue') ? 'bg-[#0ac] text-white rounded-md' : 'text-[#0ac]'
                }`} href='/pages/dashboard/revenue'>
                            <p><BsLayoutTextWindowReverse size={25} className=""/></p>
                            <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ' font-medium tracking-wider'}`}>Revenue</p>
                        </Link>

                       
                            </div>
                        </nav>
                        // <div className="mt-[26.5em]">
                        //     <p><ImEnter /></p>
                        //     <button>Logout</button>
                        // </div>

                    ) : 
                    ('')}

        </section>



            {/* Laptop Screen */}
        <section className={`${isOpen ? 'w-[250px] h-full' : 'w-[70px]'} bg-white shadow-2xl p-2 md:block hidden`}>
            <p className="flex justify-between">
            <IoIosArrowDroprightCircle size={27} className={`text-[#0ac] cursor-pointer ${isOpen? 'hidden' : 'ml-[1em]'}`} onClick={handleNav}/>
            <IoIosArrowDropleftCircle size={27} className={`text-[#0ac] cursor-pointer ${isOpen ? 'block ml-[12em]' : 'hidden'}`} onClick={handleNav}/>
            </p>
            
            <nav className=" mt-[2em] ml-[0.3em]">
            <Link href="/" className={`${
        isLinkActive('/') ? 'bg-[#0ac] text-white rounded-md' : ''
    }  hover:rounded-md border-b-2 border-[#116] flex gap-3 p-3`}>
                <p><MdSpaceDashboard size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Dashboard</p>
            </Link>

            <p className="flex gap-x-3 gap-y-5 p-3 items-center border-b-2 border-[#116]" onClick={toggleUsers}>
                <p><FaUser size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Users
                
                </p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ''}`}>{usersOpen ? <FaChevronUp size={15} className="text-[#0ac] font-medium tracking-wider"/> : <FaChevronDown size={15} className="text-[#0ac] font-medium tracking-wider"/>}</p>
                
            </p>

                                {usersOpen && (
                            <div className="pl-8 py-2 block text-[#0ac] font-medium tracking-wider leading-8">
                               <Link href='/'>Consumers</Link> <br />
                               <Link href='/'>Vendors</Link>
                            </div>
                            )}

            <p className="flex gap-3 p-3 items-center border-b-2 border-[#116]" onClick={toggleProducts}>
                <p><MdProductionQuantityLimits size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'} flex items-center gap-2`}>Product Management
                </p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ''}`}>{productsOpen ? <FaChevronUp size={15} className="text-[#0ac] font-medium tracking-wider"/> : <FaChevronDown size={15} className="text-[#0ac] font-medium tracking-wider"/>}</p>
            </p>

                            {productsOpen && (
                        <div className="block pl-8 py-2  text-[#0ac] font-medium tracking-wider leading-8">
                            <Link className="py-1 hover:bg-gray-100" href='/'>Product Inventory</Link> <br />
                            <Link className="py-1 hover:bg-gray-100" href='/'>Managing Products</Link>
                        </div>
                        )}

            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]" href='/'>
                <p><RiListOrdered2 size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Revenue</p>
            </Link>
            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]" href='/'>
                <p><RiListOrdered2 size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Orders</p>
            </Link>

            </nav>

            <div className="mt-[10.9em] flex items-center gap-3 pb-5 ml-3">
                <p size={29} className="text-red-700 text-[24px]"><ImEnter /></p>
                <button className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-red-700 font-medium tracking-wider'}`}>Logout</button>
            </div>
        </section>
    </div>
  )
}

export default Navbarii