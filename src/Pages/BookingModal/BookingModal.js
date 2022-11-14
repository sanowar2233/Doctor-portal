import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, selectedDate ,setTreatment}) => {
    const {name, slots}=treatment
    const date=format(selectedDate, 'PP')

    const handleBooking=event=>{
      event.preventDefault()

      const form =event.target;
      const name=form.name.value;
      const email=form.email.value
      const slots=form.slots.value;
      const date=form.date.value;
     
      // console.log(name,email, slots, date)


      const booking={
        appointmentDate :date,
        name,
        slots,
        email
      }
      console.log(booking)
      setTreatment(null)
    }
    return (
        <div>

<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>


    <form onSubmit={handleBooking}>
    

    <input type="text" name='date'  disabled value={date} className="input w-full max-w-xs" />
    <select className="select select-ghost w-full max-w-xs" name='slots'>
  <option  selected>Pick the best JS framework</option>
  
  {
    slots.map(slot=><option value={slot}>{slot}</option>)
  }
  
</select>
    <input type="text" name='name' placeholder="Type here" className="input w-full max-w-xs" />
    <input type="text" name='email' placeholder="Type here" className="input w-full max-w-xs" />
    <input className='w-full' type="submit" value="submit" />

    </form>


  </div>
</div>
            


        </div>
    );
};

export default BookingModal;