let timeBtn = document.querySelector(".showTime");
let timeText = document.querySelector(".time");

timeBtn.addEventListener("click", function () {
    const currentTime = new Date().toLocaleTimeString();
    timeText.textContent = `Текущее время: ${currentTime}`;
  });


