import { useDispatch } from "react-redux";
import ReactSelect, { components } from "react-select";
import PageBanner from "../../../components/Client/Common/PageBanner";
import { predictDisease } from "../../../components/features/User/DiseaseSlice";
import { data } from "../../../data";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect, useState } from "react";
import { ListDoctors } from "../../../components/features/User/AdminSlice";
import Link from "next/link";

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

const Departments = () => {
    const [showDisease, setshowDisease] = useState(false);
    const DiseaseHandler = () => {
        setshowDisease(true);
    };

    let optionSelected = [];
    let symptoms = [];

    const handleChange = (selected) => {
        optionSelected = selected;
    };
    const handleInputChange = (selected) => {
        optionSelected = selected;
        console.log("this is optionSelected : " + JSON.stringify(optionSelected));
        Object.keys(optionSelected).map((key) => {
            console.log(optionSelected[key].value);
            const t = JSON.stringify(optionSelected[key].value);
            console.log(t);
            symptoms = [...symptoms, optionSelected[key].value];
        });
        console.log("symptoms : " + JSON.stringify(symptoms));
    };

    let disease;
    const [scraping, setscraping] = useState();
    const [scrape, setscrape] = useState();

    const med_article = () => {
        const data = import(`../../../scraping/${disease}.json`).then(
            (response) => {
                console.log(response.content);
                setscrape(response.content);
            }
        );
    };

    //doctors
    const [doctors, setDoctors] = useState([]);

    const getDoctors = () => {
        dispatch(ListDoctors()).then((response) => {
            console.log(response.payload.data.doctor);
            // doctors = response.payload.data.doctor
            setDoctors(response.payload.data.doctor);
        });
    };

    //
    // redux actions
    const dispatch = useDispatch();
    console.log("symptoms : " + symptoms);
    const predict = async (data) => {
        // JSON.stringify(symptoms)
        data = {
            symptoms: symptoms.toString(),
        };
        console.log("this is data : " + data);
        dispatch(predictDisease(data)).then((response) => {
            disease = response.payload.diseasename;
            setscraping(response.payload.diseasename);
            console.log("disease for scraping : " + disease);
            med_article();
            getDoctors();
        });
        DiseaseHandler();
    };

    return (
        <>
            <>
                <PageBanner
                    pageTitle="Symptoms Prediction"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Symptoms Prediction"
                    bgImage="page-title-one"
                />

                <div className="signup-area ptb-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="pl-0 col-lg-6">
                                <div className="login-left">
                                    <img src="" />
                                </div>
                            </div>

                            <div className="col-lg-6 ptb-100">
                                <div className="signup-item">
                                    <div className="signup-head">
                                        <h2>Select your symptoms</h2>
                                        <p>
                                            Select what symptoms you may have right now from our list
                                            and we will provide an estimate of what illness you may
                                            have{" "}
                                        </p>
                                    </div>
                                    <div className="signup-form">
                                        <span
                                            classame="d-inline-block"
                                            data-toggle="popover"
                                            data-trigger="focus"
                                            data-content="Select Symptoms"
                                        >
                                            <ReactSelect
                                                options={data}
                                                isMulti
                                                closeMenuOnSelect={false}
                                                hideSelectedOptions={false}
                                                components={{
                                                    Option,
                                                }}
                                                onChange={handleInputChange}
                                                onInputChange={handleChange()}
                                                // onMenuClose={predictDisease}
                                                allowSelectAll={true}
                                                value={optionSelected}
                                            />
                                        </span>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <div className=""></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-1 ">
                                            <div className="text-center ">
                                                <button
                                                    onClick={predict}
                                                    type="button"
                                                    className="btn btn-primary"
                                                >
                                                    Predict
                                                </button>
                                            </div>
                                        </div>

                                        {showDisease ? (
                                            <div className="mt-4 col-lg-12">
                                                <div className="form-group">
                                                    <div>
                                                        <h6> Your Disease may be : {scraping} </h6>
                                                        <ProgressBar animated now={40} />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                        {showDisease ? (
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="signup-head">
                                                        <h3>{scraping}</h3>
                                                        <p>{scrape}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                        {showDisease ? (
                                            <div className="signup-head">
                                                <h2>These doctors are most adequate to help you :</h2>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}

                                        <div className="container">
                                            <div className="row justify-content-center">
                                                {doctors.map((doctor) => (
                                                    <div className="col-sm-6 col-lg-4">
                                                        <div className="doctor-item">
                                                            <div className="doctor-top">
                                                                <img
                                                                    src={"/images/doctors/" + doctor.img}
                                                                    alt="Doctor"
                                                                />

                                                                <Link href="/appointment">
                                                                    <a>Get Appointment</a>
                                                                </Link>
                                                            </div>
                                                            <div className="doctor-bottom">
                                                                <h3>
                                                                    <Link href="/doctor-details">
                                                                        <a>Dr. {doctor.lastname}</a>
                                                                    </Link>
                                                                </h3>
                                                                <span>{doctor.specialty}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default Departments;
