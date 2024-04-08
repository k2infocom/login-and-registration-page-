let page = document.querySelector(".Login");
let signUpLink = document.querySelector(".sign-up");
let signInLink = document.querySelector(".sign-in");

signUpLink.addEventListener("click" , () =>{
    page.classList.add("animet-signIn");
    page.classList.remove("animet-signUp");
});

signInLink.addEventListener("click" , () =>{
    page.classList.add("animet-signUp");
    page.classList.remove("animet-signIn");
});