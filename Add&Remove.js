// Deel 1: Dier naar spotted list on click
const btn = document.querySelectorAll(".big-five-button");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const elem = document.createElement("li");
    elemText = document.createTextNode(e.target.textContent);
    elem.appendChild(elemText);
    const appendSpotted = document.getElementById("spotted-animals-list");
    appendSpotted.appendChild(elem);
    console.log(appendSpotted);
    /* console.log namen van verschillende buttoins
         try {
      console.log(e.target.textContent);
    } catch (error) {
      console.log(error);
    } */
  });
});
// Deel 2:
const removeBtn = document.getElementById("remove-first-item-button");

removeBtn.addEventListener("click", () => {
  console.log("something happened");
  const parent = document.getElementById("spotted-animals-list");
  console.log(parent);
  const firstElem = parent.getElementsByTagName("li")[0];
  const removed = parent.removeChild(firstElem);
  console.log(removed);
});

// deel 3:
const removeAll = document.getElementById("remove-all-button");

removeAll.addEventListener("click", () => {
  console.log("Something happened");
  const parentAll = document.getElementById("spotted-animals-list");
  parentAll.querySelectorAll("*").forEach((n) => n.remove());
});
