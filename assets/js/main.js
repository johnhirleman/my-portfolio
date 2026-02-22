//toggle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.mobile-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('nav-open');

            //toggle icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');

        });
    }

    // projects carousel (desktop)
    const projectsScroll = document.querySelector('.projects-scroll');
    const carouselBtnLeft = document.querySelector('.carousel-btn-left');
    const carouselBtnRight = document.querySelector('.carousel-btn-right');

    if (projectsScroll && carouselBtnLeft && carouselBtnRight) {
        const scrollAmount = 432; // ~400px card + 2rem gap

        function updateCarouselButtons() {
            carouselBtnLeft.disabled = projectsScroll.scrollLeft <= 0;
            carouselBtnRight.disabled = projectsScroll.scrollLeft + projectsScroll.clientWidth >= projectsScroll.scrollWidth - 1;
        }

        carouselBtnLeft.addEventListener('click', function() {
            projectsScroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        carouselBtnRight.addEventListener('click', function() {
            projectsScroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        projectsScroll.addEventListener('scroll', updateCarouselButtons);
        updateCarouselButtons();
    }

    // sidebar collapse toggle (tablet/mobile)
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.sidebar-btn');
        if (!btn) return;

        const sidebarContent = document.querySelector('.sidebar-content');
        if (!sidebarContent) return;

        sidebarContent.classList.toggle('sidebar-expanded');

        const icon = btn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
    });
});