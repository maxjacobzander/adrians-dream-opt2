describe("renders the page", () => {
    it("renders correctly", () => {
        cy.visit("/");
    })
})

describe("entire page scrolls", () => {
    it("can scroll all the way to the footer", () => {
        cy.visit("/")
        cy.scrollTo('bottom').get("#footer");
    })
})

describe("has a complete navbar", () => {
    it("has each section linked from the navbar", () => {
        cy.get("nav").children().should('contain.text', 'ABOUT')
        cy.get("nav").children().should('contain.text', 'WORKSHOPS')
        cy.get("nav").children().should('contain.text', 'GALLERY')
        cy.get("nav").children().should('contain.text', 'UPCOMING EVENTS')
        cy.get("nav").children().should('contain.text', 'CONTACT')
    })
})

describe("gallery thumbnails can be clicked", () => {
    it("can click on the gallery thumbnails", () => {
        cy.get("#gallery")
        cy.get('.carousel li.thumb').last().click()
    })
})