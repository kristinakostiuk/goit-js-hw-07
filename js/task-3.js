const input = document.querySelector(".input");
const span = document.querySelector("span");

const inputEvent = event => {
    const inputEl = event.currentTarget.value.trim();
    console.log(inputEl);
    if (inputEl !== "") {
        span.textContent = inputEl;
    } else {
        span.textContent = "Anonymous";
    };
}
input.addEventListener("input", inputEvent);
