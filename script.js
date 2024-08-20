document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.querySelector('.no');
    
    noButton.addEventListener('mouseover', () => {
        const container = document.querySelector('.buttonbox');
        const maxX = container.clientWidth - noButton.clientWidth;
        const maxY = container.clientHeight - noButton.clientHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
