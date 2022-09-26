"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = void 0;
var PromptSync = require("prompt-sync");
var Drinks_1 = require("./Drinks");
var prompt = PromptSync();
function showMenu() {
    console.log('-------- Menu de Drinks: --------\n');
    console.log('1 - Batidade de Variáveis ');
    console.log('2 - Lagoa TypeS ');
    console.log('3 - Gin Const ');
    console.log('4 - Console.Vinho\n\n');
    var option = prompt('Escolha seu Drink: ');
    var pick;
    switch (option) {
        case '1':
            pick = Drinks_1.nomeDrinks.bDeVariaveis;
            break;
        case '2':
            pick = Drinks_1.nomeDrinks.lagoaTypeS;
            break;
        case '3':
            pick = Drinks_1.nomeDrinks.ginConst;
            break;
        case '4':
            pick = Drinks_1.nomeDrinks.cVinho;
            break;
    }
    return pick;
}
exports.showMenu = showMenu;
