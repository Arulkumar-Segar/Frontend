const charcCount =()=>{
    var inputText = document.getElementById("inputText").value
    document.getElementById("charcCount").innerHTML = "Total Character:" + inputText.length;
}

// task2
function checkAge() {
    let age = parseInt(document.getElementById("age").value);
    let category = "";

    if (age >= 0 && age <= 12) {
        category = "Child";
    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
    } else if (age >= 20 && age <= 59) {
        category = "Adult";
    } else if (age >= 60) {
        category = "Senior Citizen";
    } else {
        category = "Please enter a valid age.";
    }

    document.getElementById("result").innerHTML = category;
}

// task3
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("modeBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "Light Mode";
    } else {
        btn.innerHTML = "Dark Mode";
    }
}

// task4
const ticketCount = ()=>{
    const tickets = document.getElementById("ticket").value
    const ticketprice = 150;
    const total = tickets * ticketprice
    document.getElementById("TotalAmount").innerHTML = "Total Amount:Rs." + total
}

// task5
const prfileCard = ()=>{
    const profileName = document.getElementById("name").value
    const profileRole = document.getElementById("role").value
    const profileCompany = document.getElementById("company").value

    document.getElementById("profile").innerHTML=`
        <div class="card">
        <h2>Name:${profileName}</h2>
        <p>Role:${profileRole}</p>
        <p>Company:${profileCompany}</p>
        </div>
    
    `}
    // task6

    const search = ()=>{
        const arr = ["vijay","ajith","surya","sk"]
        const heroName =document.getElementById("heroName").value.toLowerCase()

        if(arr.includes(heroName)){
            document.getElementById("hero").innerHTML="Found"
        }
        else{
            document.getElementById("hero").innerHTML="Not Found"
        }

    }

    // task7
    const lucky = ()=>{
        const inputNum = parseInt(document.getElementById("inputNum").value)
        const luckynum = document.getElementById("luckynumber")    
    
        if(inputNum === 7 || inputNum === 14 || inputNum ===21||inputNum===28 ){
           return luckynum.innerHTML = "Lucky Number"
        }
        else{
           return luckynum.innerHTML = "Normal number"
        }


    }

    // task 8

    const Productcalculator = () => {
        const ProductName = document.getElementById("productName").value
        const ProductQty = parseInt(document.getElementById("productQty").value)
        const ProductPrice = parseInt(document.getElementById("productPrice").value)
        
        const Total = ProductQty * ProductPrice
        
        document.getElementById("productdet").innerHTML =`
           <h3>Product:${ProductName}</h3>
            <h3>Quantity:${ProductQty}</h3>
            <h3>Total:${Total}</h3>

        `
    }


    // task 9
    const quote =[
        "Success is not final, failure is not fatal.",
        "Stay hungry, stay foolish.",
        "Push yourself, because no one else is going to do it for you.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Dream big and dare to fail."
    ]
    const randomQuote = ()=>{
        const randomIndex = Math.floor(Math.random() * quote.length)
        document.getElementById('showQuote').innerHTML=quote[randomIndex]

    }

    // task 10
    var idCounter = 1001;
    const studID = ()=>{
        const studname = document.getElementById("studName").value;
        const course = document.getElementById("studCourse").value;

        const studentID = "STU" + idCounter;
        idCounter++;

        document.getElementById("id").innerHTML = `
            <div class="card">
                <h3>Student ID: ${studentID}</h3>
                <p><strong>Name:</strong> ${studname}</p>
                <p><strong>Course:</strong> ${course}</p>
            </div>
        `;
    }
