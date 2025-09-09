type admin={
    adminID?:string
    adminPassword?:string
}
type user={
    userId:1234,
    userPassword:'test@123',
    adminId:'admin',
    adminPassword:'admin@123'
}
type db=admin&user
let login:db={
    userId:1234,
    userPassword:'test@123',
    adminId:'admin',
    adminPassword:'admin@123'
}
console.log(login)
//optional value ? which should be defined last in the function after the required parameters

function getUser(userName:string,userId:number, status?:boolean){
 console.log("User name is " + userName + " and user id is " + userId +" and status is " + status)
}
getUser("Deepti",37,true)
getUser("Krupa",20)