import React from 'react'
import ProductsPage from './ProdManage'

export default function layout({children}) {
  return (
    <div className='ml-20'>
        <ProductsPage />
    </div>
  )
}
