using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using BooksApi.DB;

namespace BooksApi.Controllers
{
    public class usersController : ControllerBase
    {
        private Database database;
        public usersController()
        {
            database = Database.getInstance();
        }

        [HttpGet("users")]
        public async Task <IActionResult> getUsers()
        {
            var list = database.getUsers();
            return Ok(list);
        }

        [HttpGet("authors")]
        public async Task<IActionResult> getAuthors()
        {
            var list = database.getAuthors();
            return Ok(list);
        }

        [HttpGet("books")]
        public async Task<IActionResult> getBooks()
        {
            var list = database.getBooks();
            return Ok(list);
        }

        [HttpGet("isUser")]
        public async Task<IActionResult> isUser(String email, string password)
        {
            var result = database.isUser(email, password);
            return Ok(result);
        }

        [HttpGet("getUser")]
        public async Task<IActionResult> getUser(String email, string password)
        {
            var result = database.getUser(email, password);
            return Ok(result);
        }
        [HttpPost("newUser")]
        public async Task<IActionResult> newUser(string firstname, string lastname, string email, string password)
        {
            var result = database.newUser(firstname, lastname, email, password);
            return Ok(result);
        }
    }
}
