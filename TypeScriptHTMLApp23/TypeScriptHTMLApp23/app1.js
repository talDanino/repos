var cinema1 = new cinema("Yes Planet", 40);
var personArr = new Array(15);
pArr(personArr);
document.write("person array:" + personArr);
function pArr(pArr) {
    var i;
    var rand;
    for (i = 0; i < pArr.length; i++) {
        rand = Math.round(Math.random() * (2 - 0) + 0);
        if (rand == 0)
            pArr[i] = new Student("student obj", 21, "208435859", false);
        if (rand == 1)
            pArr[i] = new Teacher("teacher obj", 30, "123456789", true);
        if (rand == 2)
            pArr[i] = new Worker1("worker obj", 35, "123123123", false);
    }
}
function moneyDay(pArr, cinemaF) {
    var sum = 0;
    var i;
    var countStudent = 0;
    var countTeacher = 0;
    var countWorker = 0;
    var studentPrice = cinemaF.price - ((cinemaF.price * cinemaF.studentPercent) / 100);
    var teacherPrice = cinemaF.price - ((cinemaF.price * cinemaF.teacherPercent) / 100);
    for (i = 0; i < pArr.length; i++) {
        //studant price
        if (pArr[i] instanceof Student) {
            sum = sum + studentPrice;
            countStudent++;
        }
        else if (pArr[i] instanceof Teacher) {
            sum = sum + teacherPrice;
            countTeacher++;
        }
        else if (pArr[i] instanceof Worker1) {
            sum = sum + cinemaF.price;
            countWorker++;
        }
        document.write("sum of money: " + sum + "<br/>");
        document.write("price for movie: " + cinemaF.price + "<br/>");
        document.write("number of people: " + pArr.length + "<br/>");
        document.write("number of students: " + countStudent + "<br/>");
        document.write("number of teachers: " + countTeacher + "<br/>");
        document.write("number of workers: " + countWorker + "<br/>");
    }
}
//# sourceMappingURL=app1.js.map