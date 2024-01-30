import obtenerCode from "./getCodeCA.JS";

export default function mostrarPrPorCA(CASelected, selectPro, peti) {
    let provincia;
    if (CASelected !== '----') {
        provincia = CASelected;
        let code = obtenerCode(provincia);
        fetch(peti)
            .then(data => {
                return data.json()
            })
            .then(provinciasPorCA => {
                provinciasPorCA.forEach(provinciaCA => {
                    provinciaCA.provinces.forEach(codigoProvincia => {
                        if (codigoProvincia.parent_code === code) {
                            selectPro.innerHTML += `<option>${codigoProvincia.label}</option>`
                        }
                    })
                })
            })
    } else {
        selectPro.innerHTML += `<option>----</option>`
    }
}

export function petiDataClima(provincia) {
    const petiOpenWeather = `https://api.openweathermap.org/data/2.5/weather?q=${provincia}&appid=d388709c87afda648440511b77399160`;
    
    // Agrega el return aquí
    return fetch(petiOpenWeather)
        .then(data => {
            return data.json();
        })
        .then(datosTiempo => {
            const data = {
                'icono': datosTiempo.weather[0].icon,
                'tm': getCelsius(datosTiempo.main.temp),
                'tmax': getCelsius(datosTiempo.main.temp_max),
                'tmin': getCelsius(datosTiempo.main.temp_min)
            };
            return data;
        });
}

function getCelsius(kelvin) {
    return kelvin - 273.15;
}