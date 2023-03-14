let x = 0;
let array = Array()
function add_element_to_array() {
    array[x] = document.getElementById("textValue").value;
    alert(" Phần tử" + array[x] + " được thêm vào vị trí " + x);
    x++;
    document.getElementById("textValue").value = "";
}
function display_array() {
    let e = "<hr>";
    for(let i = 0; i < array.length; i++){
        e += "Phần tử " + i + " = " + array[i] + "<br>";
    }
    document.getElementById("result").innerHTML = e;
}