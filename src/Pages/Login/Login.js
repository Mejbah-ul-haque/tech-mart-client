import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import {
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	let signInError;
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	if (loading || gLoading) {
		return <button className="btn loading">loading</button>;
	}

	if (error || gError) {
		signInError = (
			<p className="text-red-600">{error?.message || gError?.message}</p>
		);
	}

	if (user || gUser) {
		navigate(from, { replace: true });
	}

	const onSubmit = (data) => {
		console.log(data);
		signInWithEmailAndPassword(data.email, data.password);
	};

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-2xl font-bold">Login</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="Your Email"
								className="input input-bordered w-full max-w-xs"
								{...register("email", {
									required: {
										value: true,
										message: "Email is required",
									},
									pattern: {
										value: /[A-Za-z]{3}/,
										message: "Provide a valid email address",
									},
								})}
							/>
							<label className="label">
								{errors.email?.type === "required" && (
									<span className="label-text-alt text-red-600">
										{errors.email.message}
									</span>
								)}
								{errors.email?.type === "pattern" && (
									<span className="label-text-alt text-red-600">
										{errors.email.message}
									</span>
								)}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="Your Password"
								className="input input-bordered w-full max-w-xs"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required",
									},
									minLength: {
										value: 6,
										message: "Must be 6 character or longer!",
									},
								})}
							/>
							<label className="label">
								{errors.password?.type === "required" && (
									<span className="label-text-alt text-red-600">
										{errors.password.message}
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className="label-text-alt text-red-600">
										{errors.password.message}
									</span>
								)}
							</label>
						</div>

						{signInError}
						<input
							className="btn w-full max-w-xs"
							type="submit"
							value="Login"
						/>
					</form>
					<p>
						New to Tech Mart{" "}
						<Link className="text-blue-500" to="/register">
							Create New Account?
						</Link>
					</p>
					<div className="divider">OR</div>
					<button
						onClick={() => signInWithGoogle()}
						className="btn btn-outline"
					>
						Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
