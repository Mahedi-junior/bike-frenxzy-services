import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Home/Service/Service';

const About = () => {
    const [services, setServices] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h2>This is about</h2>
            <h1 className='services-title mt-5 mb-5'>Our All Services</h1>

            <div className='services-container '>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default About;