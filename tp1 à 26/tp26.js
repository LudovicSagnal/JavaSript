class Personnages {
    constructor(pseudo, classe, sante, attaque, niveau) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = niveau;
        this.niveau = 1;
    }
    evoluer(){
        this.niveau++;
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    }
    verifierSante()  {
        if (this.sante <= 0) {
            this.sante = 0;
            console.log(`${this.pseudo} a perdu !`);
        }
    }
    get information() {
        console.log(`${this.pseudo}, ${this.classe}, a ${this.sante} points de vie et est au niveau ${this.niveau}.`);
    }
}

class Magicien extends Personnages {
    constructor(pseudo) {
        super(pseudo);
        this.classe = "Magicien";
        this.sante = 170;
        this.attaque = 90;
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;       
        console.log(`${this.pseudo} attaque ${personnage.pseudo} et lui inflige ${this.attaque} points de dégats. ${personnage.pseudo} a désormais ${personnage.sante} points de vie.`);
        personnage.verifierSante();
        this.evoluer();      
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        console.log(`${this.pseudo} attaque avec son coup spécial Puissance des Arcanes ${personnage.pseudo} (${this.attaque *5} dégats)`);
        personnage.verifierSante();
        this.evoluer();        
    }
    potionDeSante(){
        if (this.sante > 0) {
            this.sante += 50;
            console.log(`${this.pseudo} se soigne de 50 points de vie !`)
        }
    }
}

class Guerrier extends Personnages {
    constructor(pseudo) {
        super(pseudo);
        this.classe = "Guerrier";
        this.sante = 350;
        this.attaque = 50;
    }
    attaquer(personnage){
        personnage.sante -= this.attaque;
        console.log(`${this.pseudo} attaque ${personnage.pseudo} et lui inflige ${this.attaque} points de dégats. ${personnage.pseudo} a désormais ${personnage.sante} points de vie.`);
        personnage.verifierSante();
        this.evoluer(this.pseudo);     
    }
    coupSpecial(personnage){
        personnage.sante -= this.attaque * 5;
        personnage.verifierSante();
        console.log(`${this.pseudo} attaque avec son coup spécial Hache de Guerre ${personnage.pseudo} (${this.attaque* 5} dégats)`);
        this.evoluer();
    }
}

let gandalf = new Magicien ("XxGanDalfTheDaKxX");
let aragorn = new Guerrier ("AraGorn Da Best");
let gimli = new Guerrier ("Le Nain");

gandalf.attaquer(aragorn);
aragorn.attaquer(gandalf);
gandalf.potionDeSante();
gandalf.information;
// aragorn.coupSpecial(gandalf);
gimli.coupSpecial(aragorn);
aragorn.coupSpecial(gimli);
gimli.attaquer(aragorn);
gandalf.coupSpecial(gimli);
// gandalf.coupSpecial(aragorn);