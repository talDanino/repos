using System;

namespace foreach01
{
    class Program
    {
        static void Main(string[] args)
        {
            int num;
            Console.WriteLine("pleas enter number: ");
            num = int.Parse(Console.ReadLine());

            char[][] starArr = new char[num][];

            for (int i = 0; i < num; i++)
            {
                starArr[i] = new char[num];
            }

            for (int i = 0; i < starArr.Length; i++)
            {
                for (int j = 0; j <= i; j++)
                {
                    starArr[i][j] = '*';
                }
            }

            for(int i = 0; i < num; i++)
            {
                for(int j=0;j<num;j++)
                {
                    Console.Write(starArr[i][j]);
                }
                Console.WriteLine();
            }
            Console.Read();
        }
    }
}
