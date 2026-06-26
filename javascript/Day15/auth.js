const database =[]

const register=(e)=>{

    e.preventDefault()
    const userName = document.getElementById("username").value
    const userEmail = document.getElementById("useremail").value
    const userPassword = document.getElementById("password").value

    if(userDetails.userName==="" || userDetails.userEmail === "" || userDetails.userPassword === ""){
        alert("please enter the value")
        return
    }
    const userDetails ={userName,userEmail,userPassword}
    // const checkE
    console.log(userDetails);

database.push(userDetails)
console.log(database);

}