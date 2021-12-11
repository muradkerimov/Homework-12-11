let amount = document.getElementById("amountInput")
let month = document.getElementById("monthInput")
let percentage = document.getElementById("percentageInput")
let calculate = document.getElementById("calculate")
let remove = document.getElementById("remove")
let info = document.querySelector(".received_info.row.col-4")

calculate.addEventListener("click", function() {
    let now = new Date();

    let amountValue = amount.value
    let monthValue = month.value
    let percentageValue = percentage.value
    if (amountValue === "" || percentageValue === "" || monthValue === "") {
        alert("bosluq buraxma");
        amount.value = "";
        month.value = "";
        percentage.value = "";
        return;
    }
    let totalPayment = amountValue * ((1 + percentageValue / 100) ** monthValue);
    let remainder = totalPayment % monthValue;
    let monthlyPayment = (totalPayment - remainder) / monthValue;
    const Month = now.getMonth()
    const Day = now.getDay()
    const Year = now.getFullYear()
    for (let i = 1; i < monthValue; i++) {

        // info.innerHTML += `
        // <div class="card">
        //     <div class="card d-flex justify-content-start flex-wrap">
        //         <div class="col-3">
        //             <div class="card-body border border-dark m-3 rounded">
        //                 <span style="font-size: 24px;font-weight: bold;">${monthlyPayment}</span>
        //                 <p style="font-size: 16px;">${Day}-${Month}-${Year}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>`
        let card = document.createElement("div");
        card.classList.add("card, card-body");
        info.append(card);
        let amounts = document.createElement("h5");
        amounts.classList.add("card");
        card.append(amounts);
        amounts.innerText = monthlyPayment;
        // now += 2.592e+6;
        // console.log(monthlyPayment)
        // console.log(`${Day}-${Month}-${Year}`)
    }
    // info.innerHTML += `
    // <div class="card">
    //     <div class="card d-flex justify-content-start flex-wrap">
    //         <div class="col-3">
    //             <div class="card-body border border-dark m-3 rounded">
    //              <span style="font-size: 24px;font-weight: bold;">${(monthlyPayment + remainder).toFixed(2)}</span>
    //              <p style="font-size: 16px;">may</p>
    //          </div>
    //         </div>
    //     </div>
    // </div>`
    let card = document.createElement("div");
    card.classList.add("card, card-body");
    info.append(card);
    let amounts = document.createElement("h5");
    amounts.classList.add("card");
    card.append(amounts);
    amounts.innerText = (monthlyPayment + remainder).toFixed(2);

    // console.log((monthlyPayment + remainder).toFixed(2))

    amount.value = "";
    month.value = "";
    percentage.value = "";
    info.innerHTML = `<div class="all-info">total ${totalPayment.toFixed(2)}</div>`

});


remove.addEventListener("click", function() {
    amount.value = "";
    month.value = "";
    percentage.value = "";

    info.remove()
});