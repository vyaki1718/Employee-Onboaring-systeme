import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location=useLocation();
  // console.log(location.state.id)
  const [data, setData] = useState([])
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://localhost:44386/api/User/Get/${location.state.id}`)
      .then((res) => {
        setData(res.data);
        console.log(data)
      });

  }, []);

  const onEdit =(e) => {
    
    setData((prevState) => ({

      ...prevState,

      [e.target.name]: e.target.value,
      

  }));
  
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("handleupdate")
    console.log("Id...", location.state.id);
    const dataN={
      id:data.id,
      UserName:data.UserName,
      EmpName:data.EmpName,
      Designation:data.Designation,
      PhoneNo:data.PhoneNo,
      EmailId:data.EmailId,
      JoiningDate:data.JoiningDate,
      Salary:data.Salary,
      Location:data.Location,
      Password:data.Password
    }
    console.log(dataN)
    axios
      .put(`https://localhost:44386/api/Admin/UpdateEmp`, dataN)
      .then(() => {
        
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
      <div className="mb-3">
          <label className="form-label">ID</label>
          <input
            name="id"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.id}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            name="UserName"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.UserName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Name</label>
          <input
            name="EmpName"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.EmpName}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="EmailId"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={onEdit}
            value={data.EmailId}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            name="Designation"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.Designation}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            name="PhoneNo"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.PhoneNo}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input
            name="JoiningDate"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.JoiningDate}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            name="Salary"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.Salary}

          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            name="Location"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.Location}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="Password"
            type="text"
            className="form-control"
            onChange={onEdit}
            value={data.Password}
          />
        </div>
        

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;