function addWorkout() {
  let workout = document.getElementById("workout").value;
  let time = document.getElementById("time").value;
  let calories = document.getElementById("calories").value;

  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.textContent = `${workout} - ${time} min - ${calories} cal`;
  list.appendChild(item);
}