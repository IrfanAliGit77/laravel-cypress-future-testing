/// <reference types="cypress" />

describe('SuperAdmin Tester Permission List CRUD', () => { 
    it('Test Admin Login + Open User List + Logout', () => {
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
        cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
        cy.get('.text-danger').click();
        cy.wait(100);
      })

    })