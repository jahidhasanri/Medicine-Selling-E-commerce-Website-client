import React from 'react';
import Slider from '../Components/Slider';
import { Helmet } from 'react-helmet';
import Category from '../Components/Category';
import Discount from '../Components/Discount';
import HealthTips from '../Components/HelathTips';
import Testimonials from '../Components/Testimonials';
import Newsletter from '../Components/Newsletter';
import ContactSupport from '../Components/ContactSupport';
import Faqs from '../Components/Faqs';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediCard | Home</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <Discount></Discount>
            <Newsletter></Newsletter>
            <HealthTips></HealthTips>
            <Testimonials></Testimonials>
            <ContactSupport></ContactSupport>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;