import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Register = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
  const navigate = useNavigate();
  
  let signInError;
  
  if(loading || gLoading || updating){
    return <button className="btn loading">loading</button>
  }
  
  if(error || gError || updateError){
    signInError = <p className="text-red-600">{error?.message || gError?.message || updateError?.message}</p>
  }

	if (user || gUser) {
		console.log(user || gUser);
	}

	const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('update done');
    navigate('/')
	};
  return (
    <div className="h-screen flex justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-2xl font-bold">Register</h2>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="Your Name"
								className="input input-bordered w-full max-w-xs"
								{...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  }
                })}
							/>
							<label className="label">
              {errors.name?.type === "required" && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
								
							</label>
						</div>
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
              {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
								
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
              {errors.password?.type === "required" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
								
							</label>
						</div>
						
            {signInError}
						<input className="btn w-full max-w-xs" type="submit" value="Register" />
					</form>
          <p>Already have an Account? <Link className="text-blue-500" to="/login">Please Login</Link></p>
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

export default Register;