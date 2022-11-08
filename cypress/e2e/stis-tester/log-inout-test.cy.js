/// <reference types="cypress" />

describe('empty spec', () => {
    it('admin access user list', () => {
      cy.visit('/')
  
      // login
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com')
      cy.wait(200)
      cy.get(':nth-child(3) > .form-control').type('password')
      cy.wait(200)
      cy.get('.btn').click()
      cy.wait(200)
  
  
      // go to user list page
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click()
      cy.wait(200)
      cy.get(':nth-child(2) > .has-dropdown > span').click()
      cy.wait(200)
      cy.get('.active > .dropdown-menu > li > .nav-link').click()
      cy.wait(200)
  
  
      // check the header
      cy.get('.nav-link > .d-sm-none').contains("Hi, SuperAdmin")
      cy.get('h1').contains("User List")
      cy.get('.section-title').contains("User Management")
      cy.get('h4').contains("User List")
      cy.get('.card-header-action > .btn-icon').contains("Create New User")
      cy.get('.import').contains("Import User")
      cy.get('[href="http://localhost:8000/user-management/export"]').contains("Export User")
      cy.get('.search').contains("Search User")
  
      // check the table
      cy.get('.table > tbody > :nth-child(1) > :nth-child(1)').contains("th", "#");
      cy.get('.table > tbody > :nth-child(1) > :nth-child(2)').contains("th", "Name");
      cy.get('.table > tbody > :nth-child(1) > :nth-child(3)').contains("th", "Email");
      cy.get('.table > tbody > :nth-child(1) > :nth-child(4)').contains("th", "Created At");
      cy.get('.table > tbody > :nth-child(1) > :nth-child(5)').contains("th", "Action");
  
      // logout
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click()
      cy.wait(200)
      cy.get('.text-danger').click()
      cy.wait(200)
  
    })
  })