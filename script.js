form = document.querySelector(".wrapper form"),
fullURL = document.querySelector("input"),
 shortenBtn = document.querySelector("button"),

 form.onsubmit = (e) => {
    e.preventDefault();
 }

 shortenBtn.onclick = () => {
    let xhr = new XMLHttpRequest(); 
    xhr.open("POST","php/url-controller.php",true);
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
            let data = xhr.response;
            console.log(data);
        }
    }
    // Send from data to php file
    let formData = new FormData(form); //Creating new form data
    xhr.send(formData);
 }