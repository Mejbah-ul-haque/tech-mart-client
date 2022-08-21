import React from "react";

const Kids = () => {
	return (
		<div className="container mx-auto my-20">
			<h2 className='text-3xl font-bold my-8'>Tutorial of <span className='text-red-500'>Kids Coding</span></h2>
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ibb.co/hZxyrkr/4-benefits-learning-programming-at-a-young-age.webp"
						className="max-w-xl rounded-lg shadow-2xl"
					/>
					<div className="text-center lg:text-left">
						<h1 className="text-3xl font-bold">Programming for Kids</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button className="btn btn-accent">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Kids;
