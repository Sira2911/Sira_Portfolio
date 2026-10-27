
const form = document.querySelector(".contact-form")
const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
const message = document.querySelector("#message")
const nameError = document.querySelector(".name-error")
const emailError = document.querySelector(".email-error")
const messageError = document.querySelector(".message-error")
const formSuccess = document.querySelector(".form-success")



form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    let isValid = true;

    
    if (nameInput.value.trim() == "") {
       
        nameError.classList.remove("hidden")
        isValid = false;
    }

    if (emailInput.value.trim() == "") {
        emailError.classList.remove("hidden")
        isValid = false;
    }

    if (message.value.trim() == "") {
        messageError.classList.remove("hidden")
        isValid = false;
    }

   
    if (isValid) {
        
        formSuccess.classList.remove("hidden")

        
        nameError.classList.add("hidden")
        emailError.classList.add("hidden")
        messageError.classList.add("hidden")
        
        
        nameInput.value = "";
        emailInput.value = "";
        message.value = "";
    }
})

