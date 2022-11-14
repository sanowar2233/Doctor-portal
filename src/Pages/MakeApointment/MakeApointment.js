import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeApointment = () => {
    return (
        <div className=''
        style={{
            background: `url(${appointment})`
        }}>

<div className="hero mt-20 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={doctor} className="hidden lg:block lg:w-1/2 max-w-sm rounded-lg shadow-2xl -mt-32" />
    <div>
      <h1 className="text-5xl  font-bold">Appointment</h1>
      <p className="py-6">Make An Appointment Today</p>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quis, molestiae quos possimus consectetur eligendi provident cumque nobis eum officia modi atque dolorum exercitationem quod rem nulla architecto illo mollitia.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>  
            
        </div>
    );
};

export default MakeApointment;