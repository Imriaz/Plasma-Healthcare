import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    const { serviceId } = useParams();

    // const [departmentDetails, setDepartmentDetails] = useState([]);
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/healthcare.json')
            .then(res => res.json())
            .then(data => {
                const foundService = data.find(service => service.id == serviceId)
                setService(foundService);
                console.log(foundService);
            })
    }, [serviceId]);


    return (
        <div>
            <div>
                <div class="card mx-auto mb-5 mt-5">
                    <img src={service.img} class="details-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-info">{service.name}</h5>
                        <p class="card-text">{service.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;