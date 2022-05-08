import { Publish } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CreateDoctor } from "../../../components/features/User/AdminSlice";

export default function NewDoctor() {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(CreateDoctor(data));
  };

  const { register, errors, handleSubmit } = useForm();
  return (
    <div className="newDoctor">
      <form
        className="doctorUpdateForm"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <div className="doctorUpdateLeft">
          <div className="doctorUpdateItem">
          <label>Name: </label>
            <input
              type="text"
              name="name"
              className="doctorUpdateInput"
              placeholder="First Name"
              {...register("name")}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
          <label>Last Name: </label>
            <input
              type="text"
              name="lastname"
              className="doctorUpdateInput"
              placeholder="Last Name"
              {...register("lastname")}
            />
          </div>
          <div className="doctorUpdateItem">
          <label>Email: </label>
            <input
              type="email"
              name="email"
              className="doctorUpdateInput"
              placeholder="Your Email"
              {...register("email")}
            />
          </div>

          <div className="doctorUpdateItem">
          <label>Password: </label>
            <input
              type="password"
              name="password"
              className="doctorUpdateInput"
              placeholder="Password"
              {...register("password")}
              
            />
          </div>

          <div className="doctorUpdateItem">
            <label>Specialty: </label>
            <input
              type="text"
              placeholder="Specialty"
              {...register("specialty")}
              className="doctorUpdateInput"
            />
          </div>
          <div className="doctorUpdateItem">
            <label>Office Address:</label>
            <input
              type="text"
              placeholder="Office Address"
              {...register("office_address")}
              className="doctorUpdateInput"
            />
          </div>
          {/* <div className="doctorUpdateItem">
            <label>Login:</label>
            <input
              type="text"
              placeholder="Login" {...register("login")} onInput={({ target }) => setLogin(target.value)}
              className="doctorUpdateInput"
            />
          </div>
          <div className="doctorUpdateItem">
            <label>Password</label>
            <input
              type="text"
              placeholder="Password" {...register("name")} onInput={({ target }) => setPassword(target.value)}
              className="doctorUpdateInput"
            />
          </div>
          <div className="doctorUpdateItem">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email" {...register("name")} onInput={({ target }) => setEmail(target.value)}
              className="doctorUpdateInput"
            />
          </div>
          <div className="doctorUpdateItem">
            <label>Sex</label>
            <input
              type="text"
              placeholder="Sex" {...register("sex")} onInput={({ target }) => setSex(target.value)}
              className="doctorUpdateInput"
            />
          </div>
          <div className="doctorUpdateItem">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address" {...register("address")} onInput={({ target }) => setAddress(target.value)}
              className="doctorUpdateInput"
            />
          </div> */}
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
