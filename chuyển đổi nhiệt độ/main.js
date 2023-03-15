function temperatureConverter(fah){
    fah = parseFloat(fah);
    document.getElementById("outputCelsius").innerHTML = (fah-32)/1.8;
}