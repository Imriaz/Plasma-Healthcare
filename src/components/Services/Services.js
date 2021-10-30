import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('healthcare.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <>
            <div>
                <h2 className='text-primary mt-5'>Our Services</h2>
            </div>
            <div className='services-container' id='services'>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;