import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;

  if (inputText === "") {
    alert("Enter a task!!");
    return false;
  }

  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const button_done = document.createElement("button");
  button_done.innerText = "Done";

  button_done.addEventListener("click", () => {
    const moveDiv = button_done.parentElement;
    const moveText = moveDiv.firstElementChild.innerText;

    const div2 = document.createElement("div");
    div2.className = "list-row";
    const li2 = document.createElement("li");
    li2.innerText = moveText;
    const button_revert = document.createElement("button");
    button_revert.innerText = "Revert";
    button_revert.addEventListener("click", () => {
      document.getElementById("incompleted-list").appendChild(moveDiv);
      document.getElementById("completed-list").removeChild(div2);
    });
    div2.appendChild(li2);
    div2.appendChild(button_revert);
    document.getElementById("completed-list").appendChild(div2);
    removeRecord(button_done.parentElement);
  });

  const button_rm = document.createElement("button");
  button_rm.innerText = "Remove";
  button_rm.addEventListener("click", () => {
    removeRecord(button_rm.parentNode);
  });

  div.appendChild(li);
  div.appendChild(button_done);
  div.appendChild(button_rm);

  document.getElementById("incompleted-list").appendChild(div);
};

const removeRecord = (Target) => {
  document.getElementById("incompleted-list").removeChild(Target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
