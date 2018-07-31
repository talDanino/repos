using System;

namespace ConsoleApp8
{
    class Math
    {

        public int A;
        public int B;

        public static void MultiplicationTable()
        {
            for (int i = 1; i <= 10; i++)
            {
                for (int j = 1; j <= 10; j++)
                {
                    Console.Write(i * j + "\t");
                }
                Console.Write("\n");
            }
        }


        public static int Sum(int num1, int num2)
        {
            int sum = 0;
            sum = num1 + num2;
            return sum;
        }

        public static int Multiplication(int num1, int num2)
        {
            int multiplication = 0;
            multiplication = num1 * num2;
            return multiplication;
        }

        //--------------- ctor -----------------
        public Math(int a, int b)
        {
            A = a;
            B = b;
        }
    }
}
