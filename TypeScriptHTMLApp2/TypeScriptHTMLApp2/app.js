var shape; // צורה
var length; //אורך לריבוע
var width; //רוחב מלבן
var height; //גובה המלבן
var sideLength; //שוק משולש
var content; //תוכן צורה
var diamondLength; //צלע מעוין
shape = parseInt(prompt("Welcome to the best shape simulation ever in the entire world! \n Please select desired shape:  \n 1) Square  \n 2) Rectangle  \n 3) Triangle   \n 4) Diamond"));
if (shape >= 1 && shape <= 4) {
    ////////////////////////////////////    ריבוע     //////////////////////////////////
    if (shape == 1) {
        var i = void 0;
        var j = void 0;
        var area = void 0;
        var scope = void 0;
        length = parseInt(prompt("Please enter square side length: "));
        if (length > 0 && length % 10 == 0) {
            content = shape_content();
            //בדיקה אם תוכן הצורה שנבחר תקין
            if (content >= 1 && content <= 4) {
                if (content == 1) {
                    for (i = 1; i <= length; i++) {
                        for (j = 1; j <= length; j++) {
                            document.write(" *");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 2) {
                    var i_1;
                    var j_1;
                    for (i_1 = 1; i_1 <= length; i_1++) {
                        document.write("* ");
                    }
                    document.write("<br/>"); //column
                    for (i_1 = 1; i_1 <= (length - 2); i_1++) {
                        for (j_1 = 1; j_1 <= length; j_1++) {
                            if (j_1 == 1 || j_1 == length) {
                                document.write("* ");
                            }
                            else
                                document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }
                    for (i_1 = 1; i_1 <= length; i_1++) {
                        document.write("* ");
                    }
                }
                if (content == 3) {
                    var i_2;
                    var j_2;
                    for (i_2 = 1; i_2 <= length; i_2++) {
                        for (j_2 = 1; j_2 <= length; j_2++) {
                            document.write(j_2 + "");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 4) {
                    var i_3;
                    var j_3;
                    for (i_3 = length; i_3 >= 1; i_3--) {
                        for (j_3 = length; j_3 >= 1; j_3--) {
                            document.write(j_3 + "");
                        }
                        document.write("<br/>");
                    }
                }
                area = length * length;
                scope = 2 * (length + length);
                document.write("<br/>");
                document.write("square area: " + area);
                document.write("<br/>");
                document.write("square scope: " + scope);
            }
            else
                document.write("wrong input! The input should be 1 or 2 or 3 of 4, for the content type");
        }
        else
            document.write("wrong input! The input shold be a positive integer number ");
    }
    ////////////////////////////////////    מלבן     //////////////////////////////////
    if (shape == 2) {
        var i = void 0;
        var j = void 0;
        var area = void 0;
        var scope = void 0;
        width = parseInt(prompt("Please enter rectangle width: ")); //רוחב
        height = parseInt(prompt("Please enter rectangle height: ")); //גובה
        if (width > 0 && width % 10 == 0 && height > 0 && height <= 4) {
            content = shape_content(); //view
            //בדיקה אם תוכן הצורה שנבחר תקין
            if (content >= 1 && content <= 4) {
                if (content == 1) {
                    for (i = 1; i <= width; i++) {
                        for (j = 1; j <= height; j++) {
                            document.write("* ");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 2) {
                    var i_4;
                    var j_4;
                    for (i_4 = 1; i_4 <= width; i_4++) {
                        document.write("* ");
                    }
                    document.write("<br/>");
                    for (i_4 = 1; i_4 <= height - 2; i_4++) {
                        for (j_4 = 1; j_4 <= width; j_4++) {
                            if (j_4 == 1 || j_4 == width)
                                document.write("* ");
                            else
                                document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }
                    for (i_4 = 1; i_4 <= width; i_4++) {
                        document.write("* ");
                    }
                }
                if (content == 3) {
                    for (i = 1; i <= height; i++) {
                        for (j = 1; j <= width; j++) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 4) {
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
            else
                document.write("wrong input!! The input should be 1 or 2 or 3 of 4, for the content type ");
        }
        else
            document.write("wrong input! The input shold be a positive integer number ");
    }
    ////////////////////////////////////    משולש     //////////////////////////////////
    if (shape == 3) {
        var i = void 0;
        var j = void 0;
        var area = void 0;
        var scope = void 0;
        sideLength = parseInt(prompt("Please enter triangle side length: ")); //שוק משולש
        if (sideLength > 0 && sideLength % 10 == 0) {
            content = shape_content(); //view
            //בדיקה אם תוכן הצורה שנבחר תקין
            if (content >= 1 && content <= 4) {
                if (content == 1) {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j <= i; j++) {
                            document.write("* ");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 2) {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j < i; j++) {
                            if (j == 1 || j == i - 1) {
                                document.write("* ");
                            }
                            document.write("&nbsp&nbsp");
                        }
                        document.write("<br/>");
                    }
                    for (i = 1; i <= sideLength; i++) {
                        document.write(" * ");
                    }
                }
                if (content == 3) {
                    for (i = 1; i <= sideLength; i++) {
                        for (j = 1; j <= i; j++) {
                            document.write(j + "&nbsp");
                        }
                        document.write("<br/>");
                    }
                }
                if (content == 4) {
                    for (i = sideLength; i >= 1; i--) {
                        for (j = sideLength; j >= i; j--) {
                            document.write(j + "&nbsp");
                        }
                        document.write("<br/>");
                    }
                }
                area = (sideLength * sideLength) / 2;
                scope = (2 + sideLength) + (Math.sqrt(Math.pow(sideLength, 2) + Math.pow(sideLength, 2)));
                document.write("<br/>");
                document.write("triangle area: " + area);
                document.write("<br/>");
                document.write("triangle scope: " + scope);
            }
            else
                document.write("wrong input! The input should be 1 or 2 or 3 of 4, for the content type");
        }
        else
            document.write("wrong input! The input should be a positive integer number ");
    }
    ////////////////////////////////////   Diamond מעוין     //////////////////////////////////
    if (shape == 4) {
        var i = void 0;
        var k = void 0;
        var j = void 0;
        var x = void 0;
        var area = void 0;
        var scope = void 0;
        diamondLength = parseInt(prompt("Please enter diamond length: ")); //צלע מעוין
        if (diamondLength > 0 && diamondLength - Math.floor(diamondLength) == 0) {
            content = shape_content(); //view
            var len = diamondLength;
            //בדיקה אם תוכן הצורה שנבחר תקין
            if (content >= 1 && content <= 4) {
                if (content == 1) {
                    for (i = 1; i <= diamondLength; i++) {
                        for (k = len; k >= 1; k--) {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++) {
                            document.write("* ");
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
                            document.write(" * ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                }
                if (content == 2) {
                    for (i = 1; i <= diamondLength; i++) {
                        for (k = len; k >= 1; k--) {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++) {
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
                    for (i = 1; i <= diamondLength; i++) {
                        for (k = len; k >= 1; k--) {
                            document.write("&nbsp");
                        }
                        for (j = 1; j <= i; j++) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;
                    for (i = 1; i <= diamondLength; i++) {
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
                    for (i = 1; i <= diamondLength; i++) {
                        for (k = len; k >= 1; k--) {
                            document.write("&nbsp");
                        }
                        for (j = diamondLength; j >= len; j--) {
                            document.write(j + " ");
                        }
                        document.write("<br/>");
                        len = len - 1;
                    }
                    len = diamondLength - 1;
                    for (i = 1; i <= diamondLength - 1; i++) {
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
                scope = 2 * (diamondLength + diamondLength);
                area = (Math.sqrt(Math.pow(diamondLength, 2)) + (Math.pow(diamondLength, 2)));
            }
            else
                document.write("wrong input! The input should be 1 or 2 or 3 of 4, for the content type");
        }
        else
            document.write("wrong input! The input should be a positive integer number ");
    }
}
else
    document.write("wrong input! The input should be 1 or 2 or 3 of 4, for the shape type");
//פונקציה שמבקשת מהמשתמש את הדרך בה הוא ירצה להציג את התוכן של הצורה
function shape_content() {
    var contentf;
    contentf = parseInt(prompt("Please select shape content: \n 1) *****  \n 2) *    *  \n 3) 1 2 3 4 5  \n 4) 5 4 3 2 1"));
    return contentf;
}
//# sourceMappingURL=app.js.map