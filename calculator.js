var display =document.getElementById('display')
function getNum(num){
    display.value += num 

    
}
function allClear(){
    display.value = ""
}
function calculate(){
    display.value = eval(display.value)
}
