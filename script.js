document.addEventListener('DOMContentLoaded', function () {

      /* MOBILE */
    var toggle = document.getElementById('navToggle');
    var panel = document.getElementById('navMobilePanel');

    toggle.addEventListener('click', function () {
        var isOpen = panel.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

      // Close panel
    panel.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            panel.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    /*SCROLL ANIMATION*/
    var revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
            var el = entry.target;

            var siblingIndex = Array.prototype.indexOf.call(el.parentNode.children, el);
            var delay = (siblingIndex % 4) * 70;

            setTimeout(function () {
                el.classList.add('is-visible');
            }, delay);

            observer.unobserve(el);
            }
        });
        }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
        });

        revealEls.forEach(function (el) {
        observer.observe(el);
        });
    } else {
        // Fallback untuk browser lama tanpa IntersectionObserver
        revealEls.forEach(function (el) {
        el.classList.add('is-visible');
        });
    }

});