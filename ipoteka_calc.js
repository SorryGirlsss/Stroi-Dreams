const propertyPriceInput = document.getElementById("property-price");
    const downPaymentInput = document.getElementById("down-payment");
    const loanAmountSpan = document.getElementById("loan-amount");
    const loanTermInput = document.getElementById("loan-term");
    const loanTermUnitSelect = document.getElementById("loan-term-unit");
    const interestRateInput = document.getElementById("interest-rate");
    const monthlyPaymentSpan = document.getElementById("monthly-payment");
    const totalInterestSpan = document.getElementById("total-interest");
    const totalDebtSpan = document.getElementById("total-debt");


    function calculateMortgage() {
     const propertyPrice = parseFloat(propertyPriceInput.value);
     const downPayment = parseFloat(downPaymentInput.value);
     const loanTerm = parseInt(loanTermInput.value);
     const loanTermUnit = loanTermUnitSelect.value;
     const interestRate = parseFloat(interestRateInput.value) / 100;

    if (isNaN(propertyPrice) || isNaN(downPayment) || isNaN(loanTerm) || isNaN(interestRate)) {
		  loanAmountSpan.textContent = "";
		  monthlyPaymentSpan.textContent = "";
		  totalInterestSpan.textContent = "";
		  totalDebtSpan.textContent = "";
		  return;
		}
    const loanAmount = propertyPrice - downPayment;
    loanAmountSpan.textContent = loanAmount.toLocaleString("ru-RU");

    let monthlyPayment;
    if (loanTermUnit === "years") {
    	const months = loanTerm * 12;
      monthlyPayment = (loanAmount * interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -months));
    } 
    else {
      monthlyPayment = (loanAmount * interestRate / 12) / (1 - Math.pow(1 + interestRate / 12, -loanTerm));
    }
    monthlyPaymentSpan.textContent = monthlyPayment.toLocaleString("ru-RU");

    const totalInterest = monthlyPayment * loanTerm * (loanTermUnit === "years" ? 12 : 1) - loanAmount;
    totalInterestSpan.textContent = totalInterest.toLocaleString("ru-RU");

    const totalDebt = loanAmount + totalInterest;
    totalDebtSpan.textContent = totalDebt.toLocaleString("ru-RU");
    }

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
     input.addEventListener("input", calculateMortgage);
    });

    loanTermUnitSelect.addEventListener("change", calculateMortgage);

    calculateMortgage();