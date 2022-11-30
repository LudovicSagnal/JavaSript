function Stagiaire (nom,prenom,age, ville) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.ville = ville;
    this.presentation = () =>{
    console.log(this.prenom + " " + this.nom + " est né à " + this.ville.nom + " et a " + this.age + " ans");
};
}



function Ville (nom, habitant, pays) {
    this.nom = nom;
    this.habitant = habitant;
    this.pays = pays;
    this.info = () => {
        console.log(this.nom + " est une ville de", this.habitant + " habitants et se trouve en " + this.pays);
    }
}
let carpet = new Ville("Carpentras", 30000, "France");
let mtp = new Ville("Montpellier", 300000, "France");
let moi = new Stagiaire("Sagnal", "Ludovic", 38, carpet);
let lance = new Stagiaire("Carrau", "Lancelot", 20, mtp);

console.log(moi);

moi.presentation();
carpet.info();
lance.presentation();
mtp.info();