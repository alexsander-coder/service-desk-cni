# Service Desk CNI

Aplicação para gerenciamento de chamados corporativos, desenvolvida em Angular 16.  
O objetivo é oferecer uma interface simples, organizada e eficiente para **listar** e **cadastrar** chamados de serviço.

------------------------------------------------------------------------

## Instalação e Execução

### 1. Pré-requisitos

Certifique-se de ter instalado:

- **Node.js 18+**
- **NPM 9+**
- **Angular CLI 16+**

Verifique suas versões com:

```
node -v
npm -v
ng version
```

------------------------------------------------------------------------

### 2. Clonar o repositório

```
git clone https://github.com/alexsander-coder/service-desk-cni.git
```

### 2.1 Acessar o projeto após a clonagem

```
cd service-desk-cni
```

### 2.2 Abrir o projeto no Visual Studio Code (opcional)

```
code .
```

------------------------------------------------------------------------

### 3. Instalar dependências

```
npm install
```

------------------------------------------------------------------------

### 4. Executar o servidor de desenvolvimento

```
npm start
```

A aplicação estará disponível em:

[http://localhost:4200](http://localhost:4200)

------------------------------------------------------------------------

## Tecnologias Utilizadas e Justificativas

### Angular 16

Além de ser um dos requisitos da avaliação, Angular também é minha principal stack.  
É um framework estável e ideal para aplicações corporativas devido a sua estrutura robusta, organização interna, componentização e escalabilidade.

### PrimeNG

Apesar de eu ter mais experiência com PrimeUI (versão jQuery), o PrimeNG segue a mesma lógica de componentes visuais da família Prime.
Por isso, a adaptação é simples.
O uso do PrimeNG ajuda a acelerar a criação das telas, pois já oferece componentes prontos como tabelas, formulários, botões e mensagens, mantendo um padrão visual consistente.

### CSS Puro

Mantém o projeto leve, direto e sem dependências de frameworks adicionais.  
Permite controle total sobre o estilo da aplicação e facilita ajustes rápidos no layout.

### TypeScript

Proporciona tipagem forte, maior segurança no código, previsibilidade e redução de erros comuns ao JavaScript.

### Git + GitHub

Utilizados para versionamento, rastreabilidade e organização das entregas, além de facilitar o acesso ao projeto durante a avaliação.

------------------------------------------------------------------------

### Percentual estimado de código gerado por IA e pelo desenvolvedor

- **ChatGPT (OpenAI)** 
  - 8%
- **Desenvolvedor**
  - 92%
------------------------------------------------------------------------

### Observações sobre o uso de ferramentas de apoio 

- **ChatGPT (OpenAI)** 
  - utilizado exclusivamente para recomendações de accessibility enhancement, incluindo: ajustes de aria-label, aria-describedby role, boas práticas de semântica HTML.
  - identificação de oportunidades de contraste e navegação por teclado.
  - definição de porcentagem do código, para saber qual a porcentagem do desenvolvedor e da IA

------------------------------------------------------------------------

## Sobre o Projeto

A aplicação implementa:

- **Listagem de chamados**
  - Exibição de ID, título, descrição e categoria.
  - Dados carregados via mock local.

- **Cadastro de chamados**
  - Formulário com validações obrigatórias.
  - Feedback visual ao usuário (sucesso/erro).

- **Responsividade completa**
  - Interface adaptada para desktop e mobile.

- **Mock de dados**
  - Simulação de backend utilizando arquivo JSON ou serviço Angular.

------------------------------------------------------------------------
