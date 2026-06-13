document.addEventListener("DOMContentLoaded", () => {

  const start = document.getElementById("start");
  const end = document.getElementById("end");

  start.addEventListener("change", () => {
    end.min = start.value;
  });

  end.addEventListener("change", () => {
    if (end.value <= start.value) {
      alert("Data zakończenia musi być późniejsza niż rozpoczęcia!");
      end.value = "";
    }
  });

  window.toggleInneCel = function () {
    const cel = document.getElementById("cel");
    const inne = document.getElementById("cel_inne");

    if (cel.value === "inne") {
      inne.style.display = "block";
      inne.required = true;
    } else {
      inne.style.display = "none";
      inne.required = false;
      inne.value = "";
    }
  };

});