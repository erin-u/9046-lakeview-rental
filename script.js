document.getElementById('bookingForm').addEventListener('submit', function(e){
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const dates = document.getElementById('dates').value.trim();
  if(!name || !email || !dates){
    e.preventDefault();
    alert('Please fill name, email, and dates.');
    return;
  }
  // Allow normal form submit to Formspree. Disable submit button to prevent double submits.
  const btn = this.querySelector('button[type="submit"]');
  if(btn){ btn.disabled = true; btn.textContent = 'Sending...'; }
});