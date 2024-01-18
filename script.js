//enter points
var totalPointsElement;
var currentPoints = 0;

function submitPoints() {
  var pointsInput = document.getElementById('points-input');
  var pointsChart = document.getElementById('points-chart');
  var pointsValue = parseInt(pointsInput.value, 10);

  if (!isNaN(pointsValue) && pointsValue > 0) {
    var bar = document.createElement('div');
    var barLabel = document.createElement('div');

    bar.className = 'bar';
    barLabel.className = 'bar-label';

    bar.style.height = '0';
    bar.style.transition = 'height 1s ease-out';

    setTimeout(function () {
      bar.style.height = pointsValue + 'px';
      bar.appendChild(barLabel);
      pointsChart.appendChild(bar);

      setTimeout(function () {
        barLabel.style.opacity = '1';
      }, 500);
    }, 50);

    currentPoints += pointsValue;

    if (!totalPointsElement) {
      totalPointsElement = document.getElementById('total-points');
    }

    totalPointsElement.innerText = 'Totaal: ' + currentPoints;
  }
  document.getElementById("myForm").style.display = "none";
}

//code for popup in the punten.html page

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeButton() {
  document.getElementById('myForm').style.display = "none";
}


///Popup wachtwoord vergeten for the login page 

function openPasswordPopup() {
  document.getElementById('passwordPopup').style.display = 'block';
}

function closePasswordPopup() {
  document.getElementById('passwordPopup').style.display = 'none';
}

function submitNewPassword() {
  closePasswordPopup();
}

//codes for the challanges page

function toggleInfo(infoId) {
  var infoElement = document.getElementById(infoId);
  if (infoElement.style.display === 'block') {
    infoElement.style.display = 'none';
  } else {
    infoElement.style.display = 'block';
  }
}
