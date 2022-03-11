import { useState } from 'react'
import Categories from '../components/containers/Categories'
import ProductCards from '../components/containers/ProductCards'
import Section from '../components/containers/Section'
import ProductDetailCard from '../components/cards/ProductDetailCard'

const Products = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Section title="Nuestros productos">
        <Categories />
        <ProductCards onOpen={setIsOpen}/>
        {isOpen && <ProductDetailCard onClose={setIsOpen}/>}
    </Section>
  )
}

export default Products