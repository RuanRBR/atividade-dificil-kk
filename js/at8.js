function criarDespesa(descricao, valor, data) {
    return {
        descricao: descricao,
        valor: valor,
        data: data
    };
}


const despesa1 = criarDespesa("Compra de supermercado", 150.75, "2024-07-05");
const despesa2 = criarDespesa("Pagamento de aluguel", 1200.00, "2024-07-01");
console.log(despesa1);
console.log(despesa2);
