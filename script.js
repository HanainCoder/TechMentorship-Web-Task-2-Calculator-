
let rs=document.getElementById("res-sh");
function mat(num){
    rs.value+=num;
}
function Calculate(){
    try{
        rs.value=eval(rs.value);
    }
    catch(err){
        alert("Invalid , Please enter a Valid Number")
    }
}
function Clear(){
    rs.value="";
}
function del(){
    rs.value=rs.value.slice(0,-1);
}