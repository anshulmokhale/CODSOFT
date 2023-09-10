function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            firstDiv.style.transform = 'translateX(0)';
            firstDiv.style.opacity = 1;
            secondDiv.style.transform = 'translateX(0)';
            secondDiv.style.opacity = 1;
            observer.unobserve(entry.target);
        }
    });
}

// Select the elements
const pageHead = document.querySelector('.PageHead3');
const firstDiv = document.querySelector('.PageHead3_first');
const secondDiv = document.querySelector('.PageHead3_second');

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // 
});


observer.observe(pageHead);