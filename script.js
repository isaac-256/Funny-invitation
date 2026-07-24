const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

yesBtn.addEventListener("click", function () {

    card.innerHTML = `
        <h1>🎉 Awesome! 🎉</h1>

        <p>Choose the day you'll come.</p>

        <input type="date" id="partyDate">

        <br><br>

        <button id="confirmBtn">Confirm ✅</button>
    `;

    const confirmBtn = document.getElementById("confirmBtn");

    confirmBtn.addEventListener("click", function () {

        const date = document.getElementById("partyDate").value;

        if (date === "") {
            alert("Please choose a date first 😊");
        } else {
            card.innerHTML = `
                <h1>🥳 See you there!</h1>

                <p>You've chosen:</p>

                <h2>${date}</h2>

                <p>Now there's no backing out! 😂</p>
            `;
        }
        confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
});

    });

});
let noCount = 0;

noBtn.addEventListener("mouseover", function () {

    noCount++;

    if (noCount == 1) {
        noBtn.innerText = "Are you sure? 🤔";
    }
    else if (noCount == 2) {
        noBtn.innerText = "Think again 😅";
    }
    else if (noCount == 3) {
        noBtn.innerText = "Wrong answer 😂";
    }
    else if (noCount == 4) {
        noBtn.innerText = "select Yes! 😜";
    }
    else if (noCount >= 5) {
        noBtn.innerText = "leave me! 😈";
    }

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});