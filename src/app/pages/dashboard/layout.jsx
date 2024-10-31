import Header from '@/app/components/header/header'
import Navbar from '@/app/components/navbar/navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <div>
        <Header />
        </div>

        <div className="flex md:gap-4 gap-0">
            <p><Navbar /></p>
            <p className="p-16 relative mx-auto">{children}</p>
        </div>
    </div>
  )
}
