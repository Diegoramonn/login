document.getElementById("formCadastro").addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    cidade: document.getElementById("cidade").value,
    telefone: document.getElementById("telefone").value
  };

  const resposta = await fetch("http://localhost:3000/pessoas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  });

  const resultado = await resposta.json();
  alert(resultado.mensagem);
});