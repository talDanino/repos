using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            
        }

        int indexRow;
        
        //---------------------------------- Add ------------------------------------

        private void addButton_Click(object sender, EventArgs e)
        {
            string[] row1 = new string[4];
            bool checkFirstName = false;
            bool checkLastName = false;
            bool checkPhone = false;
            bool checkEmail = false;

            //---------------- tbFirsName ----------------

            if (tbFirstName.Text != "")
            {
                if (tbFirstName.Text.Length > 20)
                {
                    MessageBox.Show("please enter no more than 20 characters");
                }
                
                foreach (char item in tbFirstName.Text)
                {
                    if (char.IsDigit(item))
                    {
                        MessageBox.Show("Digits Are Not Allowed....\n Please Enter Correct first name:");
                        checkFirstName = true;
                    }
                }
            }
            else
            {
                MessageBox.Show("please input your first name");
            }

            //---------------- tbLastName ----------------

            if (tbLastName.Text != "")
            {
                if (tbLastName.Text.Length > 20)
                {
                    MessageBox.Show("please enter no more than 20 characters");
                }
                
                foreach (char item in tbLastName.Text)
                {
                    if (char.IsDigit(item))
                    {
                        MessageBox.Show("Digits Are Not Allowed....\n Please Enter Correct last name:");
                        checkLastName = true;
                    }
                }
            }
            else
            {
                MessageBox.Show("please input your last name");
            }

            //---------------- tbPhoneNumber ----------------
            if (tbPhone.Text != "")
            {
                if (tbLastName.Text.Length > 11)
                {
                    MessageBox.Show("please enter no more than 11 characters");
                }
                
                foreach (char item in tbPhone.Text)
                {
                    if (char.IsLetter(item))
                    { 
                        checkPhone = true;
                    }
                }
                if (checkPhone == true)
                {
                    MessageBox.Show("Letters Are Not Allowed....\n Please Enter Correct Phone Number:");
                }
            }
            else
            {
                MessageBox.Show("please input your phone number");
            }


            //---------------- tbEmail ----------------
            if (tbEmail.Text != "")
            {
                bool exists = false;
                foreach (char item in tbEmail.Text)
                {
                    if (char.IsDigit(item))
                    {
                        exists = true;
                    }
                }
                if (exists == false)
                {
                    MessageBox.Show("The e-mail address must contain digits !");
                }

                exists = false;
                foreach (char item in tbEmail.Text)
                {
                    if (char.IsLetter(item))
                    {
                        exists = true;
                    }
                }
                if (exists == false)
                {
                    MessageBox.Show("The e-mail address must contain letters !");
                }

                exists = false;
                foreach (char item in tbEmail.Text)
                {
                    if (item=='@')
                    {
                        exists = true;
                    } 
                }
                if (exists == false)
                {
                    MessageBox.Show("The e-mail address must contain '@' !");
                }
            }

            else
            {
                MessageBox.Show("please input your Email address");
            }
            
            if(checkFirstName==false && checkLastName==false && checkPhone==false && checkEmail == false)
            {
                row1[0] = tbFirstName.Text;
                row1[1] = tbLastName.Text;
                row1[2] = tbPhone.Text;
                row1[3] = tbEmail.Text;
                dataGridView1.Rows.Add(row1);
                foreach (DataGridViewRow row in dataGridView1.Rows)
                {
                    row.Cells["SelectColumn"].Value = false;
                }
            }  
        }

        //----------------------------------- Remove ------------------------------------
        private void RemoveButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Cast<DataGridViewRow>()
                .Where(row => (bool?)row.Cells["SelectColumn"].Value == true)
                .ToList().ForEach(row =>
                    {
                        dataGridView1.Rows.Remove(row);
                    });
        }

        //----------------------------------- Update ------------------------------------

        private void UpdateButton_Click(object sender, EventArgs e)
        {
            DataGridViewRow newRow = dataGridView1.Rows[indexRow];
            newRow.Cells["EmailColumn"].Value = tbEmail.Text;
            newRow.Cells["PhoneColumn"].Value = tbPhone.Text;
            newRow.Cells["FirstNameColumn"].Value = tbFirstName.Text;
            newRow.Cells["LastNameColumn"].Value = tbLastName.Text;
        }




        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            indexRow = e.RowIndex;
            DataGridViewRow row = dataGridView1.Rows[indexRow];
            tbFirstName.Text = row.Cells["FirstNameColumn"].Value.ToString();
            tbLastName.Text = row.Cells["LastNameColumn"].Value.ToString();
            tbPhone.Text = row.Cells["PhoneColumn"].Value.ToString();
            tbEmail.Text = row.Cells["EmailColumn"].Value.ToString();
        }

        
    }
}
