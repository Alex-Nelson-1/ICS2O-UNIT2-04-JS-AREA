/* Created by: Alex.Nelson
 * Created on: Oct 2022
 * This file contains the JavaScript for index.html
 */
/* Function */
function calculate() {
  /* Input */
  const base = parseInt(document.getElementById("triangleBase").value)
  const height = parseInt(document.getElementById("triangleHeight").value)

/* Process */
  const area = base * height / 2

/* Output */
  document.getElementById("area").innerHTML = "The area is: " + area + " cm²"
}
