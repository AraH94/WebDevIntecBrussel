import React from 'react';
import './style/Product.css';


function Product({ id, title, image, price, rating }) {
	return (
		<div className="product">
			<p>{title}</p>
			<p className="product__">
				<small>$</small>
				<strong>{price}</strong>
			</p>
			<div className="product__racting">
				{
					Array(rating)
						.fill()
						.map((_) => (
							<p> ⭐</p>
						))
				}
			</div>
		</div>
	)
}

export default Product;
