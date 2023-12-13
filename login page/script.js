document.addEventListener('DOMContentLoaded', function() {
    const userRole = document.getElementById('userRole');
    const switchRoleBtn = document.getElementById('switchRole');

    switchRoleBtn.addEventListener('click', function() {
        userRole.textContent = userRole.textContent === 'User' ? 'Admin' : 'User';
    });

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Fetch login request not added yet
        // log to the console for testing
        console.log('Attempting to log in as:', userRole.textContent);
        console.log('Name:', document.getElementById('username').value);
    });
});
