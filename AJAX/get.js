var xhr = new XMLHttpRequest();
var documento;
 
xhr.responseType = "json";
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        documento = xhr.response;
        console.log(documento);
    } else if (xhr.readyState == 4 && xhr.status != 200) {
        document.getElementById("result").innerHTML = "Error";
    }
}
        
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.send();