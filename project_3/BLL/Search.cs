using System;
using System.IO;
using DAL;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL //class Search
{
    public class Search
    {
        public event Action<string> FindSearcherHandler;

        public void SearchDirection(int id, string direction, string WantedFileName)
        {

            string[] dirs = Directory.GetFiles(direction);  //files
            foreach (string d in dirs)
            {
                if (d.Contains(WantedFileName))
                {
                    FindSearcherHandler?.Invoke(d);
                    //Console.WriteLine(d);
                    //dbAdapter.InsertResult(id, d);
                    DAL.DbManager.InsertResult(id, d);
                }
            }
            dirs = Directory.GetDirectories(direction);  //directory
            foreach (string d in dirs)
            {
                // Console.WriteLine(d);
                try
                {
                    SearchDirection(id, d, WantedFileName);
                }

                catch (UnauthorizedAccessException)
                {
                    // Console.WriteLine(ex.Message);
                }

                catch (DirectoryNotFoundException)
                {
                    // Console.WriteLine(ex.Message);
                }

                catch (Exception)
                {
                    // Console.WriteLine(ex.Message);
                }
            }
        }
    }
}
