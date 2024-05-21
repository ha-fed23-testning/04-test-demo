import ProductItem from "./ProductItem"
import { useStore } from '../../data/store.js'

const ProductGrid = () => {
	const products = useStore(state => state.products)

	return (
		<div className="product-grid">
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductGrid
