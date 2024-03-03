
// Add fade-in animation to each activity
const activities = document.querySelectorAll('.activity');

activities.forEach(activity => {
    activity.classList.add('fade-in');
});



function toggleExpansion(button) {
  const card = button.closest('.skill-card');
  card.classList.toggle('expanded');
  
  const additionalText = card.querySelector('.additional-text');
  additionalText.style.display = additionalText.style.display === 'block' ? 'none' : 'block';
}

document.querySelector(".nav__toggle__icon").addEventListener('click', function() {
  document.querySelector('.nav__list').classList.toggle('active');
});





