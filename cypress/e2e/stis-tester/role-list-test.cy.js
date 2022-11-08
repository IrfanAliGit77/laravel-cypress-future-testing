/// <reference types="cypress" />

describe('SuperAdmin Tester Roles List CRUD', () => { 
    beforeEach('Test Admin Login + Open Roles List + Test Read', () => {
      cy.visit('/');
      cy.get(':nth-child(2) > .form-control').clear();
      cy.get(':nth-child(3) > .form-control').clear();
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(3) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > :nth-child(1) > .nav-link').click();
      cy.get('.section-title').should('have.text','Role Management');
      cy.get('h4').should('have.text','Roles List');
      cy.wait(100);
    })
    
    it('Testing Create Roles List', () => {
      cy.get('[data-id="btn-role"]').click();
      cy.get('.section-title').should('have.text','Create Roles');
      cy.get('h4').should('have.text','Form Create Role');
      cy.get('#name').type('admin-test');
      cy.get('#guard_name').clear();
      cy.get('#guard_name').type('web');
      cy.get('.btn-primary').click();
      cy.get('p').should('have.text','Role Created Successfully');
      cy.wait(100);
     })
    
    it('Testing Update Roles List', () => {
      cy.get(':nth-child(4) > .text-right > .d-flex > .btn-info').click();
      cy.get('.section-title').should('have.text','Edit Roles');
      cy.get('h4').should('have.text','Edit Roles Form');
      cy.get('#name').clear();
      cy.get('#guard_name').clear();
      cy.get('#name').type('test-admin');
      cy.get('#guard_name').type('website');
      cy.get('.btn-primary').click();
      cy.get('p').should('have.text','Role Updated Successfully');
      cy.wait(100);
    })

    it('Testing Delete Roles List',() => {
      cy.get(':nth-child(4) > .text-right > .d-flex > .ml-2 > .btn').click();
      cy.get('p').should('have.text','Role Deleted Successfully');
    })

    })