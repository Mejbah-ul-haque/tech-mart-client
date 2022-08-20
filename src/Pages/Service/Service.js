import React from "react";

const Service = (props) => {
	const {name, subName, author, img, rating, price, position } = props.service;
	return (
		<div className="my-4">
			<div class="card bg-base-100 shadow-xl my-xl">
				<figure>
					<img src={img} />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{subName}
					</h2>
					<p className="text-[#999999]">{author}</p>
					<p className="text-xl font-bold">${price}</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">{name}</div>
						<div class="badge badge-outline">{position}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
