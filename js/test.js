document.querySelector("form").addEventListener("submit",function(e) {
    console.log("enviar datos--------");
    e.preventDefault();

    console.log(JSON.stringify(Object.fromEntries(body)));
   
    body.forEach((x,y)=>console.log(x,":",y))

    let data=JSON.stringify({
        name:"denis",
        job:"ok"
    })
    req.send(data);
    
});

//https://www.google.com/search?q=bebida+coca+cola

var url= new URL("https://www.google.cl/search");
url.searchParams.append("q","ñandú");
console.log(url);


var body=new FormData(document.querySelector("form"));

var req= new XMLHttpRequest();
req.open("PUT","https://reqres.in/api/users/2",true);
req.setRequestHeader('Content-Type', 'application/json');
req.setRequestHeader('mode','CORS')

req.addEventListener("load",function(e){
    console.log(req.responseText);
})
req.onreadystatechange=function(e){
    if(req.readyState==4){
        if(req.status==200){
            console.log("OK!")
            console.log(req.responseText);
        }else{
            console.log("Error!")
        }
    }
}
//req.send(body);