var input1, input2;

function calculatrice () {
    var choix = parseInt(prompt("Entrez le chiffre correspondant à votre choix :\n 1. Addition\n2.Soustraction\n3.Multiplication\n4.Division"));
    if (choix >0 && choix <= 4) {
        input1 = parseInt(prompt("Entrez votre premier chiffre"));
        input2 = parseInt(prompt("Entrez votre deuxième chiffre"));
        calcul(choix);
        let rec = confirm('Voulez-vous refaire un calcul ?')
            if (rec) {
                calculatrice();
            }else  {
                alert("Bonne journée !");
            }
    } else {
        alert('Entrez un chiffre valable');
        calculatrice();
    }
}

calculatrice();

function calcul(choix) {
    if (choix == 1) {
        add(input1, input2);
    } else if (choix==2) {
        sous(input1, input2);
    } else if (choix == 3) {
        mul(input1, input2);
    } else if (choix == 4) {
        div(input1, input2);
    }
}

function add(n1, n2) {
      let result = n1 + n2;
        alert(`Le résultat de ${n1} + ${n2} est ${result}`)
}

function sous(n1, n2) {
        let result = n1 - n2;
        alert(`Le résultat de ${n1} - ${n2} est ${result}`)
}

function mul(n1, n2) {
        let result = n1 * n2;
        alert(`Le résultat de ${n1} * ${n2} est ${result}`)
}

function div(n1, n2) {
        let result = n1 / n2;
        alert(`Le résultat de ${n1} / ${n2} est ${result}`)
}

