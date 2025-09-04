document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form')

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username === '' || password === '') {
            alert('Por favor, preecha todos os campos!')
            return;
        }

        alert('Login realizado com sucesso!')
        form.reset();

        console.log(typeof e)
        console.log(password)
        console.log(username)

    });
});