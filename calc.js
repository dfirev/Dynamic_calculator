function dis(n){
    console.log(`Button ${n} pressed`)
    document.getElementById("result").value+=n
}
function clr(){
    document.getElementById("result").value = ""
}
function solve(){
    let x = document.getElementById("result").value;
    document.getElementById("result").value = eval(x);
}
