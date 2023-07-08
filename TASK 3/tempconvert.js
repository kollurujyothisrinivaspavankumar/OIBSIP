const CalTemp=() =>{
    const inputTemp=document.getElementById('temperature').value;
    const tempSelected=document.getElementById('type');
    const valueTemp=type.options[tempSelected.selectedIndex].value;

    const ctf=(celsius)=>{
        let Fahrenheit = ((celsius * 9/5)+32).toFixed(1);
        return Fahrenheit;
    }

    const ftc=(fahrenheit)=>{
        let Celsius=((fahrenheit-32)*5/9).toFixed(1);
        return Celsius;
    }

    if (valueTemp=='celsius'){
        window.alert(document.getElementById("result").innerHTML = ctf(inputTemp)+"Fahrenheit");
    }
    else{
        window.alert(document.getElementById("result").innerHTML=ftc(inputTemp)+"Celsius");
    }
}