<h1>E2E Test Practice With Cypress</h1>
<p>
  Practical project for automated end-to-end (E2E) testing using <strong>Cypress</strong>.
</p>
<p>
  Este README também está disponível em <a href="./README.pt-br.md">Português</a>
</p>
<h2>📋 Project Overview</h2>
<p>
  This project focuses on writing automated tests for the <a href="https://agenda-contatos-react.vercel.app" target="_blank">Contact Agenda</a> website.
  The tests simulate real user interactions such as rendering the contact list, adding new entries, editing existing ones, and removing them.
</p>
<h2>🚀 Technologies Used</h2>
<ul>
  <li>JavaScript</li>
  <li>Cypress</li>
  <li>Mochawesome (Test Report Generator)</li>
</ul>
<h2>✅ What’s Covered</h2>
<ul>
  <li>Rendering validation of the default contact list (3 entries);</li>
  <li>Adding a new contact (form interaction + submission);</li>
  <li>Editing an existing contact (updating the name);</li>
  <li>Removing a contact (deleting the most recent entry);</li>
  <li>Taking screenshots after each test step for visual tracking;</li>
  <li>Generating test reports in HTML using Mochawesome.</li>
</ul>
<h2>📸 Screenshots</h2>
<p>
  Each test captures a screenshot saved in the <code>cypress/screenshots</code> folder (e.g., <code>primeira-visita.png</code>, <code>contato-adicionado.png</code>).
</p>
<h2>📊 Test Reports</h2>
<p>
  This project uses the <strong>mochawesome</strong> reporter to generate beautiful HTML reports after tests are executed.
  Make sure to check the <code>mochawesome-report</code> folder for test results.
</p>
<h2>🛠️ How to Run</h2>
<ol>
  <li>Install dependencies with <code>npm install</code></li>
  <li>Run the Cypress test runner with <code>npx cypress open</code></li>
  <li>Choose the test file and run the test suite</li>
</ol>
<h2>📁 Folder Structure</h2>
<pre>
cypress/
├── e2e/
│   └── contact-agenda.cy.js      # All E2E test cases
├── screenshots/                  # Test screenshots
├── mochawesome-report/          # HTML reports
</pre>
<h2>🔗 Related</h2>
<ul>
  <li><a href="https://www.cypress.io/" target="_blank">Cypress Official Website</a></li>
  <li><a href="https://www.npmjs.com/package/mochawesome" target="_blank">Mochawesome Reporter</a></li>
</ul>
<p align="center">
  🧪 Practice makes perfect! This project is a practical exercise in writing effective end-to-end tests for web apps.
</p>
