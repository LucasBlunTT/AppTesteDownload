# AppTesteDownload

Um servidor HTTP leve feito com Node.js puro, ideal para testes de **velocidade de rede** e **transferência de arquivos** entre máquinas. Sem dependências, sem instalação global e pronto para usar.

## 🔧 O que vem no pacote

- `server.js` — Servidor HTTP minimalista em Node.js que entrega qualquer arquivo local via download.
- `iniciar-servidor.bat` — Script em lote que inicia o servidor com Node.js portátil.
- `nodejs/` — Versão portátil do Node.js para rodar o servidor sem precisar instalar nada.
- `teste.zip` — Arquivo de exemplo para download.

## 🚀 Como usar

1. **Escolha a porta**  
   Abra o arquivo `iniciar-servidor.bat` e altere a linha:
   ```bat
   set PORTA=8081
   ```
   Substitua `8081` pela porta de sua preferência.

2. **Inicie o servidor**  
   Execute o arquivo `iniciar-servidor.bat`. Isso iniciará o servidor utilizando a versão portátil do Node.js.

3. **Acesse o servidor**  
   No navegador ou aplicativo HTTP de sua escolha, acesse:
   ```
   http://<IP_DA_SUA_MAQUINA>:<PORTA>
   ```
   Por exemplo: `http://localhost:8081`.

4. **Baixe os arquivos**  
   Você verá uma lista de arquivos disponíveis na pasta raiz. Clique no arquivo desejado para iniciar o download.

## 🛠️ Personalização

- **Alterar diretório de arquivos**:  
  Por padrão, o servidor entrega arquivos no diretório onde ele é executado. Para alterar, edite o caminho no `server.js`:
  ```javascript
  const diretorio = './';
  ```

- **Adicionar novos arquivos**:  
  Basta colocar os arquivos desejados na mesma pasta do `server.js`.

## 📂 Estrutura do Projeto

```
AppTesteDownload/
│
├── nodejs/                 # Node.js portátil
├── iniciar-servidor.bat    # Script para iniciar o servidor
├── server.js               # Servidor HTTP em Node.js
├── teste.zip               # Arquivo de exemplo
└── README.md               # Documentação do projeto
```

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias.

---

Se precisar de alterações ou algo mais, é só avisar! 😊
