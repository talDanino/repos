using System;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] mat = new int[4,4];
            int input = 1;

            for (int i = 0; i < mat.GetLength(0); i++)
            {
                for (int j = 0; j < mat.GetLength(1); j++)
                {
                    mat[i, j] = input;
                    input++;
                }
            }

            for (int i = 0; i < mat.GetLength(0); i++)
            {
                for (int j = 0; j < mat.GetLength(1); j++)
                {
                    Console.Write("{0,5}" ,mat[i, j]);
                }
                Console.WriteLine();
            }

            int sumMainDiagonal = 0; //סכום אלכסון ראשי
            int sumSecondDiagonal = 0; // סכום אלכסון משני

            for (int i = 0; i < mat.GetLength(0); i++)
            {
                for (int j = 0; j < mat.GetLength(1); j++)
                {
                    if (i == j)
                    {
                        sumMainDiagonal += mat[i, j];
                    }
                }
            }

            for (int i = 0; i < mat.GetLength(0); i++)
            {
                 sumSecondDiagonal += mat[i, mat.GetLength(0)-1-i];   
            }

            Console.WriteLine("sum of the main diagonal: "+ sumMainDiagonal);
            Console.WriteLine("sum of the second diagonal: " + sumSecondDiagonal);


            Console.Read();
        }
    }
}
