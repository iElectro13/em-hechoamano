import React from 'react'
import CategoryItem from '../buttons/CategoryItem'

/**This component renders the categories */
const Categories = () => {
  return (
    <div className='flex justify-center items-center gap-4 text-gray-900 font-raleway font-medium '>
        <CategoryItem text="Todos" route="/productos/todos"/>
        <CategoryItem text="Gorros" route="/productos/gorros"/>
        <CategoryItem text="Bufandas" route="/productos/bufandas"/>
        <CategoryItem text="Ponchos" route="/productos/ponchos"/>
    </div>
  )
}

export default Categories