import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserDashBoard = (props) => {
    const [appuser, setAppUser] = useState({});
    const location = useLocation();



    useEffect(() => {
        axios.get(`https://localhost:44386/api/User/GetU/${location.state.UserName}`)
            .then((res) => {
                setAppUser(res.data);
                console.log(res.data);

            })
            .catch((err) => {
                alert("Data not found")
                console.log(err.message)
            })

    }, [])


    //setuserName("mayur")
    const { id, UserName, EmpName, Designation, PhoneNo, EmailId, JoiningDate, Salary, Location } = appuser;
    // const handleInput = (evt) => {
    //    setUid(evt.target.value)
    // }


    return (
        <>
            <div class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand"></a>
                <form class="form-inline">
                    <Link to="/">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Home</button>
                    </Link>
                </form>
            </div>



            <div className="container bootstrap snippets bootdey">
                <div className="panel-body inf-content">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="" swidth="600px;" title="" className="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" />

                        </div>
                        <div className="col-md-6">
                            <strong>Information</strong>
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                                    Employee ID
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-user  text-primary"></span>
                                                    UserName
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {UserName}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-cloud text-primary"></span>
                                                    Name
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {EmpName}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-bookmark text-primary"></span>
                                                    Designation
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {Designation}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-eye-open text-primary"></span>
                                                    Phone No
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {PhoneNo}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-envelope text-primary"></span>
                                                    Email
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {EmailId}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                    Joining Date
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {JoiningDate}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                    Salary
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {Salary}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>
                                                    <span className="glyphicon glyphicon-calendar text-primary"></span>
                                                    Location
                           </strong>
                                            </td>
                                            <td className="text-primary">
                                                {Location}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
       .inf-content{
           border:1px solid #DDDDDD;
           -webkit-border-radius:10px;
           -moz-border-radius:10px;
           border-radius:10px;
           box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
           margin-top: 50px;
       }		
       `}
            </style>

            <div className="col-4">
                <form className="form form-group form-danger">
                    {/* <input className="form-control mt-3" type="number" id="uid" name="uid" 
                           onChange={handleInput} placeholder="Enter your uid"></input> */}

                    {/* <input type="text"  ></input> */}
                    {/* <input className="form-control mt-3" type="submit" id="submit" name="submit" value="submit"
                           onClick={submitGetUserById}></input> */}
                </form></div>
        </>
    )
}

export default UserDashBoard;