let array = [];

function arrayMethod(){
   
    
    let val = document.getElementById("pushval").value;
    array.push(val);
    arrayLop();
   
    
    
}
function pop(){
    array.pop();
    arrayLop();

}
function arrayLop(){
    document.getElementById("insertArea").innerHTML ="";
    document.getElementById("pushval").value = "";
    for(let A = 0; A < array.length; A++){
       
        let html = `<h1>${A+1}: ${array[A]}</h1>`;
        document.getElementById("insertArea").innerHTML += html;
}
}