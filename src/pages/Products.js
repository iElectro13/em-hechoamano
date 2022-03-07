import React from 'react'
import Categories from '../components/containers/Categories'
import ProductCards from '../components/containers/ProductCards'
import Section from '../components/containers/Section'

const Products = () => {
  return (
    <Section title="Nuestros productos">
        <Categories />
        <ProductCards />
    </Section>
  )
}

export default Products