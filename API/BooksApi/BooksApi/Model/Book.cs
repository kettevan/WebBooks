using System;
namespace BooksApi.Model
{
    public class Book
    {
        public String ID { get; set; }
        public String name { get; set; }
        public Author author { get; set; }
        public String category { get; set; }
        public String description { get; set; }
        public String imageName { get; set; }
        public double price { get; set; }
        public DateTime releaseDate { get; set; }
        public double rating { get; set; }
             
        public Book(String ID, String name, Author author, String category, String description, double price, DateTime releaseDate, double rating, String imageName)
        {
            this.ID = ID;
            this.name = name;
            this.author = author;
            this.category = category;
            this.description = description;
            this.price = price;
            this.releaseDate = releaseDate;
            this.rating = rating;
            this.imageName = imageName;
        }
    }
}
