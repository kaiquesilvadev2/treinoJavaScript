(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    // btn.addEventListener("click", function (e) {

    // })

    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value)
        if (!txtTitulo.value) {
            alert("Preencha todos os campos", function () {
                txtTitulo.focus()
            })
            e.preventDefault()

        }
    })
})()