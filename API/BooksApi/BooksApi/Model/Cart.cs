using System;
using System.Collections.Generic;

namespace BooksApi.Model
{
    public class Cart
    {
        public User user { get; set; }
        public List<Book> books { get; set; }
        public Cart(User user, List<Book> books)
        {
            this.user = user;
            this.books = books;
        }
    }
}
