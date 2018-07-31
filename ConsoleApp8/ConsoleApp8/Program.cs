using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class Program
    {
        public static int min(int[] arr)
        {
            int min = arr[0];
            int index = 0;
            for(int i = 1; i < arr.Length; i++)
            {
                if (arr[i] < min)
                {
                    index = i; //save the index
                }
            }

            return index;
        }
       
        static void Main(string[] args)
        {
            int[] arr = new int[7]{2,7,4,7,3,2,4 };
            int[] arrCopy = new int[7];
            Array.Copy(arr, arrCopy, 7);

            foreach (var item in arrCopy)
            {
                Console.WriteLine(item);
            }
        }
    }
}
