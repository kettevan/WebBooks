using System;
namespace BooksApi.Model
{
    public class Author
    {
        public String ID { get; set; }
        public String fullName { get; set; }
        public DateTime birthDate { get; set; }

        public Author(String ID, String fullName,  DateTime birthDate)
        {
            this.ID = ID;
            this.fullName = fullName;
            this.birthDate = birthDate;
        }
    }
}
