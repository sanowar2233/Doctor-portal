import { data } from 'autoprefixer';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentOption, setappointmentOptions]=useState([])
    const [treatment, setTreatment]=useState(null)

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setappointmentOptions(data))
    },[])
    return (
        <div className='mt-10'>
            <p className='text-center text-primary'>Available Appointment on , 2022 {format(selectedDate, 'PP')} </p>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                  {
                    appointmentOption.map(option=><AppointmentOption key={option._id}option={option} setTreatment={setTreatment}></AppointmentOption>)
                  }
            </div>
            { 
            treatment &&
                <BookingModal 
                treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}>
    
                </BookingModal>
            }

        </div>
    );
};

export default AvailableAppointment;