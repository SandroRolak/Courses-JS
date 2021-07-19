var xhr = new XMLHttpRequest();
var documento = {
        "userId": 1,
        "id": 12,
        "title": "Notícia exclusiva",
        "body": "Teste para utilizar o AJAX"
      }
      
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("post").innerHTML = xhr.response;
    } else if (xhr.readyState == 4 && xhr.status == 404) {
        document.getElementById("post").innerHTML = "404";
    }
}

xhr.open("POST", "http://https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify(documento));

