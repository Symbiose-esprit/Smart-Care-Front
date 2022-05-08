import React from "react";
import AppointmentFormTwo from "../../../components/Client/Common/AppointmentFormTwo";
import PageBanner from "../../../components//Client/Common/PageBanner";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const DoctorDetails = () => {
  return (
    <>
      <PageBanner
        pageTitle="Dr. Sarah Taylor (Neurosurgeon)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctor Details"
        bgImage="page-title-five"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                  
                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary mb-3">
                    Change Picture
                  </button>
                </div>

                <div className="doctor-details-contact">
                  <h3>Contact info</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-call"></i>
                      Call: +07 554 332 322
                    </li>
                    <li>
                      <i className="icofont-ui-message"></i>
                      hello@disin.com
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      4th Floor, 408 No Chamber
                    </li>
                  </ul>
                </div>

                <div className="doctor-details-work">
                  <h3>Working hours</h3>
                  <div className="appointment-item-two-right">
                    <div className="appointment-item-content">
                      <ul>
                        <li>
                          Monday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Tuesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Wednesday <span>9:00 AM - 8:00 PM</span>
                        </li>
                        <li>
                          Sunday <span>9:00 AM - 8:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>Name</h3>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                    <div className="col-sm-6 col-lg-6 mt-4">
                      <div className="doctor-search-item">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Speciality</label>
                          <select className="form-control">
                            <option>Neurosurgeon</option>
                            <option>Cardiology</option>
                            <option>Pathology</option>
                            <option>Dental Care</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Biography</h3>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_comments"
                        rows="8"
                        placeholder="Your biography..."
                      ></textarea>
                    </div>

                    <p></p>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Education</h3>
                    <Accordion allowZeroExpanded preExpanded={["a"]}>
                      <AccordionItem uuid="a">
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <span>My diplomas and certificates</span>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Diplomas..."
                          />
                          <input
                            type="text"
                            className="form-control mt-3"
                            placeholder="Certificates..."
                          />
                        </AccordionItemPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="doctor-details-biography">
                    <h3>Experience</h3>
                    <textarea
                        className="form-control"
                        id="your_comments"
                        rows="4"
                        placeholder="Your experience..."
                      ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-100">
        <AppointmentFormTwo />
      </div>
    </>
  );
};

export default DoctorDetails;
