using System;

namespace ConsoleApp9
{
    class Square:Shape, IDrawable
    {
        //----------------- properties -----------------
        public int SideLength { get; set; }


        //----------------- constructor -----------------
        public Square(int x,int y,string color,int sideLength) : base(x,y,color)
        {
            SideLength = sideLength;
        }


        //----------------- functions -----------------
        public override string ShowDetails()
        {
            return $"side length: {SideLength}";
        }

        public override int Area()
        {
            int area;
            area = SideLength * SideLength;
            return area;
        }

        public override int Scope()
        {
            int scope;
            scope = SideLength * 4;
            return scope;
        }

        //----------------- interface -----------------
        public void Draw()
        {
            for (int i = 0; i < SideLength; i++)
            {
                for (int j = 0; j < SideLength; j++)
                {
                    Console.Write("* ");
                }
                Console.WriteLine();
            }
        }
    }
}
