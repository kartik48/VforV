// Photo data - timeline photos
const photos = [
    { src: 'Pictures/T1.HEIC', caption: 'The beginning of something beautiful' },
    { src: 'Pictures/T2.HEIC', caption: 'Every moment with you is a treasure' },
    { src: 'Pictures/T3.HEIC', caption: 'You make my heart smile' },
    { src: 'Pictures/T4_1.HEIC', caption: 'So many memories, so much happiness' },
    { src: 'Pictures/T4_2.HEIC', caption: 'So many memories, so much happiness' },
    { src: 'Pictures/T4_3.HEIC', caption: 'So many memories, so much happiness' },
    { src: 'Pictures/T4_4.HEIC', caption: 'So many memories, so much happiness' },
    { src: 'Pictures/T5.jpg', caption: 'With you, every day is an adventure' },
    { src: 'Pictures/T6.HEIC', caption: 'Here\'s to many more moments together' }
];

let currentPhotoIndex = 0;
let noClickCount = 0;

// Floating Hearts and Flowers Animation
function createHeart() {
    const element = document.createElement('div');
    element.classList.add('heart');

    // Randomly choose between heart and flower
    const isFlower = Math.random() > 0.5;
    const size = Math.random() * 15 + 10;

    if (isFlower) {
        // Create Rapunzel-style purple flower
        element.innerHTML = `
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#glow)">
                    <circle cx="12" cy="12" r="3" fill="#9b59b6" opacity="0.8"/>
                    <path d="M12 2C13 4 13 6 12 8C11 6 11 4 12 2Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M12 16C13 18 13 20 12 22C11 20 11 18 12 16Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M2 12C4 11 6 11 8 12C6 13 4 13 2 12Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M16 12C18 11 20 11 22 12C20 13 18 13 16 12Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M5 5C6.5 6.5 7 8 6.5 9.5C5 9 3.5 7.5 5 5Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M19 19C17.5 17.5 17 16 17.5 14.5C19 15 20.5 16.5 19 19Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M19 5C17.5 6.5 17 8 17.5 9.5C19 9 20.5 7.5 19 5Z" fill="#8e44ad" opacity="0.6"/>
                    <path d="M5 19C6.5 17.5 7 16 6.5 14.5C5 15 3.5 16.5 5 19Z" fill="#8e44ad" opacity="0.6"/>
                </g>
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        `;
    } else {
        // Create purple/black heart
        element.innerHTML = `
            <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="#1a1a1a"
                      stroke="#9b59b6"
                      stroke-width="1.5"/>
            </svg>
        `;
    }

    element.style.left = Math.random() * 100 + '%';
    element.style.animationDuration = (Math.random() * 3 + 5) + 's';

    document.getElementById('heartsContainer').appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 8000);
}

// Create hearts continuously
setInterval(createHeart, 300);

// Initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200);
}

// Music Control
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.textContent = '🎵 Play Music';
        musicToggle.classList.remove('playing');
    } else {
        backgroundMusic.play();
        musicToggle.textContent = '🎵 Music Playing';
        musicToggle.classList.add('playing');
    }
    isMusicPlaying = !isMusicPlaying;
});

// Section Navigation
function nextSection(sectionNumber) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Special handling for intermediate message
    if (sectionNumber === 2) {
        document.getElementById('section2').classList.add('active');
        showIntermediateMessage();
        return;
    }

    document.getElementById('section' + sectionNumber).classList.add('active');

    // Trigger celebration when showing success section
    if (sectionNumber === 6) {
        createHeartExplosion();
    }
}

// Show intermediate message with animation
function showIntermediateMessage() {
    const textElement = document.getElementById('intermediateText');
    const message = "I know K has been a bad baby, But....";
    let index = 0;

    // Clear any existing text
    textElement.textContent = '';
    textElement.style.opacity = 1;

    // Type out the message character by character
    const typingInterval = setInterval(() => {
        if (index < message.length) {
            textElement.textContent += message[index];
            index++;
        } else {
            clearInterval(typingInterval);
            // Wait 2 seconds after typing completes, then move to question section
            setTimeout(() => {
                document.getElementById('section2').classList.remove('active');
                document.getElementById('section3').classList.add('active');
            }, 2000);
        }
    }, 50); // 50ms per character for typing effect
}

// Countdown Timer
function updateCountdown() {
    const valentine = new Date('2026-02-14T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = valentine - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Photo Gallery Modal
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = 'block';
    modalImg.src = photos[index].src;
    modalCaption.textContent = photos[index].caption;
}

function closeModal() {
    document.getElementById('photoModal').style.display = 'none';
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    openModal(currentPhotoIndex);
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    openModal(currentPhotoIndex);
}

// Close modal on background click
document.getElementById('photoModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('photoModal')) {
        closeModal();
    }
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('photoModal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            prevPhoto();
        } else if (e.key === 'ArrowRight') {
            nextPhoto();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Yes/No Buttons with Fun Interaction
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const hint = document.getElementById('hint');

const noMessages = [
    'Are you sure?',
    'Really? Think again...',
    'Come on, give it another thought',
    'But we could have so much fun!',
    'Pretty please?',
    'I promise it\'ll be amazing',
    'Just click Yes already',
    'You know you want to...',
    'Last chance to reconsider',
    'The Yes button is looking pretty good right now'
];

function handleNo() {
    // Hide question section
    document.getElementById('section3').classList.remove('active');

    // Show "Pwease" section
    document.getElementById('section4').classList.add('active');
}

function backToQuestion() {
    // Hide "Pwease" section
    document.getElementById('section4').classList.remove('active');

    // Show question section again
    document.getElementById('section3').classList.add('active');
}

function handleYes() {
    // Hide question section
    document.getElementById('section3').classList.remove('active');

    // Show photo gallery
    document.getElementById('section5').classList.add('active');
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const element = document.createElement('div');
            const size = Math.random() * 30 + 20;
            const isFlower = Math.random() > 0.5;

            if (isFlower) {
                // Purple flower
                element.innerHTML = `
                    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#glow-explosion)">
                            <circle cx="12" cy="12" r="3" fill="#9b59b6" opacity="0.9"/>
                            <path d="M12 2C13 4 13 6 12 8C11 6 11 4 12 2Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M12 16C13 18 13 20 12 22C11 20 11 18 12 16Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M2 12C4 11 6 11 8 12C6 13 4 13 2 12Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M16 12C18 11 20 11 22 12C20 13 18 13 16 12Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M5 5C6.5 6.5 7 8 6.5 9.5C5 9 3.5 7.5 5 5Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M19 19C17.5 17.5 17 16 17.5 14.5C19 15 20.5 16.5 19 19Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M19 5C17.5 6.5 17 8 17.5 9.5C19 9 20.5 7.5 19 5Z" fill="#8e44ad" opacity="0.7"/>
                            <path d="M5 19C6.5 17.5 7 16 6.5 14.5C5 15 3.5 16.5 5 19Z" fill="#8e44ad" opacity="0.7"/>
                        </g>
                        <defs>
                            <filter id="glow-explosion">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                `;
            } else {
                // Purple/black heart
                element.innerHTML = `
                    <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                              fill="#1a1a1a"
                              stroke="#9b59b6"
                              stroke-width="2"/>
                    </svg>
                `;
            }

            element.style.position = 'fixed';
            element.style.left = '50%';
            element.style.top = '50%';
            element.style.zIndex = '10000';
            element.style.pointerEvents = 'none';

            const angle = (Math.random() * 360) * (Math.PI / 180);
            const distance = Math.random() * 300 + 100;
            const duration = Math.random() * 2 + 1;

            document.body.appendChild(heart);

            heart.animate([
                {
                    transform: 'translate(-50%, -50%) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, i * 30);
    }
}

// Confetti effect on page load
window.addEventListener('load', () => {
    // Add any additional initialization here
    console.log('Valentine website loaded! 💕');
});
