function changeFunc() {
  let selectBox = document.getElementById("selectBox");
  let selectedValue = selectBox.options[selectBox.selectedIndex].value;
  let countryLink = `https://corona.lmao.ninja/v2/countries/${selectedValue}`;

  fetch(countryLink)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("active").innerHTML =
        data.active.toLocaleString();
      document.getElementById("cases").innerHTML = data.cases.toLocaleString();
      document.getElementById("critical").innerHTML =
        data.critical.toLocaleString();
      document.getElementById("death").innerHTML = data.deaths.toLocaleString();
      document.getElementById("recovered").innerHTML =
        data.recovered.toLocaleString();
      document.getElementById("tests").innerHTML = data.tests.toLocaleString();
      document.getElementById("flag").src = data.countryInfo.flag;
    });
}
