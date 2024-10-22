import Header from '@/app/components/header/header'
import Navbar from '@/app/components/navbar/navbar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <div>
        <Header />
        </div>

        <div className="flex gap-12">
            <p><Navbar /></p>
            <p className="p-5">{children}</p>
        </div>
    </div>
  )
}
