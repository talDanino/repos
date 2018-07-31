using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp9
{
    class Rectangle:Shape,IDrawable
    {
        //----------------- properties -----------------
        public int Width { get; set; }
        public int Height { get; set; }

        //----------------- constructor -----------------
        public Rectangle(int x, int y, string color, int width, int height) : base(x, y, color)
        {
            Width = width;
            Height = height;
        }

        //----------------- functions -----------------
        public override string ShowDetails()
        {
            return $"width: {Width}, height: {Height} ";
        }

        public override int Area()
        {
            int area;
            area = Height * Width;
            return area;
        }

        public override int Scope()
        {
            int scope;
            scope = (Height + Width) * 2;
            return scope;
        }

        //----------------- interface -----------------
        public void Draw()
        {
            for(int i = 0; i < Height; i++)
            {
                for(int j = 0; j < Width; j++)
                {
                    Console.Write("* ");
                }
                Console.WriteLine();
            }
        }
    }
}
