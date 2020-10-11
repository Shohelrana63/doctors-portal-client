import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
const infoData = [
    {
        title: 'Opnening Hours',
        description: 'We are open 7 hours(10AM - 5PM)',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Dhanmondi8/A, Dhaka',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+148372347',
        icon: faPhone,
        background: 'primary'
    },
]
const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info =>
                        <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;