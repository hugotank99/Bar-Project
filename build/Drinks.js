"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomeDrinks = exports.Drink = void 0;
var Drink = /** @class */ (function () {
    function Drink(teorAlcoolico) {
        this.teorAlcoolico = teorAlcoolico;
    }
    return Drink;
}());
exports.Drink = Drink;
var nomeDrinks;
(function (nomeDrinks) {
    nomeDrinks[nomeDrinks["bDeVariaveis"] = 0] = "bDeVariaveis";
    nomeDrinks[nomeDrinks["lagoaTypeS"] = 1] = "lagoaTypeS";
    nomeDrinks[nomeDrinks["ginConst"] = 2] = "ginConst";
    nomeDrinks[nomeDrinks["cVinho"] = 3] = "cVinho";
})(nomeDrinks || (nomeDrinks = {}));
exports.nomeDrinks = nomeDrinks;
