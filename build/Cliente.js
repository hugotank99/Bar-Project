"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(name, age) {
        this.name = name;
        this.age = age;
    }
    Cliente.prototype.withdrawDrink = function () {
        return console.log("Voc\u00EA retirou os dois drinks. O bar dos Devs agradece a sua presen\u00E7a, espero que n\u00E3o tenha travado!\n\n");
    };
    return Cliente;
}());
exports.Cliente = Cliente;
