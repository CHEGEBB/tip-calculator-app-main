document.addEventListener('DOMContentLoaded',function (){

    const BillField =document.getElementById('bill');
    const FivePercent =document.getElementById('tip-five');
    const TenPercent =document.getElementById('tip-ten');
    const FifteenPercent=document.getElementById('tip-fifteen');
    const TwentyFivePercent =document.getElementById('tip-twenty-five');
    const FiftyPercent =document.getElementById('tip-fifty');
    const CustomPercent =document.getElementById('percent-custom');
    const NumberOfPeople=document.getElementById('people');
    const ResetButton =document.getElementById('reset-button');
    let overallPercentage;



    FivePercent.addEventListener('click',(e)=> {

    });


    let billValue;
    BillField.addEventListener('input',(e)=>{
        billValue= parseFloat(e.target.value);
        console.log(billValue);

    });


    let customPercentage;
    CustomPercent.addEventListener('input',(e)=> {
        let customPercentage;

        CustomPercent.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (value <= 100) {
                customPercentage = value;
                console.log(customPercentage);

            } else {
                alert('Wrong percentage');
            }
        });
       

    });

    let numberPeople;
    NumberOfPeople.addEventListener('input',(e)=> {
        numberPeople=parseFloat(e.target.value);
        console.log(numberPeople);
    });



});