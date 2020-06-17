using Core.Entity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entity.Concrete
{
    public class Customer : IEntity
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string EMail { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
    }
}
