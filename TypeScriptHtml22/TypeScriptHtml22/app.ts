let teacher1: Teacher=new Teacher("Anna", "math");

let studentsArr: Student[] = new Array<Student>(4);

let student1: Student = new Student("Elad", 90, "elad@gmail.com", 20);
let student2: Student = new Student("Liran", 92, "liran@gmail.com", 21);
let student3: Student = new Student("Noa", 89, "noa@gmail.com", 18);
let student4: Student = new Student("Tom", 81, "tom@gmail.com", 24);

studentsArr[0] = student1;
studentsArr[1] = student2;
studentsArr[2] = student3;
studentsArr[3] = student4;

let team1: Team = new Team(10);

team1.serialNum = 404;

team1.printClassInfo();

//document.write(team1.printClassInfo()+"");