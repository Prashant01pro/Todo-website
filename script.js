let task = "";
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let inputval = document.getElementById("input");
let newtask = document.querySelector(".newtask");

btn.addEventListener("click", () => {
    task = inputval.value.trim();
    console.log(task);
    if (task === "") {
        return;
    }

    let newdiv = document.createElement("div");
    newdiv.innerHTML = task;
   
    newdiv.className = "my-class";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
        alert("Congrates,You have done a task");
    })

    // Event listener to remove the specific task when checked
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            newdiv.remove(); // Deletes only the associated task
            // alert("Congrats, You have completed a task!");
        }
    });

    newdiv.innerText = task;
    newdiv.appendChild(checkbox);
    newtask.appendChild(newdiv);
    inputval.value = "";
});

btn2.addEventListener("click", () => {
    let tasks = document.querySelectorAll(".my-class");
    if (tasks.length > 0) {
        tasks[tasks.length - 1].remove();
    }
});
