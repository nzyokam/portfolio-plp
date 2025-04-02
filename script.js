document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".one", {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    delay: 0.5,
    ease: "ease.inOut",
  });

  gsap.to(".stager", {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    stagger: 0.2,
    ease: "ease.inOut",
    delay: 1,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showBtn = document.getElementById("show-resume-btn");
  const closeBtn = document.getElementById("close-resume-btn");
  const overlay = document.getElementById("cv-overlay");

  showBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    showBtn.classList.add("hidden");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    showBtn.classList.remove("hidden");
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
      showBtn.classList.remove("hidden");
    }
  });
});
document.querySelectorAll(".book .cover").forEach((cover) => {
  cover.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents event bubbling issues

    // Toggle the 'flipped' class on click
    this.classList.toggle("flipped");
  });
});

// Detect if the user is on a touch device
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

document.querySelectorAll(".book").forEach((book) => {
  let cover = book.querySelector(".cover");

  if (isTouchDevice) {
    // Enable click toggle only for touch devices (mobile)
    book.addEventListener("click", function () {
      if (cover.style.transform === "rotateY(-80deg)") {
        cover.style.transform = "rotateY(0deg)";
      } else {
        cover.style.transform = "rotateY(-80deg)";
      }
    });
  }
});

const projects = [
  {
    id: "card1",
    emoji: "🤔",
    title: "PRODUCT LIST CART",
    description:
      "A dynamic product listing featuring a functional shopping cart, allowing users to add, remove, and adjust item quantities. Built with React, Tailwind CSS, Framer Motion, and other libraries.",
    github: "https://github.com/nzyokam/desserts",
    live: "https://productlistcartfrontendmentor.netlify.app/",
  },
  {
    id: "card2",
    emoji: "🤩",
    title: "CONFERENCE TICKET GENERATOR",
    description:
      "An interactive form that generates personalized conference tickets upon submission, featuring form validation and dynamic ticket rendering. Developed using React, Tailwind CSS, Framer Motion, and other libraries.",
    github: "https://github.com/nzyokam/CodingConferenceTicketGenerator",
    live: "https://codingconferencegenerator.netlify.app/",
  },
  {
    id: "card3",
    emoji: "🚀",
    title: "SPACE TOURISM",
    description:
      "A visually captivating website that takes users on a journey through space exploration. Features dedicated sections highlighting planets, space travel experiences, and futuristic missions.",
    github: "https://github.com/nzyokam/spacetourism.git",
    live: "https://touringspace.netlify.app/",
  },
  {
    id: "card4",
    emoji: "📩",
    title: "CONTACT FORM",
    description:
      "A responsive and accessible contact form with real-time validation and success messages, ensuring a seamless user experience. Crafted with React, Tailwind CSS, Framer Motion, and other libraries.",
    github: "https://github.com/nzyokam/contactformnosubmit",
    live: "https://contactformnosubmit.netlify.app/",
  },
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="heading">
          <div>
              <div>${project.emoji}</div>
              <br />
              <div>${project.title}</div>
              <br />
              <p>${project.description}</p>
              <div style="margin-top: 10px"><strong>Check Out Live Site & Github Repo Below</strong></div>
              <br />
              <div style="display: flex; flex-direction: row; width: 100%">
                  <div style="justify-content: space-around;">
                      <a href="${project.github}" class="git" target="_blank" title="Go to Github" style="margin-right: 20px;">
                          <img class="git" src="images/git.svg"/>
                      </a>
                      <a href="${project.live}" target="_blank" title="Go to Live Site">
                          <img class="git" src="images/live.png"/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  `;
  container.appendChild(card);
});
function showSideBar() {
  const sidebar = document.getElementById("bar");
  const menuItems = document.querySelectorAll(".menu li");

  sidebar.classList.add("active");

  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("stagger");
    }, index * 200);
  });
}

function hideSideBar() {
  const sidebar = document.getElementById("bar");
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach((item) => {
    item.classList.remove("stagger");
  });

  setTimeout(() => {
    sidebar.classList.remove("active");
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");
  const submitButton = document.getElementById("submitButton");
  if (
    !form ||
    !firstName ||
    !lastName ||
    !phone ||
    !email ||
    !message ||
    !successMessage ||
    !submitButton
  ) {
    console.error(
      "One or more form elements are missing. Check your HTML IDs."
    );
    return;
  }
  const nameRegex = /^[a-zA-Z]{3,}$/;
  const phoneRegex = /^\+2547\d{8}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  function validateField(field, regex, errorMessage) {
    const errorElement = field.nextElementSibling;
    if (!regex.test(field.value.trim())) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  }

  function checkFormCompletion() {
    const allFilled =
      firstName.value.trim() !== "" &&
      lastName.value.trim() !== "" &&
      phone.value.trim() !== "" &&
      email.value.trim() !== "" &&
      message.value.trim() !== "";

    submitButton.disabled = !allFilled;
    submitButton.disabled = !allFilled;
    submitButton.style.backgroundColor = allFilled ? "#720e9e" : "gray";
  }

  form.addEventListener("input", checkFormCompletion); // Enable/disable submit button on input

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    valid &= validateField(
      firstName,
      nameRegex,
      "First name must be at least 3 letters."
    );
    valid &= validateField(
      lastName,
      nameRegex,
      "Last name must be at least 3 letters."
    );
    valid &= validateField(
      phone,
      phoneRegex,
      "Phone number must be in format +2547XXXXXXXX."
    );
    valid &= validateField(email, emailRegex, "Email must be a Gmail address.");

    if (message.value.trim() === "") {
      const errorElement = message.nextElementSibling;
      if (errorElement) {
        errorElement.textContent = "Message cannot be empty.";
        errorElement.style.display = "block";
      }
      valid = false;
    } else {
      const errorElement = message.nextElementSibling;
      if (errorElement) {
        errorElement.style.display = "none";
      }
    }

    if (valid) {
      if (successMessage) {
        successMessage.style.opacity = 1;

        setTimeout(() => {
          successMessage.style.opacity = 0;
          form.reset();
          checkFormCompletion();
        }, 3000);
      } else {
        console.error("Success message element is missing.");
      }
    }
  });
});
