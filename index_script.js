
    const projectRadios = document.querySelectorAll('input[name="project"]');
    const facadeRadios = document.querySelectorAll('input[name="facade"]');
    const floorsRadios = document.querySelectorAll('input[name="floors"]');
    const finishRadios = document.querySelectorAll('input[name="finish"]');
    const roofRadios = document.querySelectorAll('input[name="roof"]');
    const designCheckbox = document.getElementById('design');
    const areaSlider = document.getElementById('area');
    const areaValue = document.getElementById('area-value');

    const totalPrice = document.getElementById('total-price');
    const pricePerMeter = document.getElementById('price-per-meter');

    function calculatePrice() {
        let project = '';
        projectRadios.forEach(radio => {
            if (radio.checked) {
                 project = radio.value;
            }
        });

        let facade = '';
        facadeRadios.forEach(radio => {
            if (radio.checked) {
                facade = radio.value;
            }
        });

        let floors = '';
        floorsRadios.forEach(radio => {
            if (radio.checked) {
                floors = radio.value;
            }
        });

        let finish = '';
        finishRadios.forEach(radio => {
            if (radio.checked) {
                finish = radio.value;
            }
        });

        let roof = '';
        roofRadios.forEach(radio => {
            if (radio.checked) {
                roof = radio.value;
            }
        });

        const design = designCheckbox.checked;
        const area = areaSlider.value;

        let pricePerSquareMeter = 0;
        if (project === 'уют') {
            pricePerSquareMeter = 50000;
        } 
        else if (project === 'престиж') {
            pricePerSquareMeter = 70000;
        } 
        else if (project === 'элит') {
            pricePerSquareMeter = 100000;
        }

        if (facade === 'мокрый фасад') {
            pricePerSquareMeter += 10000;
        } 
        else if (facade === 'кирпич') {
            pricePerSquareMeter += 20000;
        }

        if (floors === '1.5') {
            pricePerSquareMeter += 5000;
        } 
        else if (floors === '2') {
            pricePerSquareMeter += 10000;
        }

        if (finish === 'получистовая') {
            pricePerSquareMeter += 15000;
        } 
        else if (finish === 'чистовая') {
            pricePerSquareMeter += 25000;
        }

        if (roof === 'металлочерепица') {
            pricePerSquareMeter += 5000;
        } 
        else if (roof === 'мягкая черепица') {
            pricePerSquareMeter += 10000;
        }

        if (design) {
            pricePerSquareMeter += 10000;
        }

        const totalCost = pricePerSquareMeter * area;

        totalPrice.textContent = totalCost;
        pricePerMeter.textContent = pricePerSquareMeter;
    }

    projectRadios.forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    facadeRadios.forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    floorsRadios.forEach(radio => {
         radio.addEventListener('change', calculatePrice);
    });
    finishRadios.forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    roofRadios.forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    designCheckbox.addEventListener('change', calculatePrice);
    areaSlider.addEventListener('input', () => {
        areaValue.textContent = areaSlider.value;
        calculatePrice();
    });

    calculatePrice();
