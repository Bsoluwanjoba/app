'use client'
import { useState } from "react"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { MdSpaceDashboard, MdProductionQuantityLimits } from "react-icons/md"
import { FaUser, FaChartLine} from "react-icons/fa"
import { RiListOrdered2 } from "react-icons/ri"
import { BiSolidReport } from "react-icons/bi"
import { BsLayoutTextWindowReverse } from "react-icons/bs"
import { ImEnter } from "react-icons/im"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"



function Navbar() {

    const [isOpen, setIsOpen] = useState(true)
    const [usersOpen, setUsersOpen] = useState(false)
    const [productsOpen, setProductsOpen] = useState(false)

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
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'} flex items-center gap-2`}>Products
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
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Orders</p>
            </Link>

            <Link className="flex gap-3 p-3 items-center border-b-2 border-[#116]" href='/'>
                <p><BiSolidReport size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Reports</p>
            </Link>

            <Link className={`flex gap-3 p-3 items-center border-b-2 border-[#116] ${
        isLinkActive('/dashboard/revenue') ? 'bg-[#0ac] text-white rounded-md' : 'text-[#0ac]'
    }`} href='/dashboard/revenue'>
                <p><BsLayoutTextWindowReverse size={25} className=""/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : ' font-medium tracking-wider'}`}>Revenue</p>
            </Link>

            <Link className="flex gap-3 p-3 items-center  border-b-2 border-[#116]" href='/dashboard/sales'>
                <p><FaChartLine size={25} className="text-[#0ac]"/></p>
                <p className={`${!isOpen ? 'hidden transition-opacity duration-500' : 'text-[#0ac] font-medium tracking-wider'}`}>Sales</p>
            </Link>
            </nav>

            <div className="mt-[26.5em]">
                <p><ImEnter /></p>
                <button>Logout</button>
            </div>
        </section>
    </div>
  )
}

export default Navbar