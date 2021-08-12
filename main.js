document.addEventListener("DOMContentLoaded", () => {
  var lstAna = ["Developer", "Designer", "Analyst"];
  var contentListAna = document.getElementById("spanListAna");
  var contentPalabraAna = contentListAna.innerHTML;
  var addContentAna = false;
  var countAna = 0;

  var lstAbel = ["Developer", "Designer", "Analyst"];
  var conetnListAbel = document.getElementById("spanListAbel");
  var contentPalabraAbel = conetnListAbel.innerHTML;
  var addContentAbel = false;
  var countAbel = 0;

  setInterval(function () {
    if (contentPalabraAna.length > 0 && !addContentAna) {
      contentListAna.innerHTML = contentPalabraAna.slice(0, -1);
      contentPalabraAna = contentListAna.innerHTML;
    } else {
      addContentAna = true;
    }
    if (addContentAna) {
      if (contentPalabraAna.length < lstAna[countAna].length) {
        contentListAna.innerHTML = lstAna[countAna].slice(
          0,
          contentPalabraAna.length + 1
        );
        contentPalabraAna = contentListAna.innerHTML;
      } else {
        if (countAna < lstAna.length) {
          countAna++;
        }
        addContentAna = false;
      }
    }
    if (countAna == lstAna.length) {
      countAna = 0;
    }
    if (contentPalabraAbel.length > 0 && !addContentAbel) {
      conetnListAbel.innerHTML = contentPalabraAbel.slice(0, -1);
      contentPalabraAbel = conetnListAbel.innerHTML;
    } else {
      addContentAbel = true;
    }
    //agregando palabras (seteando)
    if (addContentAbel) {
      if (contentPalabraAbel.length < lstAbel[countAbel].length) {
        conetnListAbel.innerHTML = lstAbel[countAbel].slice(
          0,
          contentPalabraAbel.length + 1
        );
        contentPalabraAbel = conetnListAbel.innerHTML;
      } else {
        if (countAbel < lstAbel.length) {
          countAbel++;
        }
        addContentAbel = false;
      }
    }
    if (countAbel == lstAbel.length) {
      countAbel = 0;
    }
  }, 90);

  const carrusel = document.querySelector(".carousel-items");
  let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
  let intervalo = null;
  let step = 1;
  const start = () => {
    intervalo = setInterval(() => {
      carrusel.scrollLeft = carrusel.scrollLeft + step;
      if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -1;
      } else if (carrusel.scrollLeft === 0) {
        step = step * -1;
      }
    }, 10);
  };
  const stop = () => {
    clearInterval(intervalo);
  };
  carrusel.addEventListener("mouseover", () => stop());
  carrusel.addEventListener("mouseout", () => start());

  start();
});
