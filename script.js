function addText() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;

  var output = "";
  if (input1 != "") {
    output += "【図書】\n " + "1.『" + input1 + " 』";
  }
  if (input2 != "") {
    output +=input2 + " , ";
  }
  if (input3 != "") {
    output +=input3 + "年\n";
  }

  document.getElementById("output").value = output;
}