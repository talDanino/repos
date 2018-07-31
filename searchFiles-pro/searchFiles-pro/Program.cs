using System;
using BLL;
using DAL;

namespace UIL
{
    class Program
    {
        public static void Menu()
        {
            Console.WriteLine("1. Enter file name to search.");
            Console.WriteLine("2. Enter file name to search + parent directory to search in.");
            Console.WriteLine("3. Exit");
        }


        static void Main(string[] args)
        {
            int result;
            string strToSearch;
            string dir;

            Menu();
            
            Search mySearch = new Search();  // new object of search class
            //adding event handler
            mySearch.FindSearcherHandler += (fileName) => { Console.WriteLine($"{fileName}"); };

            while (true)
            {
                result = int.Parse(Console.ReadLine());


                if (result == 1)
                {
                    Console.WriteLine("Please enter file name to search: ");
                    strToSearch = Console.ReadLine();
                    int id = DAL.DbManager.InsertSearch(strToSearch);

                    mySearch.SearchDirection(id, "C:\\", strToSearch);
                    // do something with your file array
                    Console.WriteLine("finish search!");

                    System.Threading.Thread.Sleep(5000);
                    Console.Clear();
                    Menu();

                }

                else if (result == 2)
                {
                    Console.WriteLine("Please enter file name to search: ");
                    strToSearch = Console.ReadLine();
                    Console.WriteLine("Enter dir: ");
                    dir = Console.ReadLine();
                    int id = DAL.DbManager.InsertSearch(strToSearch);

                    mySearch.SearchDirection(id, dir, strToSearch);
                    Console.WriteLine("finish search!");

                    System.Threading.Thread.Sleep(5000);
                    Console.Clear();
                    Menu();

                }

                else if (result == 3)
                {
                    Environment.Exit(0);
                }

                else
                {
                    Console.WriteLine("Invalid input! please select One of the options 1, 2 or 3 ");
                }

            }

        }
    }
}
