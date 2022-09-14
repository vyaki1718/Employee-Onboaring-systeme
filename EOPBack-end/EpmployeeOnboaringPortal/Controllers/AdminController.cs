using EpmployeeOnboaringPortal.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EpmployeeOnboaringPortal.Controllers
{
    [RoutePrefix("api/Admin")]
    public class AdminController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);

        SqlCommand cmd = null;
        SqlDataAdapter da = null;

        //Admin Login
        [HttpPost]
        [Route("Login")]
        public string Login(Admin admin)

        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("LoginAdmin", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@UserName", admin.UserName);
                da.SelectCommand.Parameters.AddWithValue("@Password", admin.Password);
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

        [HttpGet]
        [Route("GetAllEmp")]

        public List<Employee> GetAllEmp()
        {
           
            da = new SqlDataAdapter("GetAllEmp", conn);
            DataTable EmpData = new DataTable();
            da.Fill(EmpData);
            List<Employee> listemployee = new List<Employee>();
            if (EmpData.Rows.Count > 0)
            {
                for(int i=0; i<EmpData.Rows.Count; i++)
                {
                    Employee emp = new Employee();
                    emp.id = Convert.ToInt32(EmpData.Rows[i]["id"]);
                    emp.UserName = EmpData.Rows[i]["UserName"].ToString();
                    emp.EmpName = EmpData.Rows[i]["EmpName"].ToString();
                    emp.Designation = EmpData.Rows[i]["Designation"].ToString();
                    emp.PhoneNo = EmpData.Rows[i]["PhoneNo"].ToString();
                    emp.EmailId = EmpData.Rows[i]["EmailId"].ToString();
                    emp.JoiningDate = Convert.ToDateTime(EmpData.Rows[i]["JoiningDate"]);
                    emp.Salary = Convert.ToDecimal(EmpData.Rows[i]["Salary"]);
                    emp.Location= EmpData.Rows[i]["Location"].ToString();
                    //emp.Password = EmpData.Rows[i]["Password"].ToString();
                    listemployee.Add(emp);
                }

            }
            if (listemployee.Count > 0)
            {
                return listemployee;
            }
            else
            {
                return null;
            }

        }

        [HttpPost]
        [Route("Registration")]


        public string Registration(Employee employee)
        {
            string msg = string.Empty;
            try

            {

                cmd = new SqlCommand("Emp_Registration", conn);
                cmd.CommandType = CommandType .StoredProcedure;
                //cmd.Parameters.AddWithValue("@id", employee.id);
                cmd.Parameters.AddWithValue("@UserName", employee.UserName);
                cmd.Parameters.AddWithValue("@EmpName", employee.EmpName);
                cmd.Parameters.AddWithValue("@Designation", employee.Designation);
                cmd.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                cmd.Parameters.AddWithValue("@EmailId", employee.EmailId);
                cmd.Parameters.AddWithValue("@JoiningDate", employee.JoiningDate);
                cmd.Parameters.AddWithValue("@Salary", employee.Salary);
                cmd.Parameters.AddWithValue("@Location", employee.Location);
                cmd.Parameters.AddWithValue("@Password", employee.Password);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data Inserted";
                }
                else
                {
                    msg = "Erro";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;

        }


        //update Employee
        [HttpPut]
        [Route("UpdateEmp")]
        public string UpdateEmp([FromBody] Employee employee)
        {
            string msg = string.Empty;
            try

            {

                cmd = new SqlCommand("Emp_Update", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Emp_Id", employee.id);
                cmd.Parameters.AddWithValue("@UserName", employee.UserName);
                cmd.Parameters.AddWithValue("@EmpName", employee.EmpName);
                cmd.Parameters.AddWithValue("@Designation", employee.Designation);
                cmd.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                cmd.Parameters.AddWithValue("@EmailId", employee.EmailId);
                cmd.Parameters.AddWithValue("@JoiningDate", employee.JoiningDate);
                cmd.Parameters.AddWithValue("@Salary", employee.Salary);
                cmd.Parameters.AddWithValue("@Location", employee.Location);
                cmd.Parameters.AddWithValue("@Password", employee.Password);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data Inserted";
                }
                else
                {
                    msg = "Error";
                }
            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;
           // return "update successfully";

        }

        

      

        //delete emp
        [HttpDelete]
        [Route("DeleteById/{id}")]

        public IHttpActionResult DeleteById(int id)
        {
           
           
            string query=  "Delete from Employee where id=" + id +"";
            cmd = new SqlCommand(query,conn);
            cmd.CommandType = CommandType.Text;
            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();
            if (i > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        //paging

        [HttpPost]
        [Route("GetEmpPage")]

        public List<Employee> GetEmpPage([FromBody] Employee employee)
        {

            //da = new SqlDataAdapter("Emp_GetAllEmployee", conn);
            cmd = new SqlCommand("Emp_GetAllEmployee", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@page", employee.page);
            cmd.Parameters.AddWithValue("@size", employee.size);
            cmd.Parameters.AddWithValue("@sort", employee.sort);
            cmd.Parameters.AddWithValue("@search", employee.search);
            da = new SqlDataAdapter(cmd);
            DataTable EmpData = new DataTable();
            da.Fill(EmpData);
            List<Employee> listemployee = new List<Employee>();
            if (EmpData.Rows.Count > 0)
            {
                for (int i = 0; i < EmpData.Rows.Count; i++)
                {
                    Employee emp = new Employee();
                    emp.id = Convert.ToInt32(EmpData.Rows[i]["id"]);
                    emp.UserName = EmpData.Rows[i]["UserName"].ToString();
                    emp.EmpName = EmpData.Rows[i]["UserName"].ToString();
                    emp.Designation = EmpData.Rows[i]["UserName"].ToString();
                    emp.PhoneNo = EmpData.Rows[i]["UserName"].ToString();
                    emp.EmailId = EmpData.Rows[i]["UserName"].ToString();
                    emp.JoiningDate = Convert.ToDateTime(EmpData.Rows[i]["joiningDate"]);
                    emp.Salary = Convert.ToDecimal(EmpData.Rows[i]["Salary"]);
                    emp.Location = EmpData.Rows[i]["Location"].ToString();
                    //emp.Password = EmpData.Rows[i]["Password"].ToString();
                    listemployee.Add(emp);
                }

            }
            if (listemployee.Count > 0)
            {
                return listemployee;
            }
            else
            {
                return null;
            }

        }


    }
}
