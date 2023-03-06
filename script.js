const adviceTitle = document.querySelector(".advice-title");
const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");

async function fetchData(url){
    try {
        let response = await fetch(url);
        let data = await response.json();
        adviceTitle.textContent = "ADVICE #" + data.slip.id;
        advice.textContent = `"${data.slip.advice}"`;
        console.log(data);
    }
    catch(error){
        adviceTitle.textContent = "ERROR #404";
        advice.textContent = "Advice not available";
    }
}

fetchData("https://api.adviceslip.com/advice");

dice.addEventListener('click', ()=>{
    // const randomNumber = Math.floor(Math.random() * 1000);
    fetchData("https://api.adviceslip.com/advice");
});