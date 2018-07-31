using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        public static int Max(int[] arr)
        {
            int max = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > max)
                {
                    max = arr[i];
                }                
            }
            return max;
        }
        //----------------------------------------------
        static void Main(string[] args)
        {
            int[] arr = new int[4] {2,4,6,8};
            
            foreach (int item in arr)
            {
                Console.Write(item + ",");
            }
            Console.WriteLine();

            int firstMax = Max(arr);
            int secondMax=0;

            for(int i = 0; i < arr.Length; i++)
            {
                if(arr[i]>secondMax && arr[i] < firstMax)
                {
                    secondMax = arr[i];
                }
            }

            Console.WriteLine("the second maximum element: " + secondMax);
            Console.Read();
        }
    }
}
