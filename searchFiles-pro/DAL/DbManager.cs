using System;
using System.Data;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public static class DbManager
    {

        // ---------------------- insert search table ----------------------
        public static int InsertSearch(string iSearchText)
        {
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Danino\source\repos\searchFiles-pro\DAL\SearchDb.mdf;Integrated Security=True";
            
            //SqlConnection sql = null;

            string iDate = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("insertSearch", con))
                {
                    try
                    {
                        DateTime td = Convert.ToDateTime(iDate);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@searchText", iSearchText);
                        cmd.Parameters.AddWithValue("@date", td);
                        con.Open();
                        cmd.ExecuteNonQuery();
                    }

                    catch (Exception ex)
                    {
                        Console.WriteLine("e:" + ex);
                    }
                }
            }

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand("select dbo.getId(@searchText,@date) AS int", con))
                {
                    try
                    {
                        DateTime td = Convert.ToDateTime(iDate);
                        cmd.CommandType = CommandType.Text;

                        cmd.Parameters.AddWithValue("@searchText", iSearchText);
                        cmd.Parameters.AddWithValue("@date", td);


                        con.Open();
                        cmd.Connection = con;
                        int flag = int.Parse(cmd.ExecuteScalar().ToString());

                        return flag;
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("e:" + ex);
                        return -1;
                    }

                }
            }
        }

        // ---------------------- insert result table ----------------------
        public static void InsertResult(int searchId, string resultText)
        {
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Danino\source\repos\searchFiles-pro\DAL\SearchDb.mdf;Integrated Security=True";
            SqlConnection sql = null;

            try
            {
                using (sql = new SqlConnection(connectionString))
                {
                    sql.Open();

                    SqlCommand insertResultQuery = new SqlCommand(
                    $"INSERT INTO resultTable(SearchId, ResultText)" +
                    $"VALUES(@searchId, @resultText);", sql
                    );

                    insertResultQuery.Parameters.AddWithValue("@searchId", searchId);
                    insertResultQuery.Parameters.AddWithValue("@resultText", resultText);
                    insertResultQuery.ExecuteNonQuery();
                }
            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

    }
}
