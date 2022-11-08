/// <reference types="cypress" />

describe('SuperAdmin Tester Permission List CRUD', () => { 
    beforeEach('Test Admin Login + Open Permi List + Test Read', () => {
        cy.visit('/');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(3) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
        cy.get(':nth-child(3) > .form-control').type('password');
        cy.get('.btn').click();
        cy.get('.nav-link > .d-sm-none').should('have.text','Hi, SuperAdmin');
        cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
        cy.get(':nth-child(3) > .has-dropdown > span').click();
        cy.get('.active > .dropdown-menu > :nth-child(2) > .nav-link').click();
        cy.get('.section-title').should('have.text','Permission Management');
        cy.get('h4').should('have.text','Permission List');
        cy.wait(100);
      })
    
      it('Testing Create Permission List', () => {
        cy.get('[data-id="btn-permi"]').click(); 
        //ubah pada data index.blade.php di permi folder seperti diatas 
        //ubah menu create
        //<a class="btn btn-icon icon-left btn-primary" data-id="btn-permi" href="{{ route('permission.create') }}">Create New Permission</a>
        //ubah speerti di atas
        cy.get('.section-title').should('have.text','Permission Management');
        cy.get('h4').should('have.text','Create Permission Form');
        cy.get('#name').type('test.create');
        cy.get('#guard_name').clear();
        cy.get('#guard_name').type('web');
        cy.get('.btn-primary').click();
        cy.get('p').should('have.text','Permission Created Successfully');
        cy.wait(100);
       })

       it('Testing Update Permission List', () => {
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .btn-info').click();
        cy.get('.section-title').should('have.text','Permission Edit');
        cy.get('h4').should('have.text','Permission Edit Form');
        cy.get('#name').clear();
        cy.get('#guard_name').clear();
        cy.get('#name').type('test.edit');
        cy.get('#guard_name').type('website');
        cy.get('.btn-primary').click();
        cy.get('p').should('have.text','Permission Updated Successfully');
        cy.wait(100);
      })

      it('Testing Delete Permission List',() => {
        cy.get(':nth-child(5) > .page-link').click();
        cy.get(':nth-child(9) > .text-right > .d-flex > .ml-2 > .btn').click();
        cy.get('p').should('have.text','Permission Deleted Successfully');
      })
})