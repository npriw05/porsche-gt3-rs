const container = document.querySelector('.image-container');
const img = document.querySelector('.second-img');
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   
    const y = (e.clientY - rect.top) / rect.height;  
    const rotateY = (x - 0.5) * 20;  
    const rotateX = (0.5 - y) * 20; 
    img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});
container.addEventListener('mouseleave', () => {
    img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
});










