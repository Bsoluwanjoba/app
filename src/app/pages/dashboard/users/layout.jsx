import React from 'react'
import Consumer from './consumer/consumer'
import Vendor from './vendor/vendor'

export default function layout({children}) {
  return (
    <div>
        <div className='p-4'>
            {/* <Consumer /> */}
        </div>

        <div className='p-4'>
            <p><Vendor /></p>
            {/* <p>{children}</p> */}
        </div>
    </div>
  )
}
