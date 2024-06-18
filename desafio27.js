document.getElementById("cep").addEventListener("blur", function () {
  let cep = this.value.replace(/\D/g, "");

  if (cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          document.getElementById("rua").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("localidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
        } else {
          alert("CEP não localizado.");
          clearAddressFields();
        }
      })
      .catch((error) => {
        alert("Erro ao encontrar o CEP");
        console.error("Erro:", error);
        clearAddressFields();
      });
  } else {
    clearAddressFields();
  }
});

function clearAddressFields() {
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("uf").value = "";
}

$(document).ready(function () {
  $("#cep").mask("00000-000");
});

function validacaoEmail() {
  var email = document.querySelector("#email").value;
  var error = document.querySelector("#erro-email");

  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regex.test(email)) {
      error.innerHTML = "E-mail inválido";
  } else {
      error.innerHTML = "";
  }
}



