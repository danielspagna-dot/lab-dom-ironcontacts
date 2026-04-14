// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ─── FUNCIÓN AUXILIAR ────────────────────────────────────────────────────────
function addContactRow(contact) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `;

  row.querySelector(".btn-delete").addEventListener("click", () => row.remove());
  row.querySelector(".btn-like").addEventListener("click", () => row.classList.toggle("liked"));

  tableBody.appendChild(row);
}

// ITERATION 0 — usar la función directamente
const randomIndex = Math.floor(Math.random() * contacts.length);
const [randomContact] = contacts.splice(randomIndex, 1);
addContactRow(randomContact);

// ITERATION 1
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => addContactRow(contact));

// ITERATION 4
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) {
    alert("No quedan más contactos!");
    return;
  }
  const idx = Math.floor(Math.random() * contacts.length);
  const [contact] = contacts.splice(idx, 1);
  addContactRow(contact);
});