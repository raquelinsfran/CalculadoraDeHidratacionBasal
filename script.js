const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const MAN2 = document.getElementById('man2');

CALCULAR.addEventListener('click', () => {
    const PESO = parseFloat(document.getElementById('peso').value);

    // Validamos que se haya ingresado un valor válido.
    if (!isNaN(PESO) && PESO > 0) {
        ERROR.style.display = 'none';
        let voldiario, mantenimiento;

        if (PESO <= 30) {
            if (PESO <= 10) {
                voldiario = PESO * 100;
            } else if (PESO <= 20) {
                voldiario = (10 * 100) + ((PESO - 10) * 50);
            } else {
                voldiario = (10 * 100) + (10 * 50) + ((PESO - 20) * 20);
            }

            mantenimiento = voldiario / 24;
        } else {
            let supcorporal = ((PESO * 4) + 7) / (PESO + 90);

            let decision_medico = 1500; // El médico decide si usar 1500 o 2000
            voldiario = supcorporal * decision_medico;

            mantenimiento = voldiario / 24;
        }

        let mm_2 = mantenimiento * 1.5; 


        //Redondeamos los valores antes de mostrarlos
     voldiario = Math.round(voldiario);
     mantenimiento = Math.round(mantenimiento);
     mm_2 = Math.round(mm_2);

        
        FLU.innerHTML = 'Volumen Diario: ' + voldiario + ' cc';
        MAN.innerHTML = 'Mantenimiento: ' + mantenimiento + ' cc/hr';
        MAN2.innerHTML = 'M+m/2: ' + mm_2 + ' cc/hr'; 
        ERROR.style.display = 'none';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MAN2.style.display = 'block'; 
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        MAN2.style.display = 'none'; 
    }
});
