const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color = '#0D6EFD';
    statusTxt.style.display ="block";

    let xhr = new XMLHttpRequest(); //creating new xml objetct
    xhr.open("POST","message.php", true); //sending post request to message.php file
    xhr.onload = () =>{ //once ajax loaded
        if(xhr. readyState == 4 && xhr.status == 200){ //if ajax response status is 200 & ready status is 4 means there is no any error
            let response = xhr.response; //storing ajax response in a response variable            
            //if response is an error like enter valid email address then we'll change status color to red else reset the form
            if(response.indexOf("Email and password field is required") != -1 || response.indexOf("Deculpe, falha ao enviar a mensagem")){
                statusTxt.style.color = 'red';
            }else{
                form.reset();
                setTimeout(() =>{
                    statusTxt.style.display = "none";
                }, 3000); //hide the statusTxt after 3 seconds if the message is sent
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form); //creating new formData obj. This obj is used to sendo form data
    xhr.send(formData); //sending form data

}