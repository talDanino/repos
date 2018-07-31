var shape: number; // צורה
var length: number;//אורך לריבוע
var width: number; //רוחב מלבן
var height: number; //גובה המלבן
var sideLength: number; //שוק משולש
var content: number; //תוכן צורה
var diamondLength: number; //צלע מעוין

shape = parseInt(prompt("Welcome to the best shape simulation ever in the entire world! \n Please select desired shape:  \n 1) Square  \n 2) Rectangle  \n 3) Triangle   \n 4) Diamond"));

//בדיקת קלט סוג הצורה
if (shape == 1 || shape == 2 || shape == 3 || shape == 4)
{

    ////////////////////////////////////    ריבוע     //////////////////////////////////
    if (shape == 1)
    {
        let i: number;
        let j: number;
        let area: number;
        let scope: number;

        length = parseInt(prompt("Please enter square side length: "))

        //בדיקת מידות הצורה
        if (length > 0 || length - Math.round(length)==0)
        {
            content = shape_content()

            //בדיקת קלט לתוכן הצורה
            if (content == 1 || content == 2 || content == 3 || content == 4)
            {
                if (content == 1)//מלאה
                {
                    for (i = 1; i <= length; i++) {
                        for (j = 1; j <= length; j++) {
                            document.write(" * ");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 2)//מסגרת
                {
                    let i: number;
                    let j: number;
                    for (i = 1; i <= length; i++)//שורה
                    {
                        document.write("* ");
                    }
                    document.write("<br/>");//עמודות
                    for (i = 1; i <= (length - 2); i++) {
                        for (j = 1; j <= length; j++) {
                            if (j == 1 || j == length) {
                                document.write("* ");
                            }
                            else
                                document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }
                    for (i = 1; i <= length; i++)//שורה
                    {
                        document.write("* ");
                    }
                }
                if (content == 3)//עולה
                {
                    let i: number;
                    let j: number;
                    for (i = 1; i <= length; i++) {
                        for (j = 1; j <= length; j++) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 4)//יורד
                {
                    let i: number;
                    let j: number;
                    for (i = length; i >= 1; i--) {
                        for (j = length; j >= 1; j--) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                    }
                }

                area = length * length
                scope = 2 * (length + length);

                document.write("<br/>");
                document.write("square area: " + area);
                document.write("<br/>");
                document.write("square scope: " + scope);
            }
            //הודעה לקלט שגוי בתוכן הצורה
            else
                document.write("wrong input! The input should be 1 or 2 or 3 or 4, for the shape content");
            
        }
        //הודעה לקלט לא תקין במידות הצורה
        else
            document.write("wrong input! The input should be a positive integer number");
        
    }
    ////////////////////////////////////    מלבן     //////////////////////////////////
    if (shape == 2)
    {
        let i: number;
        let j: number;
        let area: number;
        let scope: number;

        width = parseInt(prompt("Please enter rectangle width: ")) //רוחב
        height = parseInt(prompt("Please enter rectangle height: ")) //גובה

        //בדיקת קלט מידות הצורה
        if (width > 0 && height > 0)
        {
            content = shape_content() //view

            //בדיקת קלט לתוכן הצורה
            if (content == 1 || content == 2 || content == 3 || content == 4) {
                if (content == 1) //full
                {
                    for (i = 1; i <= width; i++)//row
                    {
                        for (j = 1; j <= height; j++)//column
                        {
                            document.write("* ");
                        }
                        document.write("<br/>");
                    }
                }

                if (content == 2) //frame
                {
                    let i: number;
                    let j: number;

                    for (i = 1; i <= width; i++) {
                        document.write("* ");
                    }
                    document.write("<br/>");

                    for (i = 1; i <= height - 2; i++) {
                        for (j = 1; j <= width; j++) {
                            if (j == 1 || j == width)
                                document.write("* ");
                            else
                                document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }

                    for (i = 1; i <= width; i++) {
                        document.write("* ");
                    }
                }
                if (content == 3) //going up
                {
                    for (i = 1; i <= height; i++) {
                        for (j = 1; j <= width; j++) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                    }
                }

                if (content == 4) //going down
                {
                    for (i = 1; i <= height; i++) {
                        for (j = width; j >= 1; j--) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                    }
                }
                area = height * width;
                scope = 2 * (height + width);

                document.write("<br/>");
                document.write("rectangle area: " + area);
                document.write("<br/>");
                document.write("rectangle scope: " + scope);
            }
            //הודעת שגיאה לתוכן הצורה
            else
                document.write("wrong input! The input should be 1 or 2 or 3 or 4, for the shape content");
            
        }
        //הודעה לקלט לא תקין במידות הצורה
        else
            document.write("wrong input! The input should be a positive integer number");
    }

    ////////////////////////////////////    משולש     //////////////////////////////////
    if (shape == 3)
    {
        let i: number;
        let j: number;
        let area: number;
        let scope: number;

        sideLength = parseInt(prompt("Please enter triangle side length: ")); //שוק משולש

        //בדיקת מידות הצורה
        if (sideLength > 0 || (sideLength - Math.round(sideLength))==0)
        {
            content = shape_content() //view

            //בדיקת קלט לתוכן הצורה
            if (content == 1 || content == 2 || content == 3 || content == 4)
            {
                if (content == 1) //full
                {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j <= i; j++) {
                            document.write("* ");
                        }
                        document.write("<br/>");
                    }
                }

                if (content == 2) //frame
                {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j < i; j++) {
                            if (j == 1 || j == i - 1) {
                                document.write("*");
                            }
                            document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }
                    for (i = 1; i <= sideLength; i++) {
                        document.write(" * ");
                    }
                }

                if (content == 3)//going up
                {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j <= i; j++) {
                            document.write(j + "&nbsp");
                        }
                        document.write("<br/>");
                    }
                }

                if (content == 4)//going down
                {
                    for (i = sideLength; i >= 1; i--) {
                        for (j = sideLength; j >= i; j--) {
                            document.write(j + "&nbsp");
                        }
                        document.write("<br/>");
                    }
                }
                area = (sideLength * sideLength) / 2
                scope = (2 + sideLength) + (Math.sqrt(Math.pow(sideLength, 2) + Math.pow(sideLength, 2)));

                document.write("<br/>");
                document.write("triangle area: " + area);
                document.write("<br/>");
                document.write("triangle scope: " + scope);
            }
            //הודעת שגיאה לתוכן הצורה
            else
                document.write("wrong input! The input should be 1 or 2 or 3 or 4, for the shape content");
        }
        //הודעה לקלט לא תקין במידות הצורה
        else
            document.write("wrong input! The input should be a positive integer number");
    }

    ////////////////////////////////////   Diamond מעוין     //////////////////////////////////
    if (shape == 4) {
        let i: number;
        let k: number;
        let j: number;
        let x: number;
        let area: number;
        let scope: number;


        diamondLength = parseInt(prompt("Please enter diamond length: ")); //צלע מעוין

        //בדיקת קלט מימדי הצורה
        if (diamondLength > 0)
        {
            content = shape_content() //view

            //בדיקת קלט לתוכן הצורה
            if (content == 1 || content == 2 || content == 3 || content == 4)
            {
                let len: number = diamondLength;

                if (content == 1) //full
                {
                    for (i = 1; i <= diamondLength; i++)// חלק עליו במעוין
                    {
                        for (k = len; k >= 1; k--)//רווח
                        {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++)//כוכביות
                        {
                            document.write("* ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;
                    for (i = 1; i <= diamondLength; i++)//חלק תחתון
                    {
                        for (k = 1; k <= i; k++) {
                            document.write("&nbsp");
                        }
                        for (j = len; j >= 1; j--) {
                            document.write(" * ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }

                }

                if (content == 2) {
                    for (i = 1; i <= diamondLength; i++) //חלק עליון במעוין
                    {
                        for (k = len; k >= 1; k--)//רווח
                        {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++)//כוכביות
                        {
                            if (j == 1 || j == i) {
                                document.write("* ");
                            }
                            else
                                document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;
                    for (i = 1; i <= diamondLength; i++) {
                        for (k = 1; k <= i; k++) {
                            document.write("&nbsp");
                        }

                        for (j = len; j >= 1; j--) {
                            if (j == len || j == 1) {
                                document.write(" *");
                            }
                            else
                                document.write("&nbsp&nbsp");
                        }

                        document.write("<br/>");
                        len = len - 1;
                    }
                }

                if (content == 3) {
                    for (i = 1; i <= diamondLength; i++)// חלק עליו במעוין
                    {
                        for (k = len; k >= 1; k--)//רווח
                        {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++)//כוכביות
                        {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;

                    for (i = 1; i <= diamondLength; i++)//חלק תחתון
                    {
                        for (k = 1; k <= i; k++) {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= len; j++) {
                            document.write("&nbsp" + j);
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                }

                if (content == 4) {
                    for (i = 1; i <= diamondLength; i++)// חלק עליו במעוין
                    {
                        for (k = len; k >= 1; k--)//רווח
                        {
                            document.write("&nbsp");
                        }
                        for (j = diamondLength; j >= len; j--)//כוכביות
                        {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;

                    for (i = 1; i <= diamondLength - 1; i++)//חלק תחתון
                    {
                        for (k = 1; k <= i; k++) {
                            document.write("&nbsp");
                        }
                        for (j = diamondLength; j > i; j--) {
                            document.write("&nbsp" + j);
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                }
            }
            //הודעת שגיאה לתוכן הצורה
            else
                document.write("wrong input! The input should be 1 or 2 or 3 or 4, for the shape content");
        }
        //הודעה לקלט לא תקין במידות הצורה
        else
            document.write("wrong input! The input should be a positive integer number");
        
    }

}
//שגיאה אם קלט סוג הצורה לא נכון
else 
    document.write("wrong input! The input should be 1 or 2 or 3 or 4, for the shape type");



//פונקציה שמבקשת מהמשתמש את הדרך בה הוא ירצה להציג את התוכן של הצורה
function shape_content(): number {
    let contentf: number;
    contentf = parseInt(prompt("Please select shape content: \n 1) *****  \n 2) *    *  \n 3) 12345  \n 4) 54321"));

    return contentf;
}
