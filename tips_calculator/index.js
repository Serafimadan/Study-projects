// Your code goes in here

//document.querySelector("#app").innerText = "Tip Calculator";
const calculateBtn = document.getElementById('calculate-btn');

function calculateTips() {
  const billAmount = document.getElementById('bill').value;
  const servicePercent = document.getElementById('percentService').value;
  const peopleQuantity = document.getElementById('amountPeople').value;
  const tipPercent = document.getElementById('tip');
  const wordEach = document.getElementById('each');
  const totalResult = document.getElementById('result');
  //check fill in input
  if (billAmount === '' || servicePercent === '') {
    alert('You need to fill in all the fields!');
    totalResult.style.display = 'none';
  } else {
    let total = (billAmount * servicePercent) / peopleQuantity;
    total = total.toFixed(2);
    tipPercent.innerHTML = total;
    totalResult.style.display = 'block';
  }
 //check quantity of people for word "each"
  if (peopleQuantity === '' || peopleQuantity <= 1) {
    wordEach.style.display = 'none';
  } else {
    wordEach.style.display = 'block';
  }
  return;
}

calculateBtn.addEventListener('click', function (event) {
  event.preventDefault(); 
 return calculateTips();
});

