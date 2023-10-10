'use server'
import axios from 'axios';

// Função para receber dados por período
export const obterMedicao = async (periodo) => {
    try {
        const response = await axios.post('http://127.0.0.1:4000/medicoes', { periodo }); // Corrigi o endereço IP para 127.0.0.1
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return []; // Retorna uma matriz vazia em caso de erro
    }
};

//Função para obter dados de comparação
export const obterComparacao = async (periodo, comp1, comp2) => {
  try {
    const response = await axios.post('http://127.0.0.1:4000/comparacao', {"periodo": periodo, "comp_1": comp1, "comp_2": comp2});
    return response.data;
  } catch (error) {
    console.error('Erro Ao Puxar do banco de dados:', error);
  }
};

//Função para obter dia 
//Periodo pode ser "dia" ou "diaEsp" <- "dia" pega do dia atual, e "diaEsp" pega de qualquer dia (usado no gráfico com flechinha)
export const obterDia = async (periodo, comp1) => {
  try {
    const response = await axios.post('http://127.0.0.1:4000/comparacao', {"periodo": periodo, "comp_1": comp1});
    return response.data;
  } catch (error) {
    console.error('Erro Ao Puxar do banco de dados:', error);
  }
};