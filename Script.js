function Submit(){
    let dados_formulario = formulario();
    registro(dados_formulario)
}

function formulario(){
    let = dados_formulario = {};
    dados_formulario["nome"] = window.document.getElementById("nome").value;
    dados_formulario["sobrenome"]= window.document.getElementById("sobrenome").value;
    dados_formulario["enderecoEntrega"]= window.document.getElementById("enderecoEntrega").value;
    dados_formulario["numero"]= window.document.getElementById("numero").value;
    return dados_formulario;
}

function registro(data){
    let table = window.document.getElementById("list").getElementsByTagName('tbody')[0];
    let linha = table.insertRow(table.length);
    obj1 = linha.insertObjs(0);
    obj1.innerHTML = data.nome;
    obj2 = linha.insertObjs(1);
    obj2.innerHTML = data.sobrenome;
    obj3 = linha.insertObjs(2);
    obj3.innerHTML = data.enderecoEntrega;
    obj4 = linha.insertObjs(3);
    obj4.innerHTML = data.numero;
    obj4 = linha.insertObjs(4);
    obj4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                      <a>Excluir</a> `;

}
