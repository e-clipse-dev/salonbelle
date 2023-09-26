window.addEventListener('scroll', function () {
    let backgroundElement = document.querySelector('.tenoff');
    let scrollPosition = window.scrollY;

    let pageHeight = document.body.scrollHeight - window.innerHeight;
    let scrollThreshold = pageHeight;

    if (window.innerWidth > 1200) {
        scrollThreshold = pageHeight * 0.73;
    } else if (window.innerWidth === 912) {
        scrollThreshold = pageHeight * 0.9;
    } else if (900 <= window.innerWidth && this.window.innerWidth <= 1200) {
        scrollThreshold = pageHeight * 0.7;
    } else {
        scrollPosition = 0
    }

    if (scrollPosition >= scrollThreshold || scrollPosition === 0) {
        backgroundElement.style.backgroundAttachment = 'scroll';
    } else {
        backgroundElement.style.backgroundAttachment = 'fixed';
    }
});
