let newLine = true;

function btnPressed(button) {
    if (newLine) {
        document.getElementById("inputBox").value=button; 
        newLine = false;
    } else {
        let currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;

    }
    
}