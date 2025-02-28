document.getElementById('register-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering as a donor!');
    document.getElementById('modal').style.display = 'none';
  });
  document.getElementById('register-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for registering your hospital!');
    document.getElementById('modal').style.display = 'none';
  });
  