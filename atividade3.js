let tarefas = [];

// Função para adicionar novas tarefas
function adicionarTarefa(descricao) {
    const tarefa = {
        descricao: descricao,
        concluida: false
    };
    tarefas.push(tarefa);
}

// Função para listar todas as tarefas
function listarTarefas() {
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.descricao} - ${tarefa.concluida ? 'Concluída' : 'Pendente'}`);
    });
}

// Função para remover uma tarefa específica
function removerTarefa(indice) {
    if (indice > 0 && indice <= tarefas.length) {
        tarefas.splice(indice - 1, 1);
    } else {
        console.log('Índice inválido');
    }
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(indice) {
    if (indice > 0 && indice <= tarefas.length) {
        tarefas[indice - 1].concluida = true;
    } else {
        console.log('Índice inválido');
    }
}

// Exemplo de uso
adicionarTarefa('Estudar JavaScript');
adicionarTarefa('Fazer exercícios');
listarTarefas();
concluirTarefa(1);
listarTarefas();
removerTarefa(2);
listarTarefas();