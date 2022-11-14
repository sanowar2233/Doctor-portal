
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';




const Login = () => {
    const{signIn}=useContext(AuthContext)

    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        
 signIn(email,password)
 .then(result=>{
     const user =result.user;
     console.log(user)
     form.reset();
     
 })
 .catch(error=>console.log(error))


       
        

        const data={
            email:email,
            password:password
           
        }
        console.log(data)

    }

  

    return (
        <div>
           <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
        <input className='btn btn-accent w-full' value="Login" type="submit" />
        </div>
      </div>
    </div>
  </div>
</form>

            
        </div>
    );
};

export default Login;