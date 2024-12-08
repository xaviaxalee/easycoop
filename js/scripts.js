document.querySelector('.hamburger-menu').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});


document.querySelector('.play-btn').addEventListener('click', () => {
  const modal = document.getElementById('video-modal');
  modal.style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', () => {
  const modal = document.getElementById('video-modal');
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('video-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// price toggle
const monthlyBtn = document.getElementById("monthly-btn");
const yearlyBtn = document.getElementById("yearly-btn");
const monthlyPlans = document.getElementById("monthly-plans");
const yearlyPlans = document.getElementById("yearly-plans");

const togglePlans = (showElement, hideElement) => {
  // Start animation
  hideElement.classList.remove("visible");
  hideElement.classList.add("hidden");

  // Wait for animation to complete
  setTimeout(() => {
    hideElement.style.display = "none";
    showElement.style.display = "flex";
    showElement.classList.remove("hidden");
    showElement.classList.add("visible");
  }, 500); // Match the CSS transition duration
};

// Button event listeners
monthlyBtn.addEventListener("click", () => {
  togglePlans(monthlyPlans, yearlyPlans);
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
});

yearlyBtn.addEventListener("click", () => {
  togglePlans(yearlyPlans, monthlyPlans);
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});


// faq
// Add event listener to all question elements
document.querySelectorAll('.question').forEach((question) => {
  question.addEventListener('click', function () {
    const faqItem = this.parentElement;

    // Close all other open items
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked item
    faqItem.classList.toggle('open');
  });
});


document.querySelector('.contact-button').addEventListener('click', () => {
  window.location.href = '../contact.html'; // Redirect to the contact page
});

