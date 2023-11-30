const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
  //to store the notes in LocalStorage
  localStorage.setItem("notes", notesContainer.innerHTML);
}

//some how we close the browser and open once again then this function will check whether there is any data present inside the localStorage then it will display it as a note
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  //this will update the notes in the localStorage while writing in the notes box
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        updateStorage();
      };
    });
  }
});
