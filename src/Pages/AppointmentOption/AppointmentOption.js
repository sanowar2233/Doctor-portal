import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, slots}=option
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{slots.length > 0 ? slots[0]:'try another day'}</p>
    <p > {slots.length}{slots.length > 1 ? 'spaces' : 'space'} Available</p>
    <div className="card-actions justify-center">
      
      <label 
      disabled={slots.length === 0}
      htmlFor="booking-modal" className="btn"
      onClick={()=>setTreatment(option)}
      >Book Appointment</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentOption;