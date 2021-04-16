import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-my-games.herokuapp.com/'
})

export const buscaApi = async(url, setDado) => {
    const resposta = await api.get(url);
    setDado(resposta.data["jogos"]);
    console.log(resposta.data["jogos"]);
}