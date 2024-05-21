/* eslint-disable no-undef */
// import React from 'react'
import ProductGrid from './ProductGrid'

describe('<ProductGrid />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<ProductGrid />)
	})
})
