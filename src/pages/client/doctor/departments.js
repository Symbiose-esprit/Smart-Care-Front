import { useDispatch } from 'react-redux';
import ReactSelect, { components } from "react-select";
import PageBanner from '../../../components/Client/Common/PageBanner';
import { predictDisease } from '../../../components/features/User/DiseaseSlice';
import { data } from '../../../data';

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

    let optionSelected = [];
    let symptoms = []

    const handleChange = (selected) => {
        optionSelected = selected
    };
    const handleInputChange = (selected) => {

        optionSelected = selected
        console.log("this is optionSelected : " + JSON.stringify(optionSelected))
        Object.keys(optionSelected).map(key => {
            console.log(optionSelected[key].value)
            symptoms = [...symptoms, optionSelected[key].value];

        })
        console.log("symptoms : " + symptoms)
    };


    // redux actions
    const dispatch = useDispatch();
    console.log("symptoms : " + symptoms)
    const predict = (data) => {
        // JSON.stringify(symptoms)
        data = {
            symptoms: symptoms.toString()
        }
        console.log(data);
        dispatch(predictDisease(data));
    }

    return (
        <>
            <PageBanner
                pageTitle="Departments"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Departments"
                bgImage="page-title-one"
            />



            <div className="departments-area pt-100 pb-70">
                <div className="container">
                    <div className="col-lg-6">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />
                            <h2>Select your symptoms</h2>
                            <p>Select what symptoms you may have right now from our list and we will provide an estimate of what illness you may have  </p>

                        </div>
                    </div>
                    <span
                        classname="d-inline-block"
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
                                Option
                            }}
                            onChange={handleInputChange}
                            onInputChange={handleChange()}
                            // onMenuClose={predictDisease}
                            allowSelectAll={true}
                            value={optionSelected}
                        />
                    </span>
                    <div classname='center'>
                        <button onClick={predict} type="button" className="btn btn-primary">
                            Predict
                        </button>
                    </div>
                </div>
            </div>



            {/* <div className="departments-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-tooth"></i>
                                <h3>Dental Care</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-baby"></i>
                                <h3>Baby Care</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-laboratory"></i>
                                <h3>Laboratory</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-icu"></i>
                                <h3>ICU</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-dna-alt-2"></i>
                                <h3>DNA Test</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-surgeon"></i>
                                <h3>Surgeon</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-xray"></i>
                                <h3>X-ray</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-blood-test"></i>
                                <h3>Blood Test</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-ambulance-crescent"></i>
                                <h3>Ambulance Service</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default Departments;