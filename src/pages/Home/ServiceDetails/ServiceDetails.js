import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>Welcome to Service Details: {serviceId}</h2>

            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>


        </div>

    );
};

export default ServiceDetails;