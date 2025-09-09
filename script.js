// Validação de email com Regex
const validarEmail = (email) => { 
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Email inválido! Use o formato: exemplo@dominio.com');
    return false;
  }
  return true;
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');
  
  if (!form) {
    console.error('Formulário não encontrado!');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username')?.value.trim();
    const password = document.getElementById('password')?.value.trim();
    
    if (!username || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    if (!validarEmail(username)) {
      return;
    }

    alert('Login realizado com sucesso!');
    form.reset();

    // Teste de resposta
    console.log('Tipo de evento:', typeof e);
    console.log('Usuário:', username);
    console.log('Senha:', password);
  });
});
