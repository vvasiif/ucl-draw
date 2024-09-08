// Shrink Navbar on Scroll
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('clientsSection').style.display = 'none';
    document.getElementById('investmentSection').style.display = 'none';

    
}

function backModal() {
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('clientsSection').style.display = 'none';
    document.getElementById('investmentSection').style.display = 'none';

    // const formFields = document.querySelectorAll('#formSection input, #formSection select, #formSection textarea');
    // formFields.forEach(field => {
    //     if (field.type === 'checkbox' || field.type === 'radio') {
    //         field.checked = false;
    //     } else {
    //         field.value = '';
    //     }
    // });
}

document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.querySelector("#phone");
  
    const iti = window.intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: function (success, failure) {
        fetch('https://ipinfo.io', {
          headers: {
            'Accept': 'application/json'
          }
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (ipjson) {
            success(ipjson.country);
          })
          .catch(function () {
            success("us");
          });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // for formatting/validation
    });
  });
  


document.getElementById('investmentButton').onclick = function () {
    document.getElementById('investmentSection').style.display = 'block';
    document.getElementById('clientsSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'none';
};

document.getElementById('clientsButton').onclick = function () {
    document.getElementById('clientsSection').style.display = 'block';
    document.getElementById('investmentSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'none';
};

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
};

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Slick Carousel Initialization
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

$(document).ready(function () {
    $('.event-img').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    const loadingBar = document.getElementById('loading-bar');

    let progress = 0;

    const interval = setInterval(() => {
        progress += 10; // Gradually increase progress
        loadingBar.style.width = `${progress}%`; // Smoothly update the width of the loading bar
        
        if (progress >= 100) {
            clearInterval(interval);

            // Fade out the preloader
            preloader.style.opacity = '0';

            // After the fade-out, hide the preloader and show the content
            setTimeout(() => {
                preloader.style.display = 'none';
                content.style.display = 'block';
            }, 500); // Match fade-out duration
        }
    }, 100); // Loading bar updates every 100ms for a smooth transition
});


document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".list-group-item");
    const serviceContents = document.querySelectorAll(".service-content");

    // Function to show the selected service and hide others
    function showService(serviceId) {
        serviceContents.forEach(content => {
            content.style.display = "none"; // Hide all contents
        });
        document.querySelector(`#${serviceId}`).style.display = "block"; // Show the selected service
    }

    // Function to activate the clicked list item
    function activateListItem(clickedItem) {
        listItems.forEach(item => {
            item.classList.remove("active"); // Remove active class from all items
        });
        clickedItem.classList.add("active"); // Add active class to the clicked item
    }

    // Add event listeners to each list item
    listItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const serviceId = this.getAttribute("data-service"); // Get service ID from data attribute
            activateListItem(this); // Activate the clicked item
            showService(serviceId); // Show the corresponding service details
        });
    });

    // By default, show the first service's details
    showService("investment-advisory");
});



document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const phoneInput = document.getElementById('phone-number-input'); 
    const investmentButton = document.getElementById('investmentButton');
    const clientsButton = document.getElementById('clientsButton');

    function checkFormCompletion() {
        const nameFilled = nameInput.value.trim() !== '';
        const emailFilled = emailInput.value.trim() !== '';
        const phoneFilled = phoneInput.value.trim() !== '';

        if (nameFilled && emailFilled && phoneFilled) {
            investmentButton.disabled = false;
            clientsButton.disabled = false;
        } else {
            investmentButton.disabled = true;
            clientsButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', checkFormCompletion);
    emailInput.addEventListener('input', checkFormCompletion);
    phoneInput.addEventListener('input', checkFormCompletion);

    // Initialize button state on page load
    checkFormCompletion();
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const clientCards = document.querySelectorAll('.client-card-wrapper');
    const loadMoreButton = document.getElementById('load-more');
    const initialDisplayCount = 12;
    
    // Display only the first 24 cards by default
    clientCards.forEach((card, index) => {
        if (index < initialDisplayCount) {
            card.classList.add('show');
        }
    });

    // Show "Load More" button if there are more than initialDisplayCount cards
    if (clientCards.length > initialDisplayCount) {
        loadMoreButton.style.display = 'inline-block';
    }

    // Add event listener for "Load More" button
    loadMoreButton.addEventListener('click', () => {
        clientCards.forEach(card => {
            card.classList.add('show');
        });
        loadMoreButton.style.display = 'none'; // Hide the button after showing all cards
    });
});
