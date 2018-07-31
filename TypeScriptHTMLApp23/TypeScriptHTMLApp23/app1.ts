let cinema1: cinema = new cinema("Yes Planet", 40);



let personArr: Array<Person> = new Array<Person>(15);
pArr(personArr);
document.write("person array:" + personArr);





function pArr(pArr: Person[]): void {

    let i: number;
    let rand: number;

    for (i = 0; i < pArr.length; i++) {

        rand = Math.round(Math.random() * (2 - 0) + 0);

        if (rand == 0) //student
            pArr[i] = new Student("student obj", 21, "208435859", false);

        if (rand == 1)//teacher
            pArr[i] = new Teacher("teacher obj", 30, "123456789", true);

        if (rand == 2) //worker
            pArr[i] = new Worker1("worker obj", 35, "123123123", false);
    }
}

function moneyDay(pArr: Person[], cinemaF: cinema): void {

    let sum: number = 0;
    let i: number;
    let countStudent: number = 0;
    let countTeacher: number = 0;
    let countWorker: number = 0;
    let studentPrice: number = cinemaF.price - ((cinemaF.price * cinemaF.studentPercent) / 100);
    let teacherPrice: number = cinemaF.price - ((cinemaF.price * cinemaF.teacherPercent) / 100);

    for (i = 0; i < pArr.length; i++) {
        //studant price
        if (pArr[i] instanceof Student) {
            sum = sum + studentPrice;
            countStudent++;
        }

        //teacher price
        else if (pArr[i] instanceof Teacher) {
            sum = sum + teacherPrice;
            countTeacher++;
        }

        //worker price
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