import React from "react";

const Service = (props) => {
	const { subName, author, img, rating, price, position } = props.service;
	return (
		<div>
			<div class="card bg-base-100 shadow-xl">
				<figure>
					<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						Shoes!
						<div class="badge badge-secondary">NEW</div>
					</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">Fashion</div>
						<div class="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
