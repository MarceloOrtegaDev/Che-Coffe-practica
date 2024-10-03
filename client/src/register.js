// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";

const $form = document.getElementById("register-form");

$form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData($form); 7

    const entries = Object.fromEntries(formData.entries())


    // Realizar una solicitud POST a la API de registro
    fetch("http://localhost:4321/auth/sign-up", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entries),
    })
        .then(res => {
            if (res.ok) {
                const result = res.json();
                console.log(result)
                window.location.href = "/login.html"
            } else {
                alert("tu mama")
            }
        })
})
