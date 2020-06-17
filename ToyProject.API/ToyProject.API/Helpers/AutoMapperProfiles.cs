using AutoMapper;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyProject.API.Dtos;

namespace ToyProject.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<CustomerForAddDto, Customer>();
            CreateMap<CustomerForUpdateDto, Customer>();
        }
    }
}
