using System;

namespace ConsoleApp9
{
    abstract class Shape
    {
        public int X { get; set; }
        public int Y { get; set; }
        public string Color;

        //----------------- constructor -----------------
        public Shape(int x, int y, string color)
        {
            X = x;
            Y = y;
            Color = color;
        }

        //----------------- functions -----------------
        public virtual string ShowDetails()
        {
            return $"position: {X},{Y} ,color: {Color}";
        }

        public abstract int Area();

        public abstract int Scope();
    }
}
