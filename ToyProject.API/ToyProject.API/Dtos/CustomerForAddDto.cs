using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToyProject.API.Dtos
{
    public class CustomerForAddDto
    {
        public int CustomerId { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string EMail { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
    }
}
