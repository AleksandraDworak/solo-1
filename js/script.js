

function toggleMenu(visible) {
  document.querySelector(".sidebar").classList.toggle("show", visible)
}

document.querySelector(".dropdown-button").addEventListener("click", function(e) {
  e.preventDefault();
  toggleMenu();
});






function closeModal() {
  document.getElementById('overlay').classList.remove('show-modal')
  document.getElementById('overlay').classList.remove('show-modalLogout')
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
    closeModalLogout()
  })
})
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
    closeModalLogout()
  }
})
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
    closeModalLogout()
  }
})

function closeModal() {
  document.getElementById('overlay').classList.remove('showm')
}
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    closeModal()
  })
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal()
  }
})
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})

function openModalLogout(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    
    modalLogin.classList.remove('showm')
    modalMsg.classList.remove('showm')
    modalLogout.classList.remove('showm')
    
  })
  document.querySelector('#overlay').classList.add('showm')
  document.querySelector('#modalLogout').classList.add('showm')
}
function openModalLogin(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    
    modalLogin.classList.remove('showm')
    modalMsg.classList.remove('showm')
    modalLogout.classList.remove('showm')
    
  })
  document.querySelector('#overlay').classList.add('showm')
  document.querySelector('#modalLogin').classList.add('showm')
}

function openModalMsg(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    
    modalLogin.classList.remove('showm')
    modalMsg.classList.remove('showm')
    modalLogout.classList.remove('showm')
    
  })
  document.querySelector('#overlay').classList.add('showm')
  document.querySelector('#modalMsg').classList.add('showm')
}


var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
            label: "Signups",
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            hidden: true,
        }]
    },
});

