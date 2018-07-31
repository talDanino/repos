using System;

namespace project_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int result;
            string strToSearch;
            string dir;

            Console.WriteLine("1. Enter file name to search.");
            Console.WriteLine("2. Enter file name to search + parent directory to search in.");
            Console.WriteLine("3. Exit");

            Search mySearch = new Search();  // new object of search class
            //adding event handler
            mySearch.FindSearcherHandler += (fileName) => { Console.WriteLine($"{fileName}"); };

            result = int.Parse(Console.ReadLine());
            
            if (result == 1)
            {
                Console.WriteLine("Please enter file name to search: ");
                strToSearch = Console.ReadLine();
                int id = dbAdapter.InsertSearch(strToSearch);

                mySearch.SearchDirection(id,"C:\\try", strToSearch);
                // do something with your file array
                Console.WriteLine("finish search!");
            }

            else if (result == 2)
            {
                Console.WriteLine("Please enter file name to search: ");
                strToSearch = Console.ReadLine();
                Console.WriteLine("Enter dir: ");
                dir = Console.ReadLine();
                int id = dbAdapter.InsertSearch(strToSearch);

                mySearch.SearchDirection(id,dir, strToSearch);
                Console.WriteLine("finish search!");
            }

            else if(result == 3)
            {
                Environment.Exit(0);
            }

            else
            {
                Console.WriteLine("Invalid input! please select ");
            }

            Console.Read();

        }
    }
}
