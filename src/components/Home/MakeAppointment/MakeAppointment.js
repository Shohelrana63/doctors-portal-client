import React from 'react';
import doctor from '../../../images/Doctor.png';
import './MakeAppointment.css';


const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 py-5 text-white">
                        <h5 className="text-primary text-uppercase">appointment</h5>
                        <h1 className=" my-4">Make an appointment Today</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sed ratione blanditiis illo! Quam, est officia accusantium voluptatem excepturi ipsum illo a?</p>
                        <button className="btn btn-primary my-4">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;