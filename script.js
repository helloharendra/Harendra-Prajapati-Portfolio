
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Typing animation for hero text
        document.addEventListener('DOMContentLoaded', function() {
            const heroText = "Full Stack Developer specializing in Flutter and FastAPI, with a passion for building scalable applications and integrating AI/ML solutions.";
            const animatedText = document.querySelector('.animated-text');
            let i = 0;
            
            function typeWriter() {
                if (i < heroText.length) {
                    animatedText.innerHTML += heroText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20); // Adjust typing speed here
                }
            }
            
            // Start typing animation after a slight delay
            setTimeout(typeWriter, 1800); // Wait until title animation completes
        });

        // Animate skill bars on scroll
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        };

        // Intersection Observer for skill bars animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }
