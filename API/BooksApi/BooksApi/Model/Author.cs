using System;
namespace BooksApi.Model
{
    public class Author
    {
        public String ID { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        public DateTime birthDate { get; set; }

        public Author(String ID, String firstName, String lastName, DateTime birthDate)
        {
            this.ID = ID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = birthDate;
        }
    }
}
