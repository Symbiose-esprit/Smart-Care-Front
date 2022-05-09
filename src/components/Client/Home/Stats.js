import React from 'react';

const Stats = () => {
    return (
        <div className="counter-area">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-patient-bed"></i>
                            <h3 className="counter">129</h3>
                            <p>Country Uses</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-people"></i>
                            <h3><span className="counter">+25000</span>+</h3>
                            <p>Happy Patients</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-doctor-alt"></i>
                            <h3 className="counter">7500</h3>
                            <p>Doctors </p>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-badge"></i>
                            <h3 className="counter">5</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;