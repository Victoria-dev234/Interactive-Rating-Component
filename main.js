const button = document.getElementById("button");
const rating = document.querySelector("#rating");
const numbers = document.querySelectorAll(".numbers");
const section2 = document.querySelector("#thank-you-section");
const text = document.querySelector(".text p");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    const number = numbers[i];
    number.style.backgroundColor = "#fb7413";
    number.style.color = "#ffff";
    const num = number.innerHTML;

    button.addEventListener("click", () => {
      if ((section2.style.display = "none")) {
        rating.style.display = "none";
        section2.style.display = "flex";
        text.textContent = `You selected ${num} out of 5`;
      } else {
        section2.style.display = "none";
        rating.style.display = "flex";
      }
    });
  });
}
