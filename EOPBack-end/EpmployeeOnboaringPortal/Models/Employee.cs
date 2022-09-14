using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EpmployeeOnboaringPortal.Models
{
    public class Employee
    {
        
       public int id { get; set; }
        public string UserName { get; set; }
        public string EmpName { get; set; }
        public string Designation { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime JoiningDate { get; set; }

        public decimal Salary { get; set; }
        public string Location { get; set; }
        public string Password { get; set; }

        public int page { get; set; }
        public int size { get; set; }
        public string sort { get; set; }
        public string search { get; set; }
    }
}