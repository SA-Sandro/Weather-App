import mostrarPrPorCA from "./functions.js";
import { petiDataClima } from "./functions.js";

window.onload = function () {

    let consulta = document.querySelector(".btnWeather");
    let selectCA = document.querySelector(".comunidadAutonoma");
    let selectPro = document.querySelector(".provincia");

    const peti = 'ccaa_prov.json';

    (function () {
        fetch(peti)
            .then(data => {
                return data.json()
            })
            .then(datosJSON => {
                datosJSON.forEach(comunidades => {
                    let indexComma = comunidades.label.indexOf(',');
                    let textoCortado = indexComma !== -1 ? comunidades.label.substring(0, indexComma) : comunidades.label;
                    selectCA.innerHTML += `<option>${textoCortado}</option>`;
                    comunidades.provinces.forEach(provincias => {
                        selectPro.innerHTML += `<option>${provincias.label}</option>`
                    })
                })
            })
    })();

    selectCA.addEventListener("change", function () {
        selectPro.innerHTML = '';
        mostrarPrPorCA(selectCA.value, selectPro, peti);
    });

    consulta.addEventListener("click", async function () {
        const mensajeErrorElement = document.querySelector(".mensajeError");
        if (selectCA.value !== '----') {
            añadirHTMLDatosClima();
            let provincia = selectPro.value;
            let dataClima =  await petiDataClima(provincia);
            rellenarInformacion(dataClima.icono, dataClima.tm, dataClima.tmax, dataClima.tmin);
        } else {
            document.querySelector(".divClima").innerHTML = '<p class="sindatos">Sin datos</p>';
            mensajeErrorElement.innerHTML = '<p class="mensajito text-center mt-3">Debes de rellenar los campos</p>';
            setTimeout(() => {
                if (mensajeErrorElement) {
                    mensajeErrorElement.innerText = '';
                }
            }, 3000);
        }
    })
    function añadirHTMLDatosClima() {
        document.querySelector(".divClima").innerHTML = '<div class="divSvg"></div>'
            + '<div class="divTm"></div>'
            + '<div class="divTmax"></div>'
            + '<div class="divTmin"></div>'
    }
    function rellenarInformacion(icono, tm, tmax, tmin) {
        document.querySelector(".divSvg").innerHTML = `<img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="tiempo">`;
        document.querySelector(".divTm").innerHTML = `<p class="tm text-white">${Math.round(tm)} °C</p>`;
        document.querySelector(".divTmax").innerHTML = `<p>${Math.round(tmax)} °C</p>`;
        document.querySelector(".divTmin").innerHTML = `<p>${Math.round(tmin)} °C</p>`;
    }
    

}








