import React, { useState } from 'react';
import expert1 from '../../../image/experts/expert-1.jpg';
import expert2 from '../../../image/experts/expert-2.jpg';
import expert3 from '../../../image/experts/expert-3.jpg';
import expert4 from '../../../image/experts/expert-4.jpg';
import expert5 from '../../../image/experts/expert-5.jpg';
import expert6 from '../../../image/experts/car.jpg';
// import expert6 from '../../../image/experts/expert-6.jpg';
import Expert from '../Expert/Expert';


const Experts = () => {
    const experts = [
        { id: 1, name: 'Will Smith', img: expert1 },
        { id: 2, name: 'Chris Rock', img: expert2 },
        { id: 3, name: 'Dwayne Rock', img: expert3 },
        { id: 4, name: 'Messi King', img: expert4 },
        { id: 5, name: 'Stachy Jhonson', img: expert5 },
        { id: 6, name: 'Abin Jhonson', img: expert6 },
    ]
    return (
        <div id='experts' className='container'>
            <h2 className='text-center '>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;