import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {

    const {createUser, updateUser}=useContext(AuthContext)
    const [signUpError,setSignUpError]=useState()

    const handleSign=event=>{
        event.preventDefault()
        const form=event.target;
        const name =form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();

            toast('user created successfully')

            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=>console.error(err))
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        })

        

        const data={
            name:name,
            email:email,
            password:password
           
        }
        console.log(data)
        signUpError('')

       
    }


    return (
        <div>
              <form onSubmit={handleSign} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name'  placeholder="Your Name" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label" >
            <span className="label-text" >Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className='btn btn-accent w-full' value="Sign up" type="submit" />
        {signUpError && <p>{signUpError}</p>}
        </div>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default Register;