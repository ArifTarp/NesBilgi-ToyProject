using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Business.Abstract;
using Entity.Concrete;
using Microsoft.AspNetCore.Mvc;
using ToyProject.API.Dtos;

namespace ToyProject.API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;
        public CustomersController(ICustomerService customerService, IMapper mapper)
        {
            _customerService = customerService;
            _mapper = mapper;
        }

        [Route("getCustomers")]
        [HttpGet]
        public async Task<IActionResult> GetCustomers()
        {
            var customers = await _customerService.GetAllAsync();

            return Ok(customers);
        }

        [Route("addCustomer")]
        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody]CustomerForAddDto customerForAddDto)
        {
            var customer = _mapper.Map<Customer>(customerForAddDto);

            await _customerService.AddAsync(customer);

            return Ok();
        }

        [Route("updateCustomer")]
        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromBody]CustomerForUpdateDto customerForUpdateDto)
        {
            var customer = _mapper.Map<Customer>(customerForUpdateDto);

            await _customerService.UpdateAsync(customer);

            return Ok();
        }

        [Route("getCustomer")]
        [HttpGet]
        public async Task<IActionResult> GetCustomer(int customerId)
        {
            var customer = await _customerService.GetCustomerByCustomerIdAsync(customerId);

            return Json(customer);
        }

        [Route("deleteCustomer")]
        [HttpDelete]
        public async Task<IActionResult> DeleteCustomer(int customerId)
        {
            await _customerService.DeleteAsync(customerId);

            return Ok();
        }
    }
}