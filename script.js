// script.js

document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarMenuLinks = document.querySelectorAll('.sidebar-menu a');
    const sidebarCloseBtn = document.querySelector('.sidebar-close-btn');

    // Hide loader and show content
    window.addEventListener('load', () => {
        loader.style.display = 'none';
        content.style.visibility = 'visible';
    });

    // Toggle sidebar menu
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close sidebar when a menu item is clicked
    sidebarMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close sidebar when close button is clicked
    sidebarCloseBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        navMenu.classList.remove('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !navToggle.contains(event.target)) {
            sidebar.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
