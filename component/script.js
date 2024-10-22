const sidebar = document.querySelector('.sidebar');
const collapseBtn = document.getElementById('collapse-btn');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const ctx = document.getElementById('registrationChart').getContext('2d');
// carousel
const carousel = document.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
let currentIndex = 0;


const applyDarkMode = (isDarkMode) => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode-active');
        document.documentElement.style.setProperty('--primary-color', 'rgba(72, 69, 84, 1)');
    } else {
        document.body.classList.remove('dark-mode-active');
        document.documentElement.style.setProperty('--primary-color', 'rgba(255, 255, 255, 1)');
    }
};

// Check localStorage for dark mode preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
        applyDarkMode(true);
    } else {
        applyDarkMode(false);
    }
});

// Event listener for toggling dark mode
darkModeToggle.addEventListener('click', () => {
    const isDarkModeActive = document.body.classList.toggle('dark-mode-active');

    // Set the CSS variable and store the preference in localStorage
    if (isDarkModeActive) {
        document.documentElement.style.setProperty('--primary-color', 'rgba(72, 69, 84, 1)');
        localStorage.setItem('darkMode', 'enabled');  // Save the dark mode state
    } else {
        document.documentElement.style.setProperty('--primary-color', 'rgba(255, 255, 255, 1)');
        localStorage.setItem('darkMode', 'disabled'); // Save the light mode state
    }
});


collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (sidebar.classList.contains('collapsed')) {
        collapseBtn.querySelector('i').classList.replace('fa-chevron-left', 'fa-chevron-right');
    } else {
        collapseBtn.querySelector('i').classList.replace('fa-chevron-right', 'fa-chevron-left');
    }
});


const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebars = document.querySelector('.nav-close');
const navContent = document.querySelector('.close-btn');

// close nav
closeBtn.addEventListener('click', () => {
    sidebars.style.display = 'none';
    openBtn.style.display = 'none';  // Hide the hamburger menu
    openBtn.style.display = 'inline-block';
});

// open nav
openBtn.addEventListener('click', () => {
    sidebars.style.display = 'block'; // Show the nav content
    closeBtn.style.display = 'inline-block';
});

// Function to open the navigation
const openNav = () => {
  sidebars.classList.remove('nav-closed');
  openBtn.style.display = 'none';  // Hide the hamburger menu
  closeBtn.style.display = 'inline-block';  // Show the close icon
  localStorage.setItem('navState', 'open');  // Store state in localStorage
};

// Function to close the navigation
const closeNav = () => {
  sidebars.classList.add('nav-closed');
  closeBtn.style.display = 'none';  
  openBtn.style.display = 'inline-block';  
  localStorage.setItem('navState', 'closed');  
};

// Event listeners
openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);





//   CHARTJS 
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Event Registrations per month',
            data: [300, 450, 320, 500, 400, 350, 300, 450, 380, 400, 300, 500],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },

    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black'  // Light mode tick color
                }
            },
            x: {
                ticks: {
                    color: 'black'  // Light mode tick color
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black'  // Light mode legend color
                }
            }
        }
    }
});

// Function to apply dark mode to the chart
const applyDarkModeToChart = (isDarkMode) => {
    if (isDarkMode) {
        chart.data.datasets[0].backgroundColor = 'rgba(255, 255, 255, 0.6)';  // Dark mode background color
        chart.options.scales.y.ticks.color = 'white';  // Dark mode y-axis tick color
        chart.options.scales.x.ticks.color = 'white';  // Dark mode x-axis tick color
        chart.options.plugins.legend.labels.color = 'white';  // Dark mode legend text color
    } else {
        chart.data.datasets[0].backgroundColor = 'rgba(75, 192, 192, 0.6)';  // Light mode background color
        chart.options.scales.y.ticks.color = 'black';  // Light mode y-axis tick color
        chart.options.scales.x.ticks.color = 'black';  // Light mode x-axis tick color
        chart.options.plugins.legend.labels.color = 'black';  // Light mode legend text color
    }
    chart.update();  // Re-render the chart
};



        // Carousel
function showSlide(index) {
    if (index < 0) {
        currentIndex = items.length - 1;
    } else if (index >= items.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex - 1);
});
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex + 1);
});
// Auto-play carousel
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);


const eventsData = [
    { name: "Cloud Innovation Summit", date: "2024-10-15", speaker: "Jane Doe", status: "Completed" },
    { name: "Blockchain Revolution Conference", date: "2024-11-05", speaker: "Dr. Peter Smith", status: "In Progress" },
    { name: "AI in Healthcare Symposium", date: "2024-12-01", speaker: "Dr. Alana Malik", status: "Completed" },
    { name: "Future of Fintech Forum", date: "2024-10-23", speaker: "John Lee", status: "Completed" },
    { name: "Data Analytics in Business", date: "2024-11-12", speaker: "Rachel Moore", status: "Completed" },
    { name: "Sustainable Energy Expo", date: "2024-09-28", speaker: "Prof. Alan Green", status: "Completed" },
    { name: "Web3 Interfaces Workshop", date: "2024-10-10", speaker: "Kevin Adams", status: "In Progress" },
    { name: "Cybersecurity for Startups", date: "2024-11-19", speaker: "Emily Zhang", status: "Completed" },
    { name: "Smart Cities Forum", date: "2024-10-18", speaker: "Dr. Maria Hernandez", status: "In Progress" },
    { name: "Tech Startup Mixer", date: "2024-09-30", speaker: "Guest Panel", status: "In Progress" },
];

const itemsPerPage = 10;
let currentPage = 1;

function displayEvents(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableBody = document.getElementById('eventTableBody');
    tableBody.innerHTML = '';

    for (let i = startIndex; i < endIndex && i < eventsData.length; i++) {
        const event = eventsData[i];
        const row = `
            <tr>
                <td>${event.name}</td>
                <td>${event.date}</td>
                <td>${event.speaker}</td>
                <td><span class="status ${event.status.toLowerCase().replace(' ', '-')}">${event.status}</span></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

function setupPagination() {
    const pageCount = Math.ceil(eventsData.length / itemsPerPage);
    const paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            displayEvents(currentPage);
            const currentButton = document.querySelector('.pagination button.active');
            currentButton.classList.remove('active');
            button.classList.add('active');
        });
        paginationElement.appendChild(button);
    }
}

// Initial display
displayEvents(currentPage);
setupPagination();


const prevBtns = document.getElementById('prevBtn');
const nextBtns = document.getElementById('nextBtn');
const pageButtons = document.querySelectorAll('.pagination button:not(#prevBtn):not(#nextBtn)');
const rowsSelect = document.getElementById('rowsSelect');

let currentPages = 1;
const totalPages = pageButtons.length;

function updatePagination() {
    pageButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === currentPage);
    });
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtns.addEventListener('click', () => {
    if (currentPages > 1) {
        currentPages--;
        updatePagination();
    }
});

nextBtns.addEventListener('click', () => {
    if (currentPages < totalPages) {
        currentPages++;
        updatePagination();
    }
});

pageButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentPage = index + 1;
        updatePagination();
    });
});

rowsSelect.addEventListener('change', (e) => {
    console.log(`Showing ${e.target.value} rows per page`);
});

updatePagination();

// MODAL FUNCTION 
function openModal(id) {
    document.getElementById(id).classList.add('open');
    document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
    document.querySelector('.jw-modal.open').classList.remove('open');
    document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
    // close modals on background click
    document.addEventListener('click', event => {
        if (event.target.classList.contains('jw-modal')) {
            closeModal();
        }
    });
});
