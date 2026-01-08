Olá, seja bem vindo!
Instalar as dependencias - npm i
em seguida - npm run sass - para rodar o sass
# Marinara Pizza 🍕

> Aplicação de delivery simples construída com **HTML**, **Sass (SCSS)** e **JavaScript (modular, sem framework)**.

Uma versão em desenvolvimento de um site de delivery onde o usuário pode navegar por categorias, adicionar produtos na sacola e ver os valores atualizarem automaticamente. O projeto foi iniciado sem frameworks, porém o Sass foi adicionado para facilitar o desenvolvimento do CSS.

---

## ✅ Funcionalidades principais
- Listagem de produtos por categoria
- Adicionar produtos à sacola (carrinho)
- Atualização automática dos subtotais e total
- Modal para informar CEP (simples UI)
- Estrutura de JavaScript modular (ES Modules)

---

## 🚀 Tecnologias
- HTML
- CSS (compilado a partir de **SCSS/Sass**)  
- JavaScript (ES Modules, modularização)
- Dependência de desenvolvimento: `sass`

---

## 📁 Estrutura do projeto (resumida)
- `src/index.html` - arquivo principal (página)
- `src/css/style.css` - CSS compilado (gerado pelo Sass)
- `scss/style.scss` - fonte Sass
- `src/scripts/` - scripts JS modularizados
	- `script.js` - ponto de entrada; renderiza produtos, categorias e liga eventos
	- `functionsCart.js` - lógica do carrinho (adicionar, remover, somar)
	- `renderizaItensSacola.js` - renderiza os itens da sacola no modal/aside
	- `modalCartItems.js` - abrir/fechar a sacola
	- `modalDeliveryFee.js` - abrir/fechar modal de CEP/entrega
	- `currencyFormatter.js` - utilitário para formatar valores em BRL
- `src/assets/imagens/` - imagens usadas no site

---

## 💻 Como rodar (desenvolvimento)
1. Clone o repositório:

```bash
git clone https://github.com/JonasLevy/pizzaria-javaScript-vanilla.git
cd pizzaria-javaScript-vanilla
```

2. Instale as dependências (instala o `sass` como devDependency):

```bash
npm install
```

3. Rode o watcher do Sass para compilar automaticamente o SCSS para `src/css`:

```bash
npm run sass
```

4. Abra `src/index.html` no seu navegador. Para uma experiência melhor (evitar problemas com módulos e caminhos), sirva a pasta `src/` com um servidor estático, por exemplo:

# ou usando serve (se instalado globalmente)
npx serve src
```

---

## 📌 Observações de desenvolvimento
- O JavaScript está organizado com módulos ES; o bundle não é gerado (não usa Webpack/Vite).  
- A sacola (carrinho) mantém os dados apenas em memória (não há persistência em localStorage ainda).  
- O modal de CEP/entrega é apenas uma interface simples e não faz chamada a uma API externa.

---

## 🔧 Próximos passos / TODOs
- Persistir a sacola (localStorage) para manter itens entre reloads ✅
- Implementar cálculo e busca real de taxa de entrega por CEP
- Melhorar responsividade e acessibilidade (a11y)
- Adicionar testes automatizados
- Implementar fluxo de checkout (formulário e validação)

