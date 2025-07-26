<h1>Prática de Testes E2E com Cypress</h1>
<p>
  Projeto prático para testes automatizados de ponta a ponta (E2E) utilizando o <strong>Cypress</strong>.
</p>
<p>
  This README is also available in <a href="./README.md">English</a>.
</p>
<h2>📋 Visão Geral do Projeto</h2>
<p>
  Este projeto foca na escrita de testes automatizados para o site <a href="https://agenda-contatos-react.vercel.app" target="_blank">Agenda de Contatos</a>.
  Os testes simulam interações reais do usuário como renderizar a lista de contatos, adicionar novas entradas, editar contatos existentes e removê-los.
</p>
<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li>JavaScript</li>
  <li>Cypress</li>
  <li>Mochawesome (Gerador de Relatórios de Teste)</li>
</ul>
<h2>✅ O Que Está Coberto</h2>
<ul>
  <li>Validação da renderização da lista padrão de contatos (3 entradas);</li>
  <li>Adição de um novo contato (interação com formulário + envio);</li>
  <li>Edição de um contato existente (atualização do nome);</li>
  <li>Remoção de um contato (exclusão da entrada mais recente);</li>
  <li>Captura de screenshots após cada etapa dos testes para rastreamento visual;</li>
  <li>Geração de relatórios de teste em HTML usando Mochawesome.</li>
</ul>
<h2>📸 Capturas de Tela</h2>
<p>
  Cada teste captura uma imagem salva na pasta <code>cypress/screenshots</code> (por exemplo: <code>primeira-visita.png</code>, <code>contato-adicionado.png</code>).
</p>
<h2>📊 Relatórios de Teste</h2>
<p>
  Este projeto usa o gerador <strong>mochawesome</strong> para criar belos relatórios em HTML após a execução dos testes.
  Verifique a pasta <code>mochawesome-report</code> para os resultados dos testes.
</p>
<h2>🛠️ Como Executar</h2>
<ol>
  <li>Instale as dependências com <code>npm install</code></li>
  <li>Execute o Cypress com <code>npx cypress open</code></li>
  <li>Escolha o arquivo de teste e execute a suíte de testes</li>
</ol>
<h2>📁 Estrutura de Pastas</h2>
<pre>
cypress/
├── e2e/
│   └── contact-agenda.cy.js      # Todos os casos de teste E2E
├── screenshots/                  # Capturas de tela dos testes
├── mochawesome-report/          # Relatórios em HTML
</pre>
<h2>🔗 Links Relacionados</h2>
<ul>
  <li><a href="https://www.cypress.io/" target="_blank">Site Oficial do Cypress</a></li>
  <li><a href="https://www.npmjs.com/package/mochawesome" target="_blank">Mochawesome Reporter</a></li>
</ul>
<p>
  🧪 A prática leva à perfeição! Este projeto é um exercício prático em escrever testes E2E eficazes para aplicações web.
</p>
