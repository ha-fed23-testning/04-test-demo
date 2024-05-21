/* eslint-disable no-undef */
// import React from 'react'
import ProductGrid from './ProductGrid'

describe('<ProductGrid />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ProductGrid />)
	})

	// Testfall:
	// visar så många produkter som finns i store
	// visar en specifik produkts namn och pris
})
