/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => (
	<article>
		<div> {product.name} </div>
		<div> {product.price} </div>
		<div> {product.category} </div>
	</article>
)

export default ProductItem
