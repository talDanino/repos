using System;

namespace ConsoleApp9
{
    class Program
    {
        static void Main(string[] args)
        {
            //--------------------- square ---------------------
            Console.WriteLine("------------- square ------------");
            Square mySquare = new Square(3,3,"red",5);
            Console.WriteLine(mySquare.ShowDetails() );
            Console.WriteLine("area of square: " + mySquare.Area());
            Console.WriteLine("scope of square: " + mySquare.Scope());
            mySquare.Draw();

            Console.WriteLine();
            Console.WriteLine();


            //--------------------- Rectangle ---------------------
            Console.WriteLine("------------- Rectangle ------------");
            Rectangle myRectangle = new Rectangle(4, 6, "green", 8, 4);
            Console.WriteLine(myRectangle.ShowDetails());
            Console.WriteLine("area of rectangle: " + myRectangle.Area());
            Console.WriteLine("scope of rectangle: " + myRectangle.Scope());
            myRectangle.Draw();




            Console.Read();
        }
    }
}
