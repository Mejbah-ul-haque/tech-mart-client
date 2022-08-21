import React from 'react';

const Kid = (props) => {
  const {name, subName, author, img, rating, price, position } = props.child;
  return (
    <div className="my-4">
			<div className="card bg-base-100 shadow-xl my-xl">
				<figure>
					<img src={img} />
				</figure>
				<div className="card-body">
					<h2 className="text-lg font-bold">
						{subName}
					</h2>
					<p className="text-[#999999]">{author}</p>
					<p className="text-xl font-bold">${price}</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">{name}</div>
						<div className="badge badge-outline">{position}</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Kid;