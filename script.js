function toggleMenu() {
     const navLinks = document.getElementById('navLinks');
     navLinks.classList.toggle('show');
 }
 
 const certificates = [
     {
         title: "Python Course",
         image: "./img/python course.png"
     },
     {
         title: "Code Battle",
         image: "./img/code battle.png"
     },
     {
         title: "Web Development",
         image: "./img/web development.png"
     },
     {
         title: "JavaScript Course",
         image: "./img/udemy.jpg"
     },
     {
         title: "Scaler",
         image: "./img/Scaler.jpg"
     },
     {
         title: "Prodigy Intership",
         image: "./img/Prodigy.jpg"
     },
     {
         title: "Try Succeed",
         image: "./img/TrySuc.jpg"
     },
     {
         title: "LetsUpgrade",
         image: "./img/lets.jpg"
     }
 ];
 
 const certificateContainer = document.querySelector(".certificate-container");
 
 if (certificateContainer) {
     const modal = document.createElement("div");
     modal.className = "modal";
     modal.innerHTML = `
         <div class="modal-content">
             <span class="close">&times;</span>
             <p class="modal-title"></p>
             <hr>
             <img src="" alt="Certificate Image" class="modal-img">
         </div>
     `;
     document.body.appendChild(modal);
 
     certificates.forEach((certificate) => {
         const card = document.createElement("div");
         card.className = "certificate-card";
         card.innerHTML = `
             <img src="${certificate.image}" alt="${certificate.title}" class="certificate-img">
         `;
         certificateContainer.appendChild(card);
 
         const img = card.querySelector(".certificate-img");
         img.addEventListener("click", () => {
             const modalImg = modal.querySelector(".modal-img");
             const modalTitle = modal.querySelector(".modal-title");
 
             modalImg.src = certificate.image;
             modalImg.alt = certificate.title;
             modalTitle.textContent = certificate.title;
             modal.style.display = "block";
         });
     });
 
     const closeModal = modal.querySelector(".close");
     closeModal.addEventListener("click", () => {
         modal.style.display = "none";
     });
 
     modal.addEventListener("click", (e) => {
         if (e.target === modal || e.target.classList.contains("close")) {
             modal.style.display = "none";
         }
     });
 }

 function toggleMenu() {
     const navLinks = document.getElementById('navLinks');
     navLinks.classList.toggle('show'); // Toggle the 'show' class
 }
 
 function Background() {
     const body = document.body;
     const themeIcon = document.getElementById('theme-icon');
 
     body.classList.toggle('dark-theme');
 
     if (body.classList.contains('dark-theme')) {
         themeIcon.textContent = 'light_mode';
         localStorage.setItem('theme', 'dark');
     } else {
         themeIcon.textContent = 'dark_mode';
         localStorage.setItem('theme', 'light');
     }
 }
 
 document.addEventListener("DOMContentLoaded", () => {
     if (localStorage.getItem('theme') === 'dark') {
         document.body.classList.add('dark-theme');
         document.getElementById('theme-icon').textContent = 'light_mode';
     }
 });