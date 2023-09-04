function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("sub").value,
        phone:document.getElementById("tel").value,
        message:document.getElementById("message").value,

    };
    const serviceID ="service_eds4uid";
const templateID = "template_kyjhzdh"


emailjs.send(serviceID,templateID,params)
.then(
    res=>{
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("sub").value="";
document.getElementById("tel").value="";
document.getElementById("message").value="";
console.log(res);
alert("message sent successfully")
    })

    .catch((error)=>console.log(err));
    

}
