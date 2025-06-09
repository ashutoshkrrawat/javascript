//* Important keywords

/*

super()
extends
instanceof

*/

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

//! Here Teacher inherits properties and methods of User
class Teacher extends User{
    constructor(username, email, password){
        super(username) //! this sends username to User, where it is set (calls super constructor)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("teacher1", "teacher1@teacher.com", "123")

teacher1.logMe() //ok (since teacher1 can access methods of User)
teacher1.addCourse() //ok

const onlyUser = new User("Pranaw")

onlyUser.logMe() //ok
//onlyUser.addCourse() //! error (since it can only be accessed by Teacher)

//Note: It checks if any object is instance of any class
console.log(teacher1 instanceof User); //! true : since taecher1 is instance of Teacher, Teacher is again an instance of User
