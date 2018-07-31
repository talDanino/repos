using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp7
{
    class Program
    {
        static void Main(string[] args)
        {
            int a=4;
            MyClass myClass = new MyClass();
            myClass.MyMethod(out a);
            Console.WriteLine("a= " + a);
        }
    }
}
