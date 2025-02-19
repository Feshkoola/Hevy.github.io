document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;

    // Basic validation
    if (!name || !address || !food || !quantity) {
        document.getElementById('errorMessage').textContent = 'Please fill out all fields';
        return;
    }

    // Clear error message
    document.getElementById('errorMessage').textContent = '';

    // Display confirmation message
    document.getElementById('confirmationMessage').innerHTML = `
        <h2>Order Confirmation</h2>
        <p>Thank you, <strong>${name}</strong>!</p>
        <p>Your order for <strong>${quantity}</strong> <strong>${food}(s)</strong> has been received.</p>
        <p>It will be delivered to <strong>${address}</strong>.</p>
    `;
});
