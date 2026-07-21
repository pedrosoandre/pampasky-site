// Rondar — JS vanilla, sem dependência.

// Máscara leve de telefone (só visual; o back valida os dígitos)
const tel = document.querySelector('input[name="telefone"]');
if (tel) {
  tel.addEventListener('input', () => {
    let d = tel.value.replace(/\D/g, '').slice(0, 11);
    if (d.length > 6)      tel.value = `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
    else if (d.length > 2) tel.value = `(${d.slice(0,2)}) ${d.slice(2)}`;
    else if (d.length)     tel.value = `(${d}`;
  });
}

// Realce do link da seção visível
const links = [...document.querySelectorAll('.nav__links a')];
const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    const a = map.get(e.target.id);
    if (a && e.isIntersecting) {
      links.forEach(l => l.style.color = '');
      a.style.color = 'var(--text)';
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('section[id]').forEach(s => obs.observe(s));

// Fecha o flash de sucesso/erro depois de um tempo
const flash = document.querySelector('.flash');
if (flash) setTimeout(() => { flash.style.transition = 'opacity .6s'; flash.style.opacity = '0'; }, 6000);
