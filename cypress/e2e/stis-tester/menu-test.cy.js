/// <reference types="cypress" />

describe('User can open User Control Page', () => {
    it('user can login', () => {
      cy.viewport('macbook-11');
      cy.visit("http://127.0.0.1:8000");
      cy.get('.card-header').should('have.text', '\n                                Login\n                            ');
      
      //click hidden element       
      cy.get(':nth-child(2) > .form-control', { timeout: 10000 }).eq(0)
        .type('superadmin@gmail.com', { force: true });
      cy.get(':nth-child(3) > .form-control').eq(0)
        .type('password', { force: true }); 
      cy.get('.btn').contains('Login').should('be.visible').eq(0)
        .click({ force: true });       
  
      //Login validation comtains
      cy.get('.nav-link > .d-sm-none').should('have.text', 'Hi, SuperAdmin'); 
      cy.get('.active > a').should('have.text', 'Dashboard'); 
      cy.get('h1').should('have.text', 'Table'); 
      
  
      // *********
      // READ PAGE MENU GROUP LIST
      // *********
      //access menu group
      cy.get('.sidebar-menu > :nth-child(4)').contains('Menu Group').click({ force: true });
      cy.reload();
  
      //menu validation comtains
      cy.get('h1').should('have.text', 'Menu Group and Menu Item');
      cy.get('.section-title').contains('Menu Group Management');
      cy.get('h4').should('have.text', 'Menu Group List');
  
      cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').contains('#');
      cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Name');
      cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('Permission');
      cy.get('tbody > :nth-child(1) > .text-right').contains('Action');
      
  
      // *******
      // EDIT NEW MENU GROUP
      // *******
      cy.get(':nth-child(2) > .text-right > .d-flex > .btn-info').click();
  
      // Field validation containts
      cy.get('h1').should('have.text', 'Menu Group and Menu Item');
      cy.get('.section-title').contains('Menu Group Management');
      cy.get('h4').should('have.text', 'Edit Menu Group');
      cy.get('label').should('have.text', 'Name');
  
      //click hidden element    
      cy.get('#name', { force: true }).clear();
      cy.get('#name', { timeout: 10000 }).eq(0)
        .type('Database Tets', { force: true });
      cy.get('.btn-primary').contains('Submit').should('be.visible').eq(0)
        .click({ force: true });
     
      cy.get('.alert').contains('Data berhasil diubah')
  
  
      // *******
      // CREATE NEW MENU GROUP
      // *******
      cy.get('.card-header-action > .btn-icon').click();
      cy.reload();
  
      // Field validation containts
      cy.get('h4').should('have.text', 'Create Menu Group');
      cy.get(':nth-child(2) > label').should('have.text', 'Name');
      cy.get(':nth-child(3) > label').should('have.text', 'Icon Name');
      cy.get(':nth-child(4) > label').should('have.text', 'Permission Name');
  
      //click hidden element
      cy.get('#name', { timeout: 10000 }).eq(0)
        .type('Menu Management Tets', { force: true });
      cy.get('#icon').eq(0)
        .type('menu.management.test', { force: true }); 
      cy.get('#select-menu-test').select('menu.management', {force:true}).should('have.value', 'menu.management')   
      cy.get('.btn-primary').contains('Submit').should('be.visible').eq(0)
        .click({ force: true });
       
      cy.get('.alert').contains('Data berhasil ditambahkan')
      
      // *******
      // DELETE NEW MENU GROUP
      // *******
      cy.get(':nth-child(6) > .text-right > .d-flex > .ml-2 > .btn').click();   
      cy.get('.alert').contains('Data berhasil dihapus')
    })
  
  })