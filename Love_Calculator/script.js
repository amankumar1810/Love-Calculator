function love() {
  var name1 = document.getElementById("nameone").value; // 1st input.
  var name2 = document.getElementById("nametwo").value; // 2nd input.
  
  // If length<3 then don't calculate percentage.
  let flag = true;
  // names must me at least 3 characters long.
  if (name1.length <= 2) {
    flag = false;
    alert("Enter at least 3 characters");
    
  }
  if (name2.length <= 2) {
    flag = false;
    alert("Enter at least 3 characters");
  }
  // If valid, generate a random love percentage.
  else if(flag==true) {
    var random = Math.floor(Math.random() * 100 + 1);
    if (random >= 100) random = 99;
    else if (random < 20) random = 20;
    document.getElementById("print").innerHTML =
      name1 + " and " + name2 + " = " + random + "%" + " of love.";
  }
  if (random >= 20 && random <= 50) {
    document.getElementById("statement").innerHTML = "Good Relationship";
  } else if (random >= 51 && random <= 100) {
    document.getElementById("statement").innerHTML = "Preety Relationship";
  }
}
