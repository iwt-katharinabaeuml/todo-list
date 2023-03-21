describe('app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
    cy.get('#description').type('Osterbrot backen');
    cy.get('#datepicker').type('2023-03-21', { force: true });
    cy.get('#handleOpen').click();
    cy.get('#MenuOne').click();
    cy.get('#add_button').click();
    cy.get('#description').clear();
  });

  it('should add new todo', () => {
    cy.get('#description').type('Nikolausmuetze aufsetzen');
    cy.get('#datepicker').type('2023-12-06', { force: true });
    cy.get('#description').click();
    cy.get('#handleOpen').click();
    cy.get('#MenuThree').click();
    cy.get('#add_button').click();
    cy.get('#description').clear();
    cy.get('#todo-list')
      .get('li#item-0 .item-description:first')
      .should('contain', 'Osterbrot backen');
    cy.get('#todo-list')
      .get('li#item-0 .item-priority:first')
      .should('contain', '!!!');
    cy.get('#todo-list')
      .get('li#item-0 .item-date:first')
      .should('contain', '2023-03-21');
    cy.get('#todo-list')
      .get('li#item-1 .item-description:first')
      .should('contain', 'Nikolausmuetze aufsetzen');
    cy.get('#todo-list')
      .get('li#item-1 .item-priority:first')
      .should('contain', '!');
    cy.get('#todo-list')
      .get('li#item-1 .item-date:first')
      .should('contain', '2023-12-06');
    cy.get('#todo-list').find('li').should('have.length', 2);
  });

  it('should complete a todo', () => {
    cy.get('#todo-list').find('li').should('have.length', 1);
    cy.get('#todo-list')
      .get('li:first .item-description:first')
      .should('contain', 'Osterbrot backen');
    cy.get('#todo-list')
      .get('li:first .item-priority:first')
      .should('contain', '!!!');
    cy.get('#todo-list')
      .get('li:first .item-date:first')
      .should('contain', '2023-03-21');
    cy.get('#donelist').find('li').should('have.length', 0);
    cy.get('#todo-list').find('li:first').find('[type="checkbox"]').click();
    cy.get('#donelist').find('li:first').should('contain', 'Osterbrot backen');
    cy.get('#donelist').find('li').should('have.length', 1);
  });

  it('should reopen a todo', () => {
    cy.get('#todo-list').find('li:first').find('[type="checkbox"]').click();
    cy.get('#donelist').find('li:first').should('contain', 'Osterbrot backen');
    cy.get('#todo-list').find('li').should('have.length', 0);
    cy.get('#donelist').find('li').should('have.length', 1);
    cy.get('#donelist').find('li:first').find('[type="checkbox"]').click();
    cy.get('#todo-list').find('li').should('have.length', 1);
    cy.get('#donelist').find('li').should('have.length', 0);
  });
});
