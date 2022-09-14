using EpmployeeOnboaringPortal.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EpmployeeOnboaringPortal.Controllers
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController

    {
       SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);

       SqlCommand cmd = null;
        SqlDataAdapter da = null;

       //public IHttpActionResult Get(int id)
       // {
       //     Employee emp = new Employee(id);
       // }





        [HttpPost]
        [Route("Login")]
        public string Login(Employee employee)

        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("User_login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@UserName", employee.UserName);
                da.SelectCommand.Parameters.AddWithValue("@Password", employee.Password);
                DataTable logindata = new DataTable();
                da.Fill(logindata);
                if (logindata.Rows.Count > 0)
                {
                    //return Ok();

                    msg = "user is valid";
                }
                else
                {
                    msg = "invalid user";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;

        }


        //Get By ID
        [HttpGet]
        [Route("Get/{id}")]
        public Employee Get(int id)
        {

            da = new SqlDataAdapter("GetByid", conn);
            da.SelectCommand.CommandType = CommandType.StoredProcedure;
            da.SelectCommand.Parameters.AddWithValue("@Emp_Id", id);
            DataTable idEmpData = new DataTable();
            
            da.Fill(idEmpData);
            Employee emp = new Employee();

            if (idEmpData.Rows.Count > 0)
            {   
                emp.id = Convert.ToInt32(idEmpData.Rows[0]["id"]);
                emp.UserName = idEmpData.Rows[0]["UserName"].ToString();
                emp.EmpName = idEmpData.Rows[0]["EmpName"].ToString();
                emp.Designation = idEmpData.Rows[0]["Designation"].ToString();
                emp.PhoneNo = idEmpData.Rows[0]["PhoneNo"].ToString();
                emp.EmailId = idEmpData.Rows[0]["EmailId"].ToString();
                emp.JoiningDate = Convert.ToDateTime(idEmpData.Rows[0]["joiningDate"]);
                emp.Salary = Convert.ToDecimal(idEmpData.Rows[0]["Salary"]);
                emp.Location = idEmpData.Rows[0]["Location"].ToString();
                emp.Password = idEmpData.Rows[0]["Password"].ToString();

            }
            if (emp != null)
            {
                return emp;
            }
            else
            {
                return null;
            }

        }



        //
        [HttpGet]
        [Route("GetU/{UserName}")]
        public Employee GetU(string UserName)
        {

            Employee emp = new Employee();
            //da = new SqlDataAdapter("GetbyUserName", conn);
             cmd = new SqlCommand("GetbyUserName", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@UserName", UserName);
            conn.Open();
            SqlDataReader dr = cmd.ExecuteReader();



           

            while (dr.Read())
            {
                if (dr.HasRows)
                {
                    emp.id = Convert.ToInt32(dr.GetValue(0));
                    emp.UserName = dr.GetValue(1).ToString();
                    emp.EmpName = dr.GetValue(2).ToString();
                    emp.Designation = dr.GetValue(3).ToString();
                    emp.PhoneNo = dr.GetValue(4).ToString();
                    emp.EmailId = dr.GetValue(5).ToString();
                    emp.JoiningDate = Convert.ToDateTime(dr.GetValue(6));
                    emp.Salary = Convert.ToDecimal(dr.GetValue(7));
                    emp.Location = dr.GetValue(8).ToString();
                    //emp.Password = EmpData.Rows[0]["Password"].ToString();
                }

            }
            conn.Close();
            if (emp != null)
            {
                return emp;
            }
            else
            {
                return null;
            }



        }

        //serch

    





    }
}
