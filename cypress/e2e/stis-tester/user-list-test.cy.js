/// <reference types="cypress" />

describe('SuperAdmin Tester User List CRUD', () => { 
    beforeEach('Test Admin Login + Open User List + Test Read', () => {
      cy.visit('/');
      cy.get(':nth-child(2) > .form-control').clear();
      cy.get(':nth-child(3) > .form-control').clear();
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(2) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > li > .nav-link').click();
      cy.get('.section-title').should('have.text','User Management');
      cy.get('h4').should('have.text','User List');
      cy.wait(100);
    })
    
    it('Testing Create User List', () => {
      cy.get('[data-id="btn-user"]').click();
      cy.get('.section-title').should('have.text','Tambah User');
      cy.get('h4').should('have.text','Validasi Tambah Data');
      cy.get('#name').type('Irfan Ali');
      cy.get('#email').type('raygensh77@gmail.com');
      cy.get('#password').type('gentan77');
      cy.get('.btn-primary').click();
      cy.get('p').should('have.text','Data Berhasil Ditambahkan');
      cy.wait(100);
    })
    
    it('Testing Update User List', () => {
      cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click();
      cy.get('.section-title').should('have.text','Edit User');
      cy.get('h4').should('have.text','Validasi Edit Data User');
      cy.get('#name').clear();
      cy.get('#email').clear();
      cy.get('#name').type('Muh. Irfan Ali');
      cy.get('#email').type('irfanali77@gmail.com');
      cy.get('.btn-primary').click();
      cy.get('p').should('have.text','User Berhasil Diupdate');
      cy.wait(100);
    })

    it('Testing Delete User List',() => {
      cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click();
      cy.get('p').should('have.text','User Deleted Successfully');
    })

    })