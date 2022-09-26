import PromptSync = require('prompt-sync')
import { Drink, nomeDrinks } from './Drinks';
import { showMenu } from "./showMenu";
import { Cliente } from "./Cliente";
import { SoftCrash } from './SoftCrash';
import { Vinho } from './Vinho';
import { BatidaVariaveis } from './BatidaVariaveis';
import { LagoaTypes } from './LagoaTypeS';
import { GinConst } from './GinConst';
import { HeavyCrash } from './HeavyCrash';


const prompt = PromptSync();

console.clear();

const cliente = new Cliente(prompt('Digite seu nome: '),prompt('Digite sua idade: '))

const vinho = new Vinho (14);
const batidavariaveis = new BatidaVariaveis (0);
const lagoaTypes = new LagoaTypes (12);
const ginConst = new GinConst (14);


console.table(cliente);

let i = 0

let nDrinks = []

do {
    if ( cliente.age >= 18) {
        console.log ('Olá Dev! Temos um catálogo de drinks com e sem álcool disponível para você!');
    } else {
        console.log('\n\nBoa noite pequene padawan!  Vimos que você não tem idade para consumir nossas cortesias alcólicas. Não tem problema, solicite um atendente e ele te dirá as melhores opções sem álcool para consumo. Seja bem vinde e até breve!\n\n');
        break;
    }


const select = showMenu()

if (select == nomeDrinks.bDeVariaveis) {
    console.log('\nVocê escolheu Batidade de Variáveis!\n\n');
    heavyCrash (batidavariaveis)

}
if (select == nomeDrinks.lagoaTypeS) {
    console.log('\nVocê escolheu Lagoa TypeS!\n\n');
    softCrash(lagoaTypes);
}
if (select == nomeDrinks.ginConst) {
    console.log('\nVocê escolheu Gin Const!\n\n');
    heavyCrash (ginConst)
}
if (select == nomeDrinks.cVinho) {
    console.log('\nVocê escolheu Console.Vinho!\n\n');
    softCrash(vinho);
}

i++
nDrinks [i]

} while (i < 2){
    
}

function softCrash (drink: SoftCrash){
    return console.log('Você travará de levinho!\n\n');
    
}

function heavyCrash (drink: HeavyCrash){
    return console.log('Você travará mais que windows 95!\n\n');
    


}

if (cliente.age >= 18) {
cliente.withdrawDrink();
}



