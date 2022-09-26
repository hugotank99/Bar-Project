import PromptSync = require('prompt-sync');
import { Drink } from './Drinks';
import { nomeDrinks } from './Drinks';

const prompt = PromptSync();

function showMenu() {

    console.log('-------- Menu de Drinks: --------\n');
    console.log('1 - Batidade de Variáveis ');
    console.log('2 - Lagoa TypeS ');
    console.log('3 - Gin Const ');
    console.log('4 - Console.Vinho\n\n');

    let option =  prompt ('Escolha seu Drink: ');

    let pick: nomeDrinks

    switch (option) {
        case '1':
            pick = nomeDrinks.bDeVariaveis
            break;
        case '2':
            pick = nomeDrinks.lagoaTypeS
            break;
        case '3':
            pick = nomeDrinks.ginConst
            break;
        case '4':
            pick = nomeDrinks.cVinho
            break;  
    }
    return pick;
    }

export { showMenu }