using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BooksApi.DB;

namespace BooksApi.Controllers
{
    public class usersController : ControllerBase
    {
        public usersController()
        {

        }

        [HttpGet("users")]
        public async Task <IActionResult> getUsers()
        {
            var list = new Database().getUsers();
            return Ok(list);
        }

        [HttpGet("authors")]
        public async Task<IActionResult> getAuthors()
        {
            var list = new Database().getAuthors();
            return Ok(list);
        }

        [HttpGet("books")]
        public async Task<IActionResult> getBooks()
        {
            var list = new Database().getBooks();
            return Ok(list);
        }

        [HttpGet("isUser")]
        public async Task<IActionResult> isUser(String email, string password)
        {
            var result = new Database().isUser(email, password);
            return Ok(result);
        }

        [HttpGet("getUser")]
        public async Task<IActionResult> getUser(String email, string password)
        {
            var result = new Database().getUser(email, password);
            return Ok(result);
        }
    }
}
