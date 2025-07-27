// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
            e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                                behavior: 'smooth'
                                        });
                                            });
                                            });

                                            // Scroll Animation for Sections
                                            const sections = document.querySelectorAll('.hero, .about, .services, .cta, .contact');

                                            window.addEventListener('scroll', () => {
                                                sections.forEach(section => {
                                                        const rect = section.getBoundingClientRect();
                                                                if (rect.top < window.innerHeight * 0.75) {
                                                                            section.classList.add('visible');
                                                                                    }
                                                                                        });
                                                                                        });

                                                                                        // Sticky Header
                                                                                        window.onscroll = function() {
                                                                                            let header = document.querySelector('header');
                                                                                                if (window.pageYOffset > 0) {
                                                                                                        header.classList.add('sticky');
                                                                                                            } else {
                                                                                                                    header.classList.remove('sticky');
                                                                                                                        }
                                                                                                                        };