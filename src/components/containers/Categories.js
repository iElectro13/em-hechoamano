import React from 'react'
import CategoryItem from '../buttons/CategoryItem'

const Categories = () => {
  return (
    <div className='flex justify-center items-center gap-4 text-gray-900 font-raleway font-medium '>
        <CategoryItem text="Todos"/>
        <CategoryItem text="Gorros"/>
        <CategoryItem text="Bufandas"/>
        <CategoryItem text="Ponchos"/>


    </div>
  )
}

export default Categories