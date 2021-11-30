let Ul_list = document.querySelector("#monUL");
let button = document.querySelector(".button");

button.addEventListener("click", function () {
  //creation de l'element li qui sera enfant de UL
  let li = document.createElement("li");
  //recuperation de la valeur de l'input
  let inputt = document.querySelector("#input_select").value;
  // definition de la valeur li
  li.innerText = inputt;
  // ajout du li a sont parent
  Ul_list.appendChild(li);
  // cancel de la valeur de l'input
  document.querySelector("#input_select").value = "";

  //creation du button supp a coté du li
  let supp = document.createElement("button");
  //nom donnée au bouton
  supp.innerText = "SUPPRIMER";
  //envoi du button a son parent li
  li.appendChild(supp);
  // declaration de ma ul droite, dans js
  let ul_droite = document.querySelector(".ul_right");

  let fait = document.createElement("button");
  fait.innerText = "FAIT";
  li.prepend(fait);

  fait.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    fait.remove();
  });

  // add fonction du button supp
  supp.addEventListener("click", function () {
    // ENVOI de la li tache en cours a tache fini via le clic du button supprimer
    ul_droite.appendChild(li);
    // remove du boutton supp quand la li est passée du coté tache fini
    supp.remove();
    li.style.textDecoration = "none";
  });
});
