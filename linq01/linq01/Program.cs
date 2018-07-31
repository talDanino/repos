using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
 22/6/18 --- ex. 1

 המכילה person צור מחלקה בשם 
 ID -> int
 Age -> int
 Name -> string
 צור בתכנית הראשית מערך המכיל 3 תאים ואתחל אותם כרצונך.
 המפלטר לתוכו טיפוס חדש של גילאי ה iEnumerable צור
 של המערך person .
 */

namespace linq01
{
    class Person
    {
        public int Id { get; set; }
        public int Age { get; set; }
        public string Name { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            List<Person> personList = new List<Person>();
            personList.Add(new Person { Id=0, Age=21, Name="Tal" });
            personList.Add(new Person { Id = 1, Age = 29, Name = "Liran" });
            personList.Add(new Person { Id = 2, Age = 31, Name = "Tom" });

            IEnumerable<int> res1 = personList.Select((Person p) => { return p.Age; });

            foreach (int item in res1)
            {
                Console.WriteLine(item);
            }
        }
    }
}
