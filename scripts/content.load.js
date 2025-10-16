export function contentLoad(targetSelector, content) {
  const container = document.querySelector(targetSelector);

  if (!container) {
    console.error(`appLoad: seletor não encontrado -> "${targetSelector}"`);
    return;
  };

  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState !== 4) return;

    if (request.status === 200) {
      container.innerHTML = request.response;
      return;
    };

    console.error(`appLoad: erro ao carregar "${content}.html" (status ${request.status})`);
  };

  request.open("GET", `${content}.html`);
  request.send();
};