import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {

  const [UserName, setUserName] = useState("");
  const [EmpName, setEmpName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");

  const [EmailId, setEmailId] = useState("");

  const [JoiningDate, setJoiningDate] = useState("");
  const [Salary, setSalary] = useState("");
  const [Location, setLocation] = useState("");
  const [Password, setPassword] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://localhost:44386/api/Admin/Registration", {

        UserName: UserName,
        EmpName: EmpName,
        Designation: Designation,
        PhoneNo: PhoneNo,
        EmailId: EmailId,
        JoiningDate: JoiningDate,
        Salary: Salary,
        Location: Location,
        Password: Password
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>

        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEmpName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PhoneNo</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>
        
       
        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input
            type="text"
            className="form-control" placeholder={"yyyy-mm-dd"}
            onChange={(e) => setJoiningDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pasword</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;