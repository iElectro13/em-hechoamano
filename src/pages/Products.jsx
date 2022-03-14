import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Categories from '../components/containers/Categories'
import ProductCards from '../components/containers/ProductCards'
import Section from '../components/containers/Section'

const Products = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    if(location.pathname === "/productos"){
      navigate("/productos/todos")
    }
  })
  return (
    <Section title="Nuestros productos">
        <Categories />
        <ProductCards />
    </Section>
  )
}

export default Products