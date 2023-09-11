let test = document.body;

let tabla = document.createElement("table");

let elsoSor = document.createElement("tr");

for (let i = 0; i < 4; i++) {
  let tableHead = document.createElement("th");
  tableHead.innerText = `${i}. elem: ${i + 1}`;
  elsoSor.appendChild(tableHead);
}

tabla.appendChild(elsoSor);

for (let j = 0; j < 10; j++) {
  let masodik = document.createElement("tr");

  for (let i = 0; i < 4; i++) {
    let tableHead = document.createElement("td");
    tableHead.innerText = `${i}. sor: ${i + 1} elem`;
    masodik.appendChild(tableHead);
  }

  tabla.appendChild(masodik);
}

test.appendChild(tabla);
