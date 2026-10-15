let fila = ["Ana", "Bruno", "Carla", "Diego", "Eduarda", "Felipe", "Gabriela"];
console.log("Fila inicial:", fila);

fila.push("Henrique");
console.log("Após adicionar cliente comum (push):", fila);

fila.unshift("Dona Maria (Prioritária)");
console.log("Após adicionar cliente prioritário (unshift):", fila);

let atendido = fila.shift();
console.log("Cliente atendido (shift):", atendido);
console.log("Fila após o atendimento:", fila);

let desistente = fila.pop();
console.log("Cliente que desistiu (pop):", desistente);
console.log("Fila final:", fila);