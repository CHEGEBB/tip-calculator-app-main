document.addEventListener("DOMContentLoaded", function () {
  const BillField = document.getElementById("bill");
  const FivePercent = document.getElementById("tip-five");
  const TenPercent = document.getElementById("tip-ten");
  const FifteenPercent = document.getElementById("tip-fifteen");
  const TwentyFivePercent = document.getElementById("tip-twenty-five");
  const FiftyPercent = document.getElementById("tip-fifty");
  const CustomPercent = document.getElementById("percent-custom");
  const NumberOfPeople = document.getElementById("people");
  const ResetButton = document.getElementById("reset-button");
  let overallPercentage;
  let billValue;

  FivePercent.addEventListener("click", (e) => {
    e.preventDefault();
    overallPercentage = 0.05;
    console.log("Overall percentage:", overallPercentage);
  });

  TenPercent.addEventListener("click", (e) => {
    e.preventDefault();
    overallPercentage = 0.1;
    console.log(overallPercentage);
  });

  FifteenPercent.addEventListener("click", (e) => {
    e.preventDefault();
    overallPercentage = 0.15;
    console.log(overallPercentage);
  });

  TwentyFivePercent.addEventListener("click", (e) => {
    e.preventDefault();
    overallPercentage = 0.25;
    console.log(overallPercentage);
  });

  FiftyPercent.addEventListener("click", (e) => {
    e.preventDefault();
    overallPercentage = 0.5;
    console.log(overallPercentage);
  });

  CustomPercent.addEventListener("input", (e) => {
    const value = parseFloat(e.target.value);
    if (value <= 100) {
      customPercentage = value / 100;
      overallPercentage = customPercentage;
      console.log("Custom percentage:", overallPercentage);
    } else {
      alert("Wrong percentage");
    }
  });

  BillField.addEventListener("input", (e) => {
    billValue = parseFloat(e.target.value);
    console.log("Bill value:", billValue);
  });

  let numberPeople;
  NumberOfPeople.addEventListener("input", (e) => {
    numberPeople = parseFloat(e.target.value);
    console.log("Number of people:", numberPeople);
    updateTipAmount();
    updateTotalAmount();
  });
  
  function calculateTip() {
    Tip= (billValue * overallPercentage)/5;
    return Tip;
  }
  function calculateTotal() {
    Total = billValue/numberPeople + calculateTip();
    return Total;
  }

  function updateTipAmount() {
    const tipAmount = calculateTip();
    document.getElementById("cash").textContent = "$" + tipAmount.toFixed(2);
    console.log("Tip amount:", tipAmount.toFixed(2));
    }
    function updateTotalAmount() {
        const totalAmount = calculateTotal();
        document.getElementById("total-cash").textContent = "$" + totalAmount.toFixed(2);
    }


    ResetButton.addEventListener("click", (e) => {
        e.preventDefault();
        BillField.value = "";
        NumberOfPeople.value = "";
        FivePercent.checked = false;
        TenPercent.checked = false;
        FifteenPercent.checked = false;
        TwentyFivePercent.checked = false;
        FiftyPercent.checked = false;
        CustomPercent.value = "";
        document.getElementById("cash").textContent = "$0.00";
        document.getElementById("total-cash").textContent = "$0.00";
    });

});
