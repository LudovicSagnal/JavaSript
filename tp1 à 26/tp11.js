var choix = prompt("Choisissez entre trois sorts :\n boule de feu,\n trait de glace, \n chaîne d'éclairs");

try{
    switch (choix.toLowerCase()) {
        case 'boule de feu':
            alert(`Vous avez choisi boule de feu (40dg)` );
        break;
        case 'trait de glace':
            alert(`Vous avez choisi trait de glace (35dg)` );
        break;
        case "chaîne d'éclairs":
            alert(`Vous avez choisi chaîne d'éclairs (25dg)` );
        break;
        default:
            throw new Error("Les autres sorts ne sont pas de votre niveau");
    }
}
catch (e) {
    alert(e);
}
