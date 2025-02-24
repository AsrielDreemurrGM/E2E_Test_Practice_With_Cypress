/// <reference types="cypress" />

describe('Testes para a Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    })
    
    it('Deve Renderizar 3 contatos', () => {
        cy.get('.contato').should('have.length', 3);
        cy.screenshot('primeira-visita');
    })

    it('Deve adicionar um contato a lista de contatos', () => {
        cy.get('input[placeholder="Nome"]').type('Eduardo');
        cy.get('input[placeholder="E-mail"]').type('testeEndToEnd@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('49 12345678');
        cy.get('button[type="submit"]').click();

        // Funciona também:
        // cy.get('input[placeholder="Nome"]').type('Eduardo{enter}')
        // .next()
        // .type('testeEndToEnd@gmail.com{enter}')
        // .next()
        // .type('49 12345678{enter}')

        cy.get('.contato').should('have.length', 4);
        cy.screenshot('contato-adicionado');
    })

    it('Deve editar um contato', () => {
        cy.get('.edit').last().click();

        cy.get('input[placeholder="Nome"]').clear().type('José');

        cy.get('.alterar').click();

        cy.get('.contato:nth-child(5) > div > ul > li:nth-child(1)').should('have.text', 'José');
        cy.screenshot('contato-editado');
    })

    it('Deve remover um contato', () => {
        cy.get('.contato:nth-child(5) > div > .delete').click();

        cy.get('.contato').should('have.length', 3);
        cy.screenshot('contato-removido');
    })
})