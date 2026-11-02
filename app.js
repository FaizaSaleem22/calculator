var display = document.getElementById("display")
function giveValue(e){
    display.value += e;
}
function clearAll(){
    display.value = ""
}
function singleDelete(){
    display.value = display.value.slice(0,-1)
}
function calculate(){
    if(display.value.includes("//") || display.value.includes("**") ){
            display.value = "Error"
        }
   try{
        display.value = eval(display.value)
        if(!isFinite(display.value)){
            display.value="Error"
        }
    }
    catch{
        display.value = "Error"
    }
}