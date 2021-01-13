using System;

namespace BooksApi.Model
{
    public class User
    {
        public String ID { get; set; }
        public String firstName { get; set; }
        public String lastName { get; set; }
        public String email { get; set; }
        public String password { get; set; }

        public User(String ID, String firstName, String lastName, String email, String password)
        {
            this.ID = ID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
        }

    }
}
