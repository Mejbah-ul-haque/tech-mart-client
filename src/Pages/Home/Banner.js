import React from "react";

const Banner = () => {
	return (
		<div>
			<div class="hero lg:my-20">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img
						src="https://i.ibb.co/Cm3pvPd/coding-and-testing-programming-of-software.jpg"
						class="lg:max-w-xl rounded-lg shadow-2xl"
					/>
					<div class="text-center lg:text-left">
						<h1 class="text-5xl font-bold">You Learn Code?</h1>
						<p class="py-6">
            If you want to learn coding and make yourself proficient, then don't delay and start now. Tech Mart has many courses for you. First, set your goals. Then find the course of your choice and start working. thank you
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
