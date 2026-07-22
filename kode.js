document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const tujuan = document.querySelector(this.getAttribute('href'));
    tujuan.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

const semuaBagian = document.querySelectorAll('section');
const pengamat = new IntersectionObserver((masuk) => {
  masuk.forEach(item => {
    if(item.isIntersecting){
      item.target.style.opacity = 1;
      item.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1});

semuaBagian.forEach(bagian => {
  bagian.style.opacity = 0;
  bagian.style.transform = 'translateY(20px)';
  bagian.style.transition = 'all 0.6s ease';
  pengamat.observe(bagian);
});
