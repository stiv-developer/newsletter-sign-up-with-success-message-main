

function subscribe(){

    var email = document.getElementById("email");

    var groupParent = email.closest(".form-control");

    var span = groupParent.querySelector(".message-required");

    var section_subscribe = document.querySelector(".section-subscribe");

    var section_message = document.querySelector(".section-message");

    var view_email = document.querySelector(".email");

    if(email.value.trim() === "" || !esEmailValido(email.value)){
        email.classList.add("bg-input-error");
        span.style.display = "block"
    } else{
        view_email.textContent = email.value;
        section_subscribe.style.display = "none";
        section_message.style.display = "block"
    }

}

function esEmailValido(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}