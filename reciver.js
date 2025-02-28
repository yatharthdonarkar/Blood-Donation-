document.getElementById('receiverForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('message').textContent = 'Form submitted successfully!';
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    document.getElementById('message').textContent = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    document.getElementById('message').textContent = 'Oops! There was a problem submitting your form';
                }
            });
        }
    }).catch(error => {
        document.getElementById('message').textContent = 'Oops! There was a problem submitting your form';
    });
});