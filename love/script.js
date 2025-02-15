function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.container, #proposal, #wish, #surprise').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function startAnimation() {
    document.querySelector('.hearts').classList.add('animate');
}
