// EXO 1

// function saluer(){
//     console.log("bonjour le monde !")
// }
// saluer()

// EXO 2

// function saluerNom(nom) {
//     console.log("Bonjour, " + nom)
// }

// saluerNom("Mathieu")
// saluerNom("Juliette")
// saluerNom("Marley")

// EXO 10 

// const saluerNom = (nom) => console.log("bonjour, " + nom)

// saluerNom("Mathieu")
// saluerNom("Juliette")
// saluerNom("Marley")

// EXO 3

// function calculerCarre(nombre) {
//     return Math.pow(nombre, 2)
// }
// calculerCarre()
// let resultat = calculerCarre()
// console.log(resultat)

// EXO 4

// function additionner(a, b) {
//     a = Number(prompt("nombre 1"))
//     b= Number(prompt("nombre 2"))
//     resultat = a + b
//     return resultat
// }

// additionner()
// console.log(resultat)

// EXO 10

// const additionner = (a, b) => {
//   a = Number(prompt("nombre 1"))
//   b= Number(prompt("nombre 2"))
//   resultat = a + b
//   return resultat
// }

// additionner()
// console.log(resultat)



// EXO 5

// function calculerPrixTotal(prixHT, tauxTVA) {
//     prixHT = 40
//     tauxTVA = 0.20
//     ttc = prixHT + (prixHT * tauxTVA)
//     return ttc
// }

// calculerPrixTotal()
// console.log(ttc)

// EXO 6

// let messageGlobal = "Je suis global"

// function afficherMessage() {
//     messageLocal = "erreur"
// }
// console.log(messageLocal)

// ERREUR

// Uncaught ReferenceError: messageLocal is not defined
//     at script.js:46:13

// (anonymous) @ script.js:46Understand this error

// REPONSE A L'ERREUR

// On ne peut pas afficher ou utiliser une variable qui est stocker dans une fonction sans appeller la function a l'exterieur.

// EXO 7

// let multiplier = function(a, b){
//     a = prompt("rentre ton premier nombre")
//     b = prompt("rentre ton deuxieme nombre")
//     resultat = a * b
//     return resultat
// }

// multiplier()
// console.log(resultat)

// EXO 8

// function addition(nombre1, nombre2) {
//     nombre1 = prompt("rentre ton premier nombre")
//     nombre2 = prompt("rentre ton deuxieme nombre")
//     resultatAddition = nombre1 + nombre2
//     return resultatAddition
// }

// function soustraction(nombre1, nombre2) {
//     nombre1 = prompt("rentre ton premier nombre")
//     nombre2 = prompt("rentre ton deuxieme nombre")
//     resultatSoustraction = nombre1 - nombre2
//     return resultatSoustraction
// }

// function operation() {
//     addition(resultatAddition)
//     soustraction(resultatSoustraction)
// }

// function executerOperation(nombre1, nombre2, operation) {
//     operation(nombre1, nombre2)
//     return operation
// }

// EXO 9

// let tableau = [10, 20, 30, 40]

// tableau.forEach(function(nombre, index) {
//   console.log(nombre + " et " + index);
// });

// EXO 11

// setTimeout(() => {
//   console.log("Ce message apparaît après 2 secondes !");
// }, 2000);

// PROJET 1

let tableau = []
let idUser = 1

function ajouterTache(description) {
  const tache = {
    id: idUser++,
    description: description,
  }
  tableau.push(tache)
  console.log(`Tâche : ${tache.description} (ID: ${tache.id})`)
}

function supprimerTache(id) {
  tableau.pop()
}

function afficherTaches() {

}