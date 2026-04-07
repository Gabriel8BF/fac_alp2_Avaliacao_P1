//Gabriel Barros Freitas
//Start day(YYMMDD): 26-04-06
/**Description: 1) (6,0 pts) Faça um algoritmo que peça para o usuário informar os valores de um array multidimensional 3x3.
Exiba o array para o usuário, e após isso, peça para o usuário informar um número de 1 a 3.
Dependendo da opção que o usuário escolher acontecerá o seguinte:
-1 vai retornar o somatório de todos os elementos da linha 1.
-2 vai retornar a multiplicação da diagonal da matriz.
-3 vai retornar a quantidade total de números pares presente na matriz inteira
-4 encerrar o programa
IMPORTANTE: O programa só deve iniciar se eu escolher a opção 4, caso o contrário ao final da operação ele deverá pedir novamente
para eu informar uma das 4 opções

Dica: um array 3x3 é um array com 3 elementos onde cada linha é um outro array com 3 elementos como o que está embaixo:

    [
        [?,?,?],
        [?,?,?],
        [?,?,?],
    ]

*/

const readlineSync=require('readline-sync');//usar o readlinesync, permite inserção de arquivos pelo teclado
function line() {
    console.log("\n____________________\n");
}
let opcao;
let matriz=[];//inicializando matriz vazia





for(let i=0;i<3;i++){
    let linha=[];
    for(let j=0;j<3;j++){
        let numero;
        do {//repetição até que o numero entrado seja correto.
            numero=readlineSync.question("Digite o numero a ser inserido na posição// ["+ (i+1) +"]"+" ["+ (j+1) +"] :");
            if(isNaN(numero)){//Verificar se of valor não é um numero, "is Not a Number"
                   console.log("Valor inválido.Não é número.\n");
                   numero = null;
            } else{
                numero=Number(numero)//Converte o "valor" do parênteses pra um valor numérico, quando possivel.
                if(Number.isInteger(numero)){//Confere se o numero é inteiro
                    linha.push(numero); //adiciona na linha
                    console.log("Posição ["+ (i+1) +"]"+" ["+ (j+1) +"] preenchida.")
                }else{
                    console.log("Valor Inválido. Não é inteiro.\n");
                    numero = null;
                }
            }
                 
        } while (numero === null);     
    }
    matriz.push(linha);//adiciona o array linha na posição atual do array linha
}
            // Exibe a matriz no console
            console.log("Matriz 3x3:");
            for (let i = 0; i < 3; i++) {
                console.log(matriz[i]);
                console.log("\n");
            }




while(opcao != 4){//Sair quando a opção selecionada do menu for 4

    console.log("\n________Menu_________\n");
    console.log("[1]-Somatório de todos os elementos da linha 1;\n");
    console.log("[2]-Multiplicação da diagonal da matriz;\n");
    console.log("[3]-Quantidade total de números pares presente na matriz inteira;\n");
    console.log("[4]-Fechar Programa;\n");
    console.log("[5]-Exibir Matriz Novamente;\n");

    opcao = readlineSync.question("Escolha uma opcao: ");



    switch (opcao){
        case "1":{
            let somatorio=0;
            for(let i=0;i<3;i++){
                somatorio += matriz[0][i];
            }

            console.log("\nSomatório da linha 1: "+somatorio);
            line();
        break    
        }
        case "2":{
            let multdiago=1;
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    if(i==j){
                        multdiago*=matriz[i][j];
                    }
                }
            }

            console.log("\n Multiplicação da digonal da matriz: "+multdiago+"\n");
            line();
        break 
        }
        case "3":{
            let contpar=0;
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    if(matriz[i][j]%2==0){
                        contpar++;
                    }
                }
            }
            console.log("\n Existem "+contpar+" numeros pares na matriz.\n");
            line();        
        break 
        }
    
        case "4":{
            line();
            console.log("Encerrando o programa...");
            line();
        break
        }
        case "5":{
            // Exibe a matriz no console
            console.log("Matriz 3x3:");
            for (let i = 0; i < 3; i++) {
                console.log(matriz[i]);
            }
        break
        }

        default :{
            console.log("Opção Invalida\n");
            line();
        break
        }
    }
}