let timeout = undefined;

function debounceFunction(delay, fn) {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(fn, delay);
};

function suggestFunction() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `<p>Suggestions required at ${new Date().toString()}</p>${outputDiv.innerHTML}`
}