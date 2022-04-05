import "./newDoctor.css"
import {
    Publish,
  } from "@material-ui/icons";
export default function NewDoctor() {
  return (
   <div className="newDoctor">
       
        <form className="doctorUpdateForm">
            
            <div className="doctorUpdateLeft">
              <div className="doctorUpdateItem">
                <label>Doctor name: </label>
                <input
                  type="text"
                  placeholder="aziz xyz"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>CIN:</label>
                <input
                  type="text"
                  placeholder="12345678"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Email:</label>
                <input
                  type="text"
                  placeholder="azizdoc@gmail.com"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+216 123 456 67"
                  className="doctorUpdateInput"
                />
              </div>
              <div className="doctorUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Ariana | Tunis"
                  className="doctorUpdateInput"
                />
              </div>
            </div>
            <div className="doctorUpdateRight">
              <div className="doctorUpdateUpload">
                <img
                  className="doctorUpdateImg"
                  src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="doctorUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="doctorUpdateButton">Update</button>
            </div>
          </form>
        </div>
            

  
  );
}
