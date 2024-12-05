
const dropdown = document.querySelectorAll(".dropdown select");
const button = document.querySelector("form button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}";




for(let select of dropdown) {
    for(let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
          updateFlag(evt.target)
    });
}

const updateFlag = (element) => {
    let currccc = element.value;
    let countryCode = countryList[currccc];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click", async (evt) => {
       evt.preventDefault();
       let amount = document.querySelector(".amount input");
       let amtVal = amount.value;
       if(amtVal < 1 || amtVal === "") {
        amtVal = 1;
        amount.value = 1;
       }
      const URL = `${BaseURL}/${from}${to}.json`;
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
})

