import React from 'react';
import './Doctors.css'

import doctor1 from '../../images/doctors/doctor1.jpg'
import doctor2 from '../../images/doctors/doctor2.jpg'
import doctor3 from '../../images/doctors/doctor3.jpg'
import doctor4 from '../../images/doctors/doctor4.jpg'
import doctor5 from '../../images/doctors/doctor5.jpg'
import doctor6 from '../../images/doctors/doctor6.jpg'

const Doctors = () => {
    return (
        <>
            <div className='mt-5'>
                <h1>Our Specialist Doctor</h1>
            </div>
            <div className='doctors-container'>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    <div class="col">
                        <div class="card">
                            <img src={doctor1} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mark Arina</h5>
                                <p class="card-text">Cardiologist Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doctor2} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Masudur Rahman</h5>
                                <p class="card-text">Gestro Liver Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doctor3} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Jessia</h5>
                                <p class="card-text">Medicine Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doctor4} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Jeff John</h5>
                                <p class="card-text">
                                    Orthopaedics Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doctor5} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Rakib Hasan</h5>
                                <p class="card-text">Diabetology Specialist.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={doctor6} class="card-img-top doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Tom Smith</h5>
                                <p class="card-text">E.N.T Specialist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Doctors;