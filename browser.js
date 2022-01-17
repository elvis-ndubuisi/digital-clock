const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const htmlTemp = `
    <span>${h}</span>  :  
    <span>${m}</span>  :  
    <span>${s}</span>
  `;

  clock.innerHTML = htmlTemp;
};
console.log(clock);

// exec tick every min.
setInterval(tick, 1000);
