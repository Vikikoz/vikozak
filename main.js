const btnMain = document.querySelector('.btn-main[href="galerie.html"]');
if (btnMain) {
    btnMain.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = this.href;
        }, 500); // Durée identique à la transition CSS
    });
}

document.querySelectorAll('.projet-nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        if (url && !this.classList.contains('invisible')) {
            window.location.href = url;
        }
    });
});

document.querySelectorAll('.projet-nav-btn:not(.invisible)').forEach(btn => {
    btn.addEventListener('click', function() {
        // Navigation ici (exemple)
        if(this.textContent === '→') {
            // Aller à la page suivante
        } else if(this.textContent === '←') {
            // Aller à la page précédente
        }
    });
});

function setLang(lang) {
  // ...existing code...
  // Relance l'effet d'apparition si besoin
  setTimeout(() => {
    document.querySelectorAll('.section-title-appear').forEach(h2 => h2.classList.remove('visible'));
    revealTitlesOnScroll();
  }, 50);
}


// ...existing code...

// Effet d’illumination dynamique sur les cartes savoir
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".savoir-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--x", `${x}%`);
      card.style.setProperty("--y", `${y}%`);
    });
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--x", "50%");
      card.style.setProperty("--y", "50%");
    });
  });
});