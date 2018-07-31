using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cprojects
{
    public class Product
    {
        public string ProductName;
        public decimal ProductPrice;
        public double Weight;
        public bool Kosher;
        public string MakerName;
        public string Mainland; // America/ Africa/ Europe/ Asia
        public DateTime ExpiryDate;

        // ctor with all the parameters
        public Product
            (string productName, decimal productPrice, double weigh, string makerName, string mainland, DateTime expiryDate, bool kosher = true)
        {
            ProductName = productName;
            ProductPrice = productPrice;
            Weight = weigh;
            Kosher = kosher;
            MakerName = makerName;
            Mainland = mainland;
            ExpiryDate = expiryDate;
        }

        //ctor with productName, price, and weight
        public Product(string productName, decimal productPrice, double weigh)
        {
            ProductName = productName;
            ProductPrice = productPrice;
            Weight = weigh;
        }

        // ctor without parameters
        public Product() { }

        // ------------------ functions ----------------------
        public void GetProduct()
        {
            Console.WriteLine("product name: ");
            ProductName = Console.ReadLine();
            Console.WriteLine("product price: ");
            ProductPrice = int.Parse(Console.ReadLine());
            Console.WriteLine("product weigh: ");
            Weight = int.Parse(Console.ReadLine());
            Console.WriteLine("is kasher: ");
            Kosher = bool.Parse(Console.ReadLine());
            Console.WriteLine("maker name: ");
            MakerName = Console.ReadLine();
            Console.WriteLine("mainland: ");
            Mainland = Console.ReadLine();
            Console.WriteLine("expiry date: ");
            ExpiryDate = DateTime.Parse(Console.ReadLine());
        }

        public void PrintProduct()
        {
            Console.WriteLine
                ($"product name: {ProductName}, product price: {ProductPrice}, product weigh: {Weight}, is kosher: {Kosher}, maker name: {MakerName}, mainland: {Mainland}, expiry date: {ExpiryDate}");
        }

        public void PrintNameAndPrice()
        {
            Console.WriteLine
                ($"product name: {ProductName}, product price: {ProductPrice}");
        }

        public Product Expensive(Product pro1, Product pro2)
        {
            if (pro1.ProductPrice > pro2.ProductPrice)
            {
                return pro1;
            }
            else
            {
                return pro2;
            }
        }

        public bool IsExpired(DateTime ExpiryDate)
        {
            return ExpiryDate < DateTime.Now;
        }
    }

    //------------------------------------------------------------------------------
    public class Program
    {
        static void Main(string[] args)
        {
            Product myProduct = new Product();
            Console.WriteLine("Hello World!");
        }
    }
}