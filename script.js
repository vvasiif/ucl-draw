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




$(document).ready(function() {
    // Function to load service based on URL hash
    function loadServiceFromHash() {
        var hash = window.location.hash.substring(1); // Get the hash value without '#'
        if (hash) {
            // Remove active class from all services and links
            $('.service-detail').removeClass('active');
            $('a[data-service]').removeClass('active');

            // Add active class to the selected service and link
            $('#' + hash).addClass('active');
            $('a[data-service="' + hash + '"]').addClass('active');
        }
    }

    // Load service based on URL hash on page load
    loadServiceFromHash();

    // Handle click events on service links
    $('a[data-service]').on('click', function(event) {
        event.preventDefault();
        var serviceId = $(this).data('service');
        window.location.hash = serviceId;

        // Remove active class from all services and links
        $('.service-detail').removeClass('active');
        $('a[data-service]').removeClass('active');

        // Add active class to the selected service and link
        $('#' + serviceId).addClass('active');
        $(this).addClass('active');
    });
    
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
