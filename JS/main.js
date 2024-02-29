function toggleExpansion(button) {
    const card = button.closest('.skill-card');
    card.classList.toggle('expanded');
    
    const additionalText = card.querySelector('.additional-text');
    additionalText.style.display = additionalText.style.display === 'block' ? 'none' : 'block';
}

const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});


const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const top = section.offsetTop - 50;
        const bottom = top + section.clientHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {

            const navLink = document.querySelector('.nav__link[href="#home"]');
            navLink.classList.add('active-link');
        } else {

            const navLink = document.querySelector('.nav__link[href="#education"]');
            navLink.classList.remove('active-link');
        }
    });
});


const data = {
    labels: ['Hard', 'Easy', 'Medium'],
    datasets: [{
      label: 'Number of Solved',
      data: [4, 28, 85],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 20
    }]
  };

  const config = {
    type: 'pie',
    data,
    options: {
        layout: {
            padding: 20
        },
    }
  };

  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;

  var mybutton = document.getElementById("myBtn");

// Function to show the button when scrolling down 20px
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Add an event listener to the window object, 
// calling the scrollFunction() whenever the page is scrolled
window.onscroll = function() { scrollFunction(); };

// Function to scroll to the top of the page when the button is clicked
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Add an event listener to the button, 
// calling the topFunction() when the button is clicked
mybutton.addEventListener("click", topFunction);