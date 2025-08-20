// Content loader function
async function loadContent() {
    const sections = [
        { id: 'about-content', file: 'about.html' },
        { id: 'experience-content', file: 'experience.html' },
        { id: 'portfolio-content', file: 'portfolio.html' },
        { id: 'skills-content', file: 'skills.html' },
        { id: 'extracurriculars-content', file: 'extracurriculars.html' },
        { id: 'contact-content', file: 'contact.html' }
    ];

    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const content = await response.text();
                document.getElementById(section.id).innerHTML = content;
            } else {
                document.getElementById(section.id).innerHTML = `<p>Content not found for ${section.file}</p>`;
            }
        } catch (error) {
            document.getElementById(section.id).innerHTML = `<p>Error loading content from ${section.file}</p>`;
        }
    }
}

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
