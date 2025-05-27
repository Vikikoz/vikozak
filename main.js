<script>
document.querySelector('.btn-main[href="galerie.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('fade-out');
    setTimeout(() => {
        window.location = this.href;
    }, 500); // Durée identique à la transition CSS
});
</script>