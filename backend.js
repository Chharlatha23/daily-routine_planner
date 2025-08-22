// daily_backend.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("routineForm");
    const routineList = document.getElementById("routineList");
    const routines = [];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const task = document.getElementById("task").value.trim();
        const time = document.getElementById("time").value;

        if (!task || !time) {
            alert("Please fill in all fields.");
            return;
        }

        const routine = { task, time };
        routines.push(routine);
        displayRoutines();
        form.reset();
    });

    function displayRoutines() {
        routineList.innerHTML = ""; // clear previous routines
        routines.forEach((routine, index) => {
            const card = document.createElement("div");
            card.className = "routine-card";
            card.innerHTML = `
                <strong>${routine.time}</strong>: ${routine.task}
            `;
            routineList.appendChild(card);
        });
    }
});
