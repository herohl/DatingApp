using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;

        public UsersController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // api/users

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return Ok(await _userRepository.GetUserAsync());
        }

        // api/users/3
        [HttpGet("{username}")]
        public async Task<ActionResult<AppUser>> GetUser(string username)
        {
            return await _userRepository.GetUserByUsernameAsync(username);
        }
    }
}