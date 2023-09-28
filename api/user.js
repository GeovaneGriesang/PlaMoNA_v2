'use server'
import axios from 'axios';

class User{
  constructor(email, nome){
    this._email = email;
    this._nome = nome;
  }
}

// Função para enviar os dados de registro para o servidor
async function registerUser ( nome, cpf, endereco, email, telefone, alerta_sms, alerta_email, senha ) {
  try {
    const response = await axios.post('https://plamona.onrender.com/api/register', { nome, cpf, endereco, email, telefone, alerta_sms, alerta_email, senha });
    console.log(response.data.message); 
  } catch (error) {
    console.error('Erro durante o registro:', error);
  }
};

async function loginUser ( email, senha ) {
  try {
    const response = await axios.post('https://plamona.onrender.com/api/login', { email, senha });
    alert(response.data.message); 
    console.log(response.data.message);
    return(response.data.loginState)
  } catch (error) {
    console.error('Erro durante o login:', error);
    alert(response.data.message); 
    console.log(response.data.message);
    return(response.data.loginState)
  }
};