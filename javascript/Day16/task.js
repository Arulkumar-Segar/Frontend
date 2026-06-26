// task 1
const check =()=>{
    const mark = document.getElementById("studentMark").value
    const grade = document.getElementById("show")
    
    console.log(mark);
    if(mark >= 90 && mark <=100){
        grade.innerHTML=" student Grade:A"
    }
    else if(mark >= 80 ){
        grade.innerHTML=" student Grade:B"
        // console.log("student grade:B");
    }
    else if(mark>=70){
        grade.innerHTML=" student Grade:C"
        // console.log("Student grade:C");
    }
    else if(mark >= 60){
        grade.innerHTML=" student Grade:D"
        // console.log("Student grade:D");
    }
    else if(mark < 60){
        grade.innerHTML=" student Grade:Fail"
        
        // console.log("Fail");
    }
    else{
        grade.innerHTML=" student Grade:Invalid mark"
        // console.log("invalid mark");
    }
}

// task 2
const oddOrEven=()=>{
    const num = document.getElementById('oddEven').value
    const ans = document.getElementById("ans")
    if(num % 2=== 0){
        ans.innerHTML ="number is:Even"
    }else{
        ans.innerHTML="number is:Odd"
    }
}

// task3
const arr = []
const sum =()=>{
    const number = document.getElementById("arrNumber").value.split(",")
    const total=document.getElementById("sum")
    // arr.push(number)
    let count =0;
    for(let i=0;i<number.length;i++){
        count += Number(number[i])
        // count++
    }
    console.log(count);
    total.innerText="Total:"+ count;

}
