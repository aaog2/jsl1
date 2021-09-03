// UI
const currencyeoneel = document.getElementById('currency-one'),
    amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
    amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
    reteel = document.getElementById('rate');



function calculate(){
    // console.log("hey");

    const crcyone = currencyeoneel.value;
    const crcytwo = currencytwoel.value;

    const amtone = amountoneel.value;

    // console.log(crcyone,amtone);
    // console.log(crcytwo,amttwo);

    const api = "dadc69143bad2168f7267cdc";

    const uri = `https://v6.exchangerate-api.com/v6/${api}/latest/${crcyone}`;


    // Ajax Request

    // console.log(fetch(uri));

    fetch(uri)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);

            // console.log( typeof data.conversion_rates);
            // console.log(data.conversion_rates.USD);
            // console.log(data.conversion_rates[crcytwo);

            const rate = data.conversion_rates[crcytwo];
            // console.log(rate);

            reteel.innerText = `1${crcyone} = ${rate} ${crcytwo}`;
            amounttwoel.value = (rate * amtone).toFixed(2);
        });
}

// 18L1F WDFXXXX


// Event Listener
currencyeoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
    // console.log("already swap");

    const temp = currencyeoneel.value;

    currencyeoneel.value = currencytwoel.value;
    currencytwoel.value = temp;

    calculate();
})
