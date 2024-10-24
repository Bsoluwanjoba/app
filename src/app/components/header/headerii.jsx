'use client'
import { useState } from "react"
import { FaCaretDown } from "react-icons/fa"
import { IoIosNotificationsOutline } from "react-icons/io"
import { MdOutlineMessage } from "react-icons/md"
import { IoLogOut } from "react-icons/io5"
import Image from "next/image"
export default function Headerii () {
  const [logout, setLogout] = useState(false)

  function toggleBar (){
    setLogout(!logout)
  }

  return (
    <div>
                    <div className="w-full flex justify-between bg-white shadow-2xl items-center flex-wrap">

              {/* Logo */}
              <section className="p-3 relative z-[99]">
              <Image src="/HOR.LOGO-BLUE.png" alt="macronics" width={200} height={200}  />
              </section>

              {/* Search bar */}
              <section className="p-3">
              <input type="search" name="products" id="prod" size={50} placeholder="Enter your search details" className="border-2 p-1 rounded-sm" />
              </section>

              {/* Notifications, Messages, Profile */}
              <section className="p-3 flex gap-3 items-center">
              <IoIosNotificationsOutline size={25}/>
              <MdOutlineMessage size={22}/>
                  <div className="flex gap-1">
                  <p className="h-10 w-10 rounded-full bg-[#0ac]"></p>
                  <p className="text-[#0ac] font-medium gap-2 items-center flex cursor-pointer" onClick={toggleBar}>JOhn Abraham<FaCaretDown /></p>
                  </div>


              </section>
               </div>
               {logout && (
                      <div className="bg-white shadow-xl w-20 h-20 float-right">
                        <p className="flex gap-2 text-[#0ac] items-center p-3">Logout<IoLogOut /></p>
                      </div>
                    )}
    </div>
  )
}