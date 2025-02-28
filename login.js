const firebaseConfig = {
    apiKey: "AIzaSyCFhzbDsjDV0ap40pFojO3rRVN09vB9ICM",
    authDomain: "code-c7a51.firebaseapp.com",
    projectId: "code-c7a51",
    storageBucket: "code-c7a51.firebasestorage.app",
    messagingSenderId: "444642909000",
    appId: "1:444642909000:web:ddf914015c9386afb0f17d",
    measurementId: "G-SCHXE1CSQD"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Sign in the user
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userId = user.uid;
            console.log('User logged in successfully:', user);
  
            // Display success message with UID
            const successMessage = document.getElementById('successMessage');
            successMessage.innerHTML = `<h2>You have successfully logged into your account!</h2>
                                        <a href="frontpagenew.html"><button>Further Proceed</button></a> 
                                        <p>Your User ID: ${userId}</p>`;
            successMessage.style.display = 'block';
        })
        .catch((error) => {
            console.error('Error logging in user:', error);
            alert('Invalid email or password. Please try again.');
        });
  });
  