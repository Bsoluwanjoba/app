import React from 'react'
import OrdersPage from './order/order'

export default function layout({children}) {
  return (
    <div className='p-20'>
    <p><OrdersPage /></p>
    <p>{children}</p>
    </div>
  )
}
