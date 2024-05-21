/* eslint-disable no-undef */
import ProductItem from './ProductItem'

describe('<ProductItem />', () => {
	it('renders', () => {
		const testData = { id: 1, name: 'Beach ball', price: 20, category: 'Beach' }
		cy.mount(<ProductItem product={testData} />)
	})
})