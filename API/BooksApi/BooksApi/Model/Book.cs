using System;
namespace BooksApi.Model
{
    public class Book
    {
        public String ID { get; set; }
        public String name { get; set; }
        public String authorID { get; set; }
        public String category { get; set; }
        public String description { get; set; }
        public double price { get; set; }
        public DateTime releaseDate { get; set; }
        public double rating { get; set; }
             
        public Book(String ID, String name, String authorID, String category, String description, double price, DateTime releaseDate, double rating)
        {
            this.ID = ID;
            this.name = name;
            this.authorID = authorID;
            this.category = category;
            this.description = description;
            this.price = price;
            this.releaseDate = releaseDate;
            this.rating = rating;
        }
    }
}
