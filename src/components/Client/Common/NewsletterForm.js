import React from 'react';

const NewsletterForm = () => {
    return (
        <div className="newsletter-area ptb-100">
            <div className="container">
                <div className="row newsletter-wrap align-items-center">
                    <div className="col-lg-6">
                        <div className="newsletter-item">
                            <h2>Join Our Newsletter</h2>
                            <p>Enter your email and get weekly updates to stay healthy!</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="newsletter-item">
                            <div className="newsletter-form">
                                <form className="newsletter-form">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required />

                                    <button className="btn newsletter-btn" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterForm;