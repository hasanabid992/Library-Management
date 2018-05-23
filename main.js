

//--Arrow Function in EcmaScript --///
let userinfo =() => {
     // Variable Initialization Using EcmaScript ---///
    let user_id = +prompt('Enter User id');
    let user_Name = prompt('Enter user Name');
    let Father_Name = prompt('Enter Father Name');
    let Class_of_student = +prompt('Enter Class of Student');
    let university_id = +prompt('Enter Your University id');
    var book = ['physics','Maths','Chemistry','zology','Biology','Pakistan Studies']
    var select = +prompt('Enter book Id from 1-6');

      ///-- Print The Results of Above Inputs ---////  
    console.log('Your User-id is :' +user_id);
    console.log('Your User Name is : '+user_Name);
    console.log('Your Father Name is :' +Father_Name);
    console.log('Your class is'+Class_of_student);
    console.log('Your University id is : '+university_id);


     if (select == 1)
    {
        console.log(book[0]);
    }
else if(select ==2 ) {
    console.log("You Choose : " +book[1]);
}
else if(select ==3 ) {
    console.log("You Choose : " +book[2]);
}
else if(select ==4 ) {
    console.log("You Choose : " +book[3]);
}
else if(select ==5 ) {
    console.log("You Choose : " +book[4]);
}
else if(select ==6 ) {
    console.log("You Choose : " +book[5]);
}
else {
    console.log('Invalid Command');
}
}
///-calling Function---///
userinfo();