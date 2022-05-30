import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate()

    const handleServiceDetails = (id) => {
        navigate(`service/${id}`)
    }


    return (
        <div className='service-container '>
            <img className='w-100' src={img} alt="" />
            <h2>{service.name}</h2>
            <h4>Price: {price}</h4>
            <p>{description}</p>
            <button onClick={() => handleServiceDetails(id)} className='btn btn-primary'>Book {name}</button>
        </div>
    );
};

export default Service;