interface NewCliente{
     name: string;
     age: number;
}

class Cliente {
    public name: string;
    public age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
}

  public withdrawDrink (){
    return console.log(`Você retirou os dois drinks. O bar dos Devs agradece a sua presença, espero que não tenha travado!\n\n`);
  }

   
}

export { Cliente };