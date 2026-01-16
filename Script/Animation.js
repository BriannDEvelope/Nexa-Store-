
  function splitText(selector, delay = 0.03) {
    const element = document.querySelector(selector);
    const text = element.innerText;
    element.innerHTML = '';

    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * delay}s`;
      element.appendChild(span);
    });
  }

  function waveText(selector) {
    const element = document.querySelector(selector);
    const text = element.innerText;
    element.innerHTML = '';

    [...text].forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * 0.05}s`;
      element.appendChild(span);
    });
  }

  splitText('.split-text');
  waveText('.wave-text');


