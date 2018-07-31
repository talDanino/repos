///////////////////Main section
scriptFlow();
///////////////////Function section
function scriptFlow() {
    var firstArgument;
    var secondArgument = "0";
    var shapeContentNumber;
    var shapeTypeNumer = input(1);
    var errorMessageString = errorMessage(1, shapeTypeNumer);
    if (errorMessageString != "") {
        document.write(errorMessageString);
        return;
    }
    switch (Number(shapeTypeNumer)) {
        case 1:
            firstArgument = input(2);
            errorMessageString = errorMessage(2, firstArgument);
            if (errorMessageString != "") {
                document.write(errorMessageString);
                return;
            }
            break;
        case 2:
            firstArgument = input(3);
            errorMessageString = errorMessage(2, firstArgument);
            if (errorMessageString != "") {
                document.write(errorMessageString);
                return;
            }
            secondArgument = input(4);
            errorMessageString = errorMessage(2, secondArgument);
            if (errorMessageString != "") {
                document.write(errorMessageString);
                return;
            }
            break;
        case 3:
            firstArgument = input(5);
            errorMessageString = errorMessage(2, firstArgument);
            if (errorMessageString != "") {
                document.write(errorMessageString);
                return;
            }
            break;
        case 4:
            firstArgument = input(6);
            errorMessageString = errorMessage(2, firstArgument);
            if (errorMessageString != "") {
                document.write(errorMessageString);
                return;
            }
            break;
    }
    shapeContentNumber = input(7);
    errorMessageString = errorMessage(3, shapeContentNumber);
    if (errorMessageString != "") {
        document.write(errorMessageString);
        return;
    }
    printShape(Number(shapeContentNumber), Number(shapeTypeNumer), Number(firstArgument), Number(secondArgument));
}
function input(questionNumber) {
    var msgArray = new Array();
    msgArray = ["Welcome to the best shape simulation ever in the entire world!\nPlease select desired shape:\n1) Square\n2) Rectangle\n" +
            "3) Triangle\n4) Rhombus",
        "Please enter square side length:",
        "Please enter rectangle width:",
        "Please enter rectangle height:",
        "Please enter triangle side length:",
        "Please enter rhombus side length:",
        "Please select shape content:\n1) * * * * *\n2) *         *\n3) 1 2 3 4 5\n4) 5 4 3 2 1"];
    return prompt(msgArray[questionNumber - 1]);
}
function errorMessage(errorType, valueToCheck) {
    switch (errorType) {
        case 1:
            if (Number(valueToCheck) != 1 && Number(valueToCheck) != 2 && Number(valueToCheck) != 3 && Number(valueToCheck) != 4)
                return "Error. Please select 1 or 2 or 3 or 4, for the shape type.";
            return "";
        case 2:
            if (Number(valueToCheck) != parseInt(valueToCheck) || Number(valueToCheck) == NaN || Number(valueToCheck) <= 0)
                return "Error. Please enter a positive integer number";
            return "";
        case 3:
            if (Number(valueToCheck) != 1 && Number(valueToCheck) != 2 && Number(valueToCheck) != 3 && Number(valueToCheck) != 4)
                return "Error. Please select 1 or 2 or 3 or 4, for the shape content";
            return "";
    }
}
function printShape(contentType, shapeType, firstArgument, secondArgument) {
    var innerLoopEnd = 0;
    var outterLoopEnd = 0;
    var shapePerimeter = 0;
    var shapeArea = 0;
    var shapeTypeString = "";
    var valToPrint = "*";
    switch (shapeType) {
        case 1:
            shapeTypeString = "Square";
            shapePerimeter = 4 * firstArgument;
            shapeArea = firstArgument * firstArgument;
            innerLoopEnd = firstArgument - 1;
            outterLoopEnd = firstArgument - 1;
            break;
        case 2:
            shapeTypeString = "Rectangle";
            shapePerimeter = 2 * firstArgument + 2 * secondArgument;
            shapeArea = firstArgument * secondArgument;
            outterLoopEnd = secondArgument - 1;
            innerLoopEnd = firstArgument - 1;
            break;
        case 3:
            shapeTypeString = "Triangle";
            shapePerimeter = 2 * firstArgument + firstArgument * Math.sqrt(2);
            shapeArea = firstArgument * firstArgument / 2;
            outterLoopEnd = firstArgument - 1;
            break;
        case 4:
            shapeTypeString = "Rhombus";
            shapePerimeter = 4 * firstArgument;
            shapeArea = firstArgument * firstArgument;
            innerLoopEnd = 2 * firstArgument - 1;
            outterLoopEnd = 2 * firstArgument - 2;
            break;
    }
    for (var i = 0; i <= outterLoopEnd; i++) {
        if (shapeType == 3)
            innerLoopEnd = i;
        var specialCounterForRhombusOption3 = 1;
        for (var j = 0; j <= innerLoopEnd; j++) {
            switch (contentType) {
                case 1:
                    valToPrint = "*";
                    if (shapeType == 4) {
                        if ((i < firstArgument) && (i < firstArgument && (j < firstArgument - i - 1 || j > (firstArgument + i - 1))))
                            valToPrint = "&nbsp";
                        else if (i >= firstArgument && (j <= ((i) % firstArgument) || j > 2 * firstArgument - 2 - (i) % firstArgument - 1))
                            valToPrint = "&nbsp";
                        if (((i < firstArgument)
                            &&
                                ((firstArgument - j - i) % 2 == 0)
                            &&
                                i >= 1
                            &&
                                j >= firstArgument - i - 1
                            &&
                                j < 2 * firstArgument)
                            ||
                                i >= firstArgument
                                    &&
                                        ((firstArgument - j - i) % 2 == 0)
                                    &&
                                        (i < 2 * firstArgument - 2)
                                    &&
                                        (j >= i - firstArgument + 2)
                                    &&
                                        (j <= 2 * firstArgument)) {
                            valToPrint = "&nbsp";
                        }
                    }
                    break;
                case 2:
                    if (j == 0 || j == innerLoopEnd || i == 0 || i == outterLoopEnd)
                        valToPrint = "*";
                    else
                        valToPrint = "&nbsp";
                    if (shapeType == 4) {
                        valToPrint = "*";
                        if ((i < firstArgument) && j != (firstArgument - i - 1) && j != (firstArgument + i - 1))
                            valToPrint = "&nbsp";
                        else if (i >= firstArgument && (j != ((i + 1) % firstArgument) && j != 2 * firstArgument - 2 - (i) % firstArgument - 1))
                            valToPrint = "&nbsp";
                    }
                    break;
                case 3:
                    valToPrint = (j + 1).toString();
                    if (shapeType == 4) {
                        if (i < firstArgument && (j >= (firstArgument - (i)) && j <= (firstArgument + i))) {
                            valToPrint = specialCounterForRhombusOption3.toString();
                            specialCounterForRhombusOption3++;
                        }
                        else if (i >= firstArgument && (j > ((i + 1) % firstArgument) && j <= (2 * firstArgument - 2 - (i) % firstArgument))) {
                            valToPrint = specialCounterForRhombusOption3.toString();
                            specialCounterForRhombusOption3++;
                        }
                        else
                            valToPrint = "&nbsp";
                        if (((i < firstArgument)
                            &&
                                ((firstArgument - j - i + 1) % 2 == 0)
                            &&
                                i >= 1
                            &&
                                j >= firstArgument - i
                            &&
                                j <= 2 * firstArgument)
                            ||
                                i >= firstArgument
                                    &&
                                        ((firstArgument - j - i + 1) % 2 == 0)
                                    &&
                                        (i < 2 * firstArgument - 2)
                                    &&
                                        (j >= i - firstArgument + 2)
                                    &&
                                        (j <= 2 * firstArgument)) {
                            specialCounterForRhombusOption3--;
                            valToPrint = "&nbsp";
                        }
                    }
                    break;
                case 4:
                    valToPrint = (innerLoopEnd - j + 1).toString();
                    if (shapeType == 3)
                        valToPrint = (firstArgument - j).toString();
                    if (shapeType == 4) {
                        if (i < firstArgument && (j >= (firstArgument - (i)) && j <= (firstArgument + i))) {
                            valToPrint = (firstArgument - specialCounterForRhombusOption3 + 1).toString();
                            specialCounterForRhombusOption3++;
                        }
                        else if (i >= firstArgument && (j > ((i + 1) % firstArgument) && j <= (2 * firstArgument - 2 - (i) % firstArgument))) {
                            valToPrint = (firstArgument - specialCounterForRhombusOption3 + 1).toString();
                            specialCounterForRhombusOption3++;
                        }
                        else
                            valToPrint = "&nbsp";
                        if (((i < firstArgument)
                            &&
                                ((firstArgument - j - i + 1) % 2 == 0)
                            &&
                                i >= 1
                            &&
                                j >= firstArgument - i
                            &&
                                j <= 2 * firstArgument)
                            ||
                                i >= firstArgument
                                    &&
                                        ((firstArgument - j - i + 1) % 2 == 0)
                                    &&
                                        (i < 2 * firstArgument - 2)
                                    &&
                                        (j >= i - firstArgument + 2)
                                    &&
                                        (j <= 2 * firstArgument)) {
                            specialCounterForRhombusOption3--;
                            valToPrint = "&nbsp";
                        }
                    }
                    break;
            }
            document.write(valToPrint + " ");
        }
        document.write("<br/>");
    }
    if (shapeType != 4)
        document.write("<br/><br/>" + shapeTypeString + " Perimeter: " + shapePerimeter + "<br/>" +
            (shapeTypeString + " Area: " + shapeArea));
    else
        document.write("<br/><br/>" + shapeTypeString + " Perimeter: " + shapePerimeter + "<br/>" +
            (shapeTypeString + " Area (for 90 degrees): " + shapeArea));
}
//# sourceMappingURL=app.js.map