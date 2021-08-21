function getObjects() {
  //HTTP Request
  const url =
    "http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("accept", "application/json");
  xhr.onload = () => {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
    //Initialising variables for number of air conditioning units and total cubic weight
    let totalUnits = 0;
    let totalCubicWeight = 0;
    //Iterate object array
    data.objects.forEach((obj) => {
      if (obj.category == "Air Conditioners") {
        //Number of air conditioners incremented
        totalUnits += 1;
        const cubicMetres =
          (obj.size.width / 100) *
          (obj.size.length / 100) *
          (obj.size.height / 100);
        totalCubicWeight += cubicMetres * 250;
      }
    });
    //if no Air Conditioners
    if (totalUnits == 0) {
      alert("No detected Air Conditioning units for this endpoint.");
    }
    //Final output and results displayed, with the average calculated to one decimal place
    const output = (totalCubicWeight / totalUnits).toFixed(3);
    document.getElementById("kgWeight").innerHTML = output;
    document.getElementById("gWeight").innerHTML = output * 1000;
  };
  xhr.send();
}
