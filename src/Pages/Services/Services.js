import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <h1 className='text-center text-5xl mt-5'>Our services</h1>
            <h1 className='text-center text-2xl mt-3'>Services we Provide</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={fluoride} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Fluoride Treatment</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>



<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cavity} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cavity Filling</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>



<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={whitening} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Teeth whitening</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>

            </div>


            
        </div>
    );
};

export default Services;