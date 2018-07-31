using System;

namespace RefOutExercise
{
    class Program
    {
        public static void arrZugi(int[]arr1 ,out int[]arr2 )
        {
            int j = 0;
            int countZugi = 0;

            //ספירה של מספר התאים שתוכנם זוגי
            for (int i = 0; i < arr1.Length; i++)
            {
                if (arr1[i] % 2 == 0)
                {
                    countZugi++;
                }
            }

            arr2 = new int[countZugi];

            //הכנסה של התאים שתוכנם זוגי למערך חדש
            for (int i = 0; i < arr1.Length; i++)
            {
                if (arr1[i] % 2 == 0)
                {
                    arr2[j] = arr1[i];
                    j++;
                }
            }
        }
        

        static void Main(string[] args)
        {
            int[] arr = new int[6]; //יצירת מערך בן 10 תאים
            int[] arrNew;

            for(int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine("pleas enter number: ");
                arr[i] = int.Parse(Console.ReadLine());
            }

            //על המערך החדש out
            arrZugi(arr, out arrNew);

            Console.WriteLine("-----------src array-----------");
            foreach (int item in arr)
            {
                Console.Write(item + ",");
            }

            Console.WriteLine();
            Console.WriteLine("-----------new array-----------");
            foreach (int item in arrNew)
            {
                Console.Write(item + ",");
            }

            Console.Read();
        }
    }
}
