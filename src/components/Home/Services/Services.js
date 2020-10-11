import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Teath from '../../../images/Teath.png';
import ServiceDetail from '../SeviceDetail/ServiceDetail';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teath Whitening',
        img: Teath
    },
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service =>
                            <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;