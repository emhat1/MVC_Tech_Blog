const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-input-signup');
    const passwordEl = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Signup has failed!');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  