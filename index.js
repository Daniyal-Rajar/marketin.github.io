const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});











let users = [  ];

function registerUser() {
    const name = document.getElementById('Name').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('Email already registered. Please use a different email.');
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    users.push(newUser);

   

    alert('Registration successful!');

    console.log('Registered User:', newUser);
};



function signInUser() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {

    } else {
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert('Incorrect password. Please try again.');
        } else {
            alert('Please register first.');
        }
    }
}