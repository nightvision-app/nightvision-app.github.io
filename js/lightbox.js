(function () {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    function open(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('open');
        document.body.classList.add('lightbox-open');
    }

    function close() {
        lightbox.classList.remove('open');
        document.body.classList.remove('lightbox-open');
        // clear src after fade-out so the next open animates a fresh image
        setTimeout(() => {
            if (!lightbox.classList.contains('open')) lightboxImg.src = '';
        }, 250);
    }

    document.querySelectorAll('.demos-grid .demo').forEach((demo) => {
        const img = demo.querySelector('img');
        if (!img) return;
        demo.addEventListener('click', () => open(img.currentSrc || img.src, img.alt));
    });

    lightbox.addEventListener('click', () => {
        // close on any click inside the lightbox — backdrop, image, or close button
        close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
    });
})();
