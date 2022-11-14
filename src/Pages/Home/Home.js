import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import MakeApointment from '../MakeApointment/MakeApointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <MakeApointment></MakeApointment>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;