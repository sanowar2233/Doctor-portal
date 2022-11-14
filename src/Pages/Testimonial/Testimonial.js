import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='mt-20'>

            <div >
                <div className='flex justify-between'>
                    <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2>What our patients says</h2>
                    </div>
                    <div>
                        <img  className='w-24 lg:w-48' src={quote} alt="" />
                    </div>
                </div>

            </div>

            <div>

            <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      
    <div className='flex'>
    <button className="btn btn-primary">Accept</button>
    <button className="btn btn-ghost">winson herry</button>
    <button className="btn btn-ghost">lksjflksj</button>
    </div>
    </div>
  </div>
</div>

            </div>
            
        </div>
    );
};

export default Testimonial;