document.addEventListener("DOMContentLoaded", () => {
  
    gsap.to(".one", {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        delay: 0.5,
        ease: "ease.inOut"
    });

    gsap.to(".stager", {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        stagger: 0.2,
        ease: "ease.inOut",
        delay: 1
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
      description: "A dynamic product listing featuring a functional shopping cart, allowing users to add, remove, and adjust item quantities. Built with React, Tailwind CSS, Framer Motion, and other libraries.",
      github: "https://github.com/nzyokam/desserts",
      live: "https://productlistcartfrontendmentor.netlify.app/"
  },
  {
      id: "card2",
      emoji: "🤩",
      title: "CONFERENCE TICKET GENERATOR",
      description: "An interactive form that generates personalized conference tickets upon submission, featuring form validation and dynamic ticket rendering. Developed using React, Tailwind CSS, Framer Motion, and other libraries.",
      github: "https://github.com/nzyokam/CodingConferenceTicketGenerator",
      live: "https://codingconferencegenerator.netlify.app/"
  },
  {
      id: "card3",
      emoji: "🚀",
      title: "SPACE TOURISM",
      description: "A visually captivating website that takes users on a journey through space exploration. Features dedicated sections highlighting planets, space travel experiences, and futuristic missions.",
      github: "https://github.com/nzyokam/spacetourism.git",
      live: "https://touringspace.netlify.app/"
  },
  {
      id: "card4",
      emoji: "📩",
      title: "CONTACT FORM",
      description: "A responsive and accessible contact form with real-time validation and success messages, ensuring a seamless user experience. Crafted with React, Tailwind CSS, Framer Motion, and other libraries.",
      github: "https://github.com/nzyokam/contactformnosubmit",
      live: "https://contactformnosubmit.netlify.app/"
  }
];

const container = document.getElementById("projects-container");


projects.forEach(project => {
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
                          <img class="git" src="git.svg"/>
                      </a>
                      <a href="${project.live}" target="_blank" title="Go to Live Site">
                          <img class="git" src="live.png"/>
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
      }, index * 200); // 200ms stagger delay per item
  });
}

function hideSideBar() {
  const sidebar = document.getElementById("bar");
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
      item.classList.remove("stagger");
  });

  setTimeout(() => {
      sidebar.classList.remove("active");
  }, 300);
}
