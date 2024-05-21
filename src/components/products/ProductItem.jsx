/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => (
	<article className="product">
		<div> {product.name} </div>
		<div> {product.price} </div>
		<div> {product.category} </div>
	</article>
)

export default ProductItem
