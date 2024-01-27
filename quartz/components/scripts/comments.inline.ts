document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.getElementById('btn');
  if (button) {
      button.onclick = () => {
          alert('Button clicked!');
      };
  } else {
      console.error('Button element not found');
  }
});
