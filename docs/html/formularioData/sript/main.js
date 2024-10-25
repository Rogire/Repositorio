const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConf = document.getElementById('passwordconf');
let passed = false;

form.addEventListener('submit', (event) => {
    check();
    if(passed === false){
        event.preventDefault();
    }
});

function check() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfValue = passwordConf.value;

    if(usernameValue === "") {
        SetErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
        setSucessFor(username);
    }

    if (emailValue === "") {
        SetErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        SetErrorFor(email, "Insira um email válido");
    } else {
        setSucessFor(email);
    }

    if (passwordValue === "") {
        SetErrorFor(password, "A senha é obrigatória");
    } else if (passwordValue.length < 7) {
        SetErrorFor(password,"A senha deve conter pelo menos 7 caracteres")
    } else {
        setSucessFor(password);
    }

    if (passwordConfValue === "") {
        SetErrorFor(passwordConf, "Confirme a senha");
    } else if (passwordValue !== passwordConfValue) {
        SetErrorFor(passwordConf,"As senhas devem coincidir");
    } else {
        setSucessFor(passwordConf);
    }

}

function SetErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    passed = false;

    small.innerText = message;
    formControl.classList.add("form-control-error");
};
function setSucessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    passed=true;
    formControl.classList.add("form-control-success");
    small.innerText = ""

};

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

