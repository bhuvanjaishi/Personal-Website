
    // Navbar Toggle mobile menu
    document.getElementById('mobile-menu').addEventListener('click', function() {
      document.getElementById('nav-menu').classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('active');
      });
    });


    // Index pahe BhuOne Joshi Name script
  const name = "BhuOne Joshi";  
  const span = document.getElementById("highlight");
  let index = 0;

  function type() {
    if(index < name.length) {
      span.textContent += name[index];
      index++;
      setTimeout(type, 150); // 150ms delay between letters
    }
  }

  type(); 




    // About page script 
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Typed Text Effect for about-header h1
    const header = document.querySelector("#about-header h1");
    const fullText = header.textContent;
    header.textContent = "";
    let index = 0;
    function typeWriter() {
      if(index < fullText.length) {
        header.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();

    // 2. Toggle extra info button for "Who I Am" section
    const aboutSection = document.getElementById("about-section");
    const paragraphs = aboutSection.querySelectorAll("p");
    // Hide the last paragraph initially
    paragraphs[paragraphs.length - 1].style.display = "none";

    // Create toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Show More";
    toggleBtn.style.margin = "15px 0";
    toggleBtn.style.padding = "8px 12px";
    toggleBtn.style.cursor = "pointer";
    aboutSection.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
      const lastPara = paragraphs[paragraphs.length - 1];
      if(lastPara.style.display === "none") {
        lastPara.style.display = "block";
        toggleBtn.textContent = "Show Less";
      } else {
        lastPara.style.display = "none";
        toggleBtn.textContent = "Show More";
      }
    });

    // 3. Navbar active link on scroll
    window.addEventListener("scroll", () => {
      const sections = ["about-header", "about-section", "skills", "footer"];
      const navLinks = document.querySelectorAll("#navbar nav ul li a");

      let currentSection = "";
      sections.forEach(id => {
        const section = document.getElementById(id);
        if(section) {
          const top = section.getBoundingClientRect().top;
          if(top <= 100) currentSection = id;
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    });
  });



// Skills page section script
  document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");

    // Animate the skill bars width from 0 to their current width smoothly
    skillLevels.forEach(skill => {
      const fullWidth = skill.style.width;
      skill.style.width = "0";
      skill.style.transition = "width 1.5s ease-in-out";

      // Trigger the animation after a short delay
      setTimeout(() => {
        skill.style.width = fullWidth;
      }, 100);
    });

    // Optional: Highlight skill name on hover
    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        item.querySelector(".skill-name").style.color = "#f39c12";
      });
      item.addEventListener("mouseleave", () => {
        item.querySelector(".skill-name").style.color = "";
      });
    });
  });



  
// Contact page script
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop default form action

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/bhuonejoshi123@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Contact form submitted successfully ✅");
        window.location.href = "index.html"; // Redirect after OK
      } else {
        alert("Form submission failed. Please try again.");
      }
    })
    .catch(error => {
      alert("Something went wrong. Try again.");
    });
  });

