import Headerii from '@/app/components/header/headerii'
import Navbarii from '@/app/components/navbar/navbarii'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <div>
        <Headerii />
        </div>

        <div className='flex gap-7 '>
        <p><Navbarii /></p>
        <p className='p-4'>{children}</p>
        </div>
    </div>
  )
}
