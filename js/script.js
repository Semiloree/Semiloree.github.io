// Tidio chat: hide Tidio's default floating bubble and drive it from our own
// styled "Chat with me" button instead.
document.addEventListener("tidioChat-ready", function () {
  window.tidioChatApi.hide();
});

document.getElementById('chat-btn').addEventListener('click', function() {
  if (window.tidioChatApi) {
    window.tidioChatApi.show();
    window.tidioChatApi.open();
  }
});



// JavaScript for toggling the mobile navigation menu
document.getElementById('hamburger').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.add('active');

});

function closeMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.style.top = '-100%';
    setTimeout(() => {
        mobileNav.classList.remove('active');
        mobileNav.style.top = ''; // reset to default
    }, 500); // This should match the CSS transition duration
}

document.getElementById('close-menu').addEventListener('click', closeMobileNav);

// Smooth-scroll the mobile nav links to their section, then close the menu
document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        closeMobileNav();
        if (targetSection) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }, 300); // let the mobile menu finish closing first
        }
    });
});

// JavaScript to add animation classes on scroll
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById('about-me-section');
    const getToKnow = aboutSection.querySelector('.get-to-know');
    const mySkills = aboutSection.querySelector('.my-skills');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-animate-in');

          // Stagger each skill pill's pop-in
          if (entry.target === mySkills) {
            mySkills.querySelectorAll('.skills-list span').forEach((span, i) => {
              span.style.transitionDelay = `${0.5 + i * 0.05}s`;
            });
          }

          observer.unobserve(entry.target); // Unobserve after animation
        }
      });
    }, observerOptions);

    [getToKnow, mySkills].forEach(el => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Animation Observer
    const projectsSection = document.getElementById('projects-section');
    const projects = projectsSection.querySelectorAll('.project');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.project-slider').classList.add('fade-in-right', 'animate-in');
                entry.target.querySelector('.project-details').classList.add('fade-in-bottom', 'animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projects.forEach(project => observer.observe(project));

    // Slider Functionality
    const sliders = projectsSection.querySelectorAll('.project-slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('.slider-image');
        const totalImages = images.length;
        const leftButton = slider.querySelector('.slider-btn.left');
        const rightButton = slider.querySelector('.slider-btn.right');

        const showImage = (index) => {
          const offset = -index * 100; // Calculate the offset for sliding
          slider.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
            images.forEach((img, idx) => {
                img.classList.remove('active');
                if (idx === index) {
                    img.classList.add('active');
                }
            });
        };

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
            showImage(currentIndex);
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });

        // Initialize first image as active
        showImage(currentIndex);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const uiUxProjects = document.querySelectorAll('.ui-ux-project');

    uiUxProjects.forEach((project) => {
        const sliderWrapper = project.querySelector('.ui-ux-slider-wrapper');
        const sliderImages = project.querySelectorAll('.ui-ux-slider-image');
        const leftButton = project.querySelector('.ui-ux-slider-btn.left');
        const rightButton = project.querySelector('.ui-ux-slider-btn.right');

        let currentIndex = 0;

        function updateSliderPosition() {
            // Move the sliderWrapper to show the current image
            const translateXValue = -currentIndex * 100; // Shift by 100% per image
            sliderWrapper.style.transform = `translateX(${translateXValue}%)`;
        }

        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? sliderImages.length - 1 : currentIndex - 1;
            updateSliderPosition();
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex === sliderImages.length - 1) ? 0 : currentIndex + 1;
            updateSliderPosition();
        });

        updateSliderPosition(); // Initialize the first image
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitches = document.querySelectorAll('#dark-mode-toggle, #mobile-nav-dark-mode-toggle');
  const body = document.body;

  function toggleDarkMode(isChecked) {
      if (isChecked) {
          body.classList.add('dark-mode');
      } else {
          body.classList.remove('dark-mode');
      }

      toggleSwitches.forEach(switchElement => {
          switchElement.checked = isChecked;
      });
  }

  toggleSwitches.forEach(switchElement => {
      switchElement.addEventListener('change', function () {
          toggleDarkMode(this.checked);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".web-app-project-slider");

    sliders.forEach((slider) => {
        let currentIndex = 0;
        const images = slider.querySelectorAll(".web-app-slider-image");
        const totalImages = images.length;
        const wrapper = slider.querySelector(".web-app-slider-wrapper");
        const leftBtn = slider.querySelector(".web-app-slider-btn.left");
        const rightBtn = slider.querySelector(".web-app-slider-btn.right");

        const updateSlider = () => {
            const offset = -currentIndex * 100;
            wrapper.style.transform = `translateX(${offset}%)`;
        };

        leftBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
            updateSlider();
        });

        rightBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
            updateSlider();
        });

        // Initialize slider
        updateSlider();
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';
    successMessage.style.display = 'none';

    // Validation logic
    if (!name) {
      nameError.textContent = 'Name cannot be empty.';
      nameError.style.display = 'block';
      isValid = false;
    }

    if (!email) {
      emailError.textContent = 'Email cannot be empty.';
      emailError.style.display = 'block';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.textContent = 'Invalid email format.';
      emailError.style.display = 'block';
      isValid = false;
    }

    if (!message) {
      messageError.textContent = 'Message cannot be empty.';
      messageError.style.display = 'block';
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if invalid
      return;
    }

    // Form validated successfully
    alert('Form validated successfully. Your message is being sent.');

    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload
      fetch(form.action, {
        method: form.method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
        .then((response) => {
          if (response.ok) {
            successMessage.style.display = 'block';
            form.reset();
          } else {
            alert('Failed to send the message. Please try again.');
          }
        })
        .catch((error) => console.error('Error:', error));
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default jump behavior
          
          // Get target section ID from href
          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          // Scroll smoothly to the target section
          window.scrollTo({
              top: targetSection.offsetTop - 50, // Adjusts for navbar height
              behavior: "smooth"
          });

          // Remove active class from all links
          links.forEach(l => l.classList.remove("active"));
          this.classList.add("active"); // Highlight clicked link
      });
  });

  // Highlight navbar link when scrolling
  window.addEventListener("scroll", function() {
      let scrollPosition = window.scrollY;

      links.forEach(link => {
          let section = document.querySelector(link.getAttribute("href"));
          if (section.offsetTop - 100 <= scrollPosition &&
              section.offsetTop + section.offsetHeight > scrollPosition) {
              links.forEach(l => l.classList.remove("active"));
              link.classList.add("active");
          }
      });
  });
});