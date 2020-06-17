using Business.Abstract;
using DataAccess.Abstract;
using Entity.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class CustomerManager : ICustomerService
    {
        private ICustomerDal _customerDal;
        public CustomerManager(ICustomerDal customerDal)
        {
            _customerDal = customerDal;
        }
         
        public async Task AddAsync(Customer customer)
        {
            await _customerDal.AddAsync(customer);
        }

        public async Task DeleteAsync(int customerId)
        {
            await _customerDal.DeleteAsync(new Customer { Id = customerId });
        }

        public async Task<List<Customer>> GetAllAsync()
        {
            return await _customerDal.GetListAsync();
        }

        public async Task<Customer> GetCustomerByCustomerIdAsync(int customerId)
        {
            return await _customerDal.GetAsync(c => c.Id == customerId);
        }

        public async Task UpdateAsync(Customer customer)
        {
            await _customerDal.UpdateAsync(customer);
        }
    }
}
