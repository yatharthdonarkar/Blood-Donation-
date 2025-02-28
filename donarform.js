document.getElementById('donationForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const contact = document.getElementById('contact').value;

    const { data, error } = await supabase
        .from('donors')
        .insert([
            { name, age, bloodGroup, contact }
        ]);

    if (error) {
        document.getElementById('message').textContent = 'Error: ' + error.message;
    } else {
        document.getElementById('message').textContent = 'Form submitted successfully!';
    }
});