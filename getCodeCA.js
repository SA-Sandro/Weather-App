

export default function obtenerCode(provincia) {
    //Hacemos switch para retornar un parent_code
    switch (provincia) {
        case 'Andalucía':
            return "01"
        case 'Aragón':
            return "02"
        case 'Asturias':
            return "03"
        case 'Balears':
            return "04"
        case 'Canarias':
            return "05"
        case 'Cantabria':
            return "06"
        case 'Castilla y León':
            return "07"
        case 'Castilla - La Mancha':
            return "08"
        case 'Cataluńa':
            return "09"
        case 'Comunitat Valenciana':
            return "10"
        case 'Extremadura':
            return "11"
        case 'Galicia':
            return "12"
        case 'Madrid':
            return "13"
        case 'Murcia':
            return "14"
        case 'Navarra':
            return "15"
        case 'País Vasco':
            return "16"
        case 'Rioja':
            return "17"
        case 'Ceuta':
            return "18"
        case 'Melilla':
            return "19"

    }
}