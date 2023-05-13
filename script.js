let userOption = document.querySelectorAll(".Options");

let appState = {
  from: "celsius",
  to: "",
  fromDeg: null,
  toDeg: null,
  viewMore: false,
};

const handleDegreeConversion = (e) => {
  let userInput = +document.querySelector(".inputUser").value;

  let selectName = e.target.name;
  appState.fromDeg = userInput;
  appState[selectName] = e.target.value;
  console.log(appState);

  if (appState.from === "celsius" && appState.to === "Fahrenheit") {
    let convertedDegree = CtoF(userInput);

    let finalResult = convertedDegree.toFixed(2);
    appState.toDeg = finalResult;
    document.querySelector(".resultInput").value = finalResult;
  } else if (appState.from === "celsius" && appState.to === "kelvin") {
    // console.log(appState);
    let convertedDegree = CtoK(userInput);
    console.log(convertedDegree);

    let finalResult = convertedDegree.toFixed(2);
    document.querySelector(".resultInput").value = finalResult;
    appState.toDeg = finalResult;
  } else if (appState.from === "Fahrenheit" && appState.to === "kelvin") {
    let convertedDegree = FtoK(userInput);
    console.log(convertedDegree);
    let finalResult = convertedDegree.toFixed(2);
    document.querySelector(".resultInput").value = finalResult;
    appState.toDeg = finalResult;
  } else if (appState.from === "kelvin" && appState.to === "Fahrenheit") {
    let convertedDegree = KtoF(userInput);
    console.log(convertedDegree);
    let finalResult = convertedDegree.toFixed(2);
    document.querySelector(".resultInput").value = finalResult;
    appState.toDeg = finalResult;
  } else if (appState.from === "kelvin" && appState.to === "celsius") {
    let convertedDegree = KtoC(userInput);
    console.log(convertedDegree);
    let finalResult = convertedDegree.toFixed(2);
    document.querySelector(".resultInput").value = finalResult;
    appState.toDeg = finalResult;
  } else if (appState.from === "Fahrenheit" && appState.to === "celsius") {
    let convertedDegree = FtoC(userInput);
    console.log(convertedDegree);
    let finalResult = convertedDegree.toFixed(2);
    document.querySelector(".resultInput").value = finalResult;
    appState.toDeg = finalResult;
  }

  document.querySelector("#from_text").innerText = appState.from;
  document.querySelector("#to_text").innerText = appState.to;
  document.querySelector("#to_result").innerText = appState.toDeg;
  document.querySelector("#from_result").innerText = appState.fromDeg;

  // console.log("changing", e.target.value);
};

document
  .querySelector(".inputUser")
  .addEventListener("change", handleDegreeConversion);

userOption.forEach((select) => {
  select.addEventListener("change", handleDegreeConversion);
});

const CtoF = (C) => C * 1.8 + 32;
const CtoK = (C) => C + 273.15;
const KtoC = (K) => K - 273.15;
const FtoC = (F) => (F - 32) * 0.5556;
const FtoK = (F) => (F - 32) * 0.5556 + 273.15;
const KtoF = (K) => (K - 273.15) * 1.8 + 32;

document.querySelector(".view_more_btn").addEventListener("click", function () {
  if (!appState.viewMore) {
    document.querySelector(".result_info").style.height = "50px";
    document.querySelector(".result_info").style.overFlow = "visible";
    appState.viewMore = true;
    document.querySelector(".view_more_btn").innerHTML = "View Less";
  } else {
    document.querySelector(".result_info").style.height = "0px";
    document.querySelector(".result_info").style.overFlow = "hidden";
    appState.viewMore = false;
    document.querySelector(".view_more_btn").innerHTML = "View More";
  }
});
