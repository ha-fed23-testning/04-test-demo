/* eslint-disable no-undef */
// import React from 'react'
import { useStore } from '../../data/store.js'
import ProductGrid from './ProductGrid'

describe('<ProductGrid />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ProductGrid />)
	})

	it('renders the same amount of products as are in the store', () => {
		// preppa store - lägga till data i zustand store
		// rendera komponenten med mount
		// räkna att det finns X antal element med css-klassen 'product'

		// const setProducts = useStore(state => state.setProducts)
		const testProducts = [
			{ id: 1, name: "Water Balloon Launcher", price: 15.99, category: "Outdoor" },
			{ id: 2, name: "Inflatable Pool", price: 49.99, category: "Outdoor" },
			{ id: 3, name: "Beach Ball", price: 5.99, category: "Beach" },
		]
		useStore.setState({
			products: testProducts
		})
		cy.mount(<ProductGrid />)
		cy.get('.product').should('have.length', testProducts.length)
	})

	// Testfall:
	// visar så många produkter som finns i store
	// visar en specifik produkts namn och pris
})
