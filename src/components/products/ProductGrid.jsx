import ProductItem from "./ProductItem"


const ProductGrid = () => {
	const products = []  // TODO: hämta från zustand

	return (
		<div className="product-grid">
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductGrid
