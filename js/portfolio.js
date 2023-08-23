

 function navOpen(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active-1");
}


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


const cursor = document.querySelector(".cursor");
const btn = document.querySelector("button");

window.addEventListener("mousemove", (e) => {
  console.log(e);
  cursor. style.top = `${e.pageY - 4}px`;
  cursor. style.left = `${e.pageX - 4}px`;
});


// function myfunction(){
//     const menu = document.querySelector(".navitems");
  
   
//     if(menu.style.display == "flex"){
//         menu.style.display == "none";
//     }
//     else{
//         menu.style.display == "flex";
//     }


