using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EpmployeeOnboaringPortal.Models
{
    public class EmployeePaging
    {

        public List<Employee> Employee { get; set; }
        public string SearchTerm { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int RecordCount { get; set; }
    }
}