import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://localhost:44386/api/Admin/GetAllEmp")
      .then((res) => {
        setData(res.data);
        // console.log(res.data)
        // console.log(data)
      });
  }
// console.log(data)
  function handleDelete(id) {
    console.log(id)
    axios
      .delete(`https://localhost:44386/api/Admin/DeleteById/${id}`)
      .then(() => {
        getData();
      });
  }
const navigate=useNavigate();
  const onEdit = (id) =>{


    navigate('/update',{state:{id:id}})

  }
  // const setToLocalStorage = (id,UserName,EmpName,Designation,PhoneNo,EmailId,JoiningDate,Salary,Location) => {
  //   // localStorage.setItem("ID", ID);
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("UserName", UserName);
  //   localStorage.setItem("EmpName",EmpName);
  //   localStorage.setItem("Designation",Designation);
  //   localStorage.setItem("PhoneNo",PhoneNo);
  //   localStorage.setItem("EmailId", EmailId);
  //   localStorage.setItem("JoiningDate",JoininDdate);
  //   localStorage.setItem("Salary",Salary);
  //   localStorage.setItem("Location",Location);

  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
     <h1><center>WELCOME TO ADMIN USER</center></h1>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Employee Data</h2>
        <Link to="/create">
          <button className="btn btn-info">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
          
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">EmployeeName</th>
            <th scope="col">Designation</th>
            <th scope="col">PhoneNo</th>
            <th scope="col">Email</th>
            <th scope="col">JoiningDate</th>
            <th scope="col">Salary</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
            <th scope="col"></th>
          </tr>
        </thead>  
      
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td scope="row">{eachData.id}</td>
                  <td>{eachData.UserName}</td>
                  <td>{eachData.EmpName}</td>
                  <td>{eachData.Designation}</td>
                  <td>{eachData.PhoneNo}</td>
                  <td>{eachData.EmailId}</td>
                  <td>{eachData.JoiningDate.substring(0,10)}</td>
                  <td>{eachData.Salary}</td>
                  <td>{eachData.Location}</td>
              
                  <td>
                      <button className="btn btn-success"
                      onClick={() => onEdit(eachData.id)}
                    >
                      Edit
                    </button>
                    
                  </td>
                  <td>
                  <button className="btn btn-warning"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;