import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id='services' className='container mb-5'>
            <h1 className='services-title mt-5 mb-5'>Our Services</h1>

            <div className='services-container '>
                {
                    services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>

            <button onClick={() => navigate('/about')} className='btn btn-danger text-center mt-5 p-2'>All Services</button>

        </div>
    );
};

export default Services;