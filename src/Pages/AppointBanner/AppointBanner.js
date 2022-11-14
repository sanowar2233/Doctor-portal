import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header className='mt-10'>

                <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                <DayPicker 
                mode='single'
                selected={selectedDate}
                onDayClick={setSelectedDate}
                />
                <p>you have selected date {format(selectedDate, 'PP')} </p>
                </div>
                    
                </div>
                
                </div>

                

        </header>
    );
};

export default AppointBanner;