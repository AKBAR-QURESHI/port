const bar = document.getElementsByClassName(".fa-bars");
const menu = document.querySelector(".navitems");

bar.addEventListener("click",()=>{
    menu.style.display == "none";

})


function sendmail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,

    }

const serviceID = "service_dt79sbk";
const templateID = "template_m1jtpev";  

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));

}

// function myfunction(){
//     const menu = document.querySelector(".navitems");
  
   
//     if(menu.style.display == "flex"){
//         menu.style.display == "none";
//     }
//     else{
//         menu.style.display == "flex";
//     }
