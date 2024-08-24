class hero {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;        
    }
    Attack() {
        let ataque;
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            case "ninja":
                ataque = "shuriken"
                break;
        }
        console.log (`o ${this.tipo} atacou usando ${ataque}`);
    }

}

let heroi1 = new hero("Thiago",26,"guerreiro");
heroi1.Attack();
let heroi2 = new hero("Rafael",37,"ninja");
heroi2.Attack();

