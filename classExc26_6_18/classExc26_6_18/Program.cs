using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
 products שלוף מטבלת
 את כל המוצרים שמחירם בין 10-20
     */

namespace classExc26_6_18
{
    class Program
    {
        static void Main(string[] args)
        {
            using (NorthwindEntities ef = new NorthwindEntities())
            {
                IEnumerable<string> productArr = ef.Products
                                            .Where((Product p) => p.UnitPrice >= 10 && p.UnitPrice <= 20)
                                            .Select((Product p) => p.ProductName+p.UnitPrice);

                foreach (string item in productArr)
                {
                    Console.WriteLine(item);
                }

                //------------------- second way ----------------------
                IEnumerable<Product> productList = ef.Products.Where(p => p.UnitPrice > 10 && p.UnitPrice < 20);
                foreach(Product item in productList)
                {
                    Console.WriteLine(item);
                }
                /*
                 item
                 הוא משתנה לא מטיפוס סטרינג. ולכן אוטומטית הוא מקבל 
                 to string.
                 במצב כזה לא נקבל את הפלט הרצוי אלא את השם של ה 
                 namespace.
                 כדי לתקן את זה
                 נכנס למחלקה של הטבלה בה אנחנו משתמשים,
                 ניצור הרחבה של אותה מחלקה בקובץ אחר ע"י 
                 particial.
                 ונבצע דריסה ל 
                 toString()
                 */
            }

        }
    }
}
