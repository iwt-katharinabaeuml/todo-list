describe('app', () => {
  beforeEach(() => {
    cy.visit('localhost:4200');
    cy.get('#description').should(
      'have.class',
      'h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-gray-500 block w-5/12 ml-5 p-3'
    );
    cy.get('#description').type('Osterbrot backen');
    cy.get('#datepicker').type('2023-03-21', { force: true });
    cy.get('#handleOpen').click();
    cy.get('#MenuOne').click();
    cy.get('#add_button').click();
    cy.get('#description').clear();
    cy.get('#description').should('have.class', 'empty');
  });

  it('should add new todo', () => {
    cy.get('#description').should(
      'have.class',
      'h-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-gray-500 block w-5/12 ml-5 p-3'
    );
    cy.get('#description').type('Nikolausmuetze aufsetzen');
    cy.get('#datepicker').type('2023-12-06', { force: true });
    cy.get('#description').click();
    cy.get('#handleOpen').click();
    cy.get('#MenuThree').click();
    cy.get('#add_button').click();
    cy.get('#description').clear();
    cy.get('#description').should('have.class', 'empty');
    cy.get('#todo-list')
      .get('li#item-0 .item-description:first')
      .should('contain', 'Osterbrot backen');
    cy.get('#todo-list')
      .get('li#item-0 .item-priority:first')
      .should('contain', '!!!');
    cy.get('#todo-list')
      .get('li#item-0 .item-date:first')
      .should('contain', '21.03.2023');
    cy.get('#todo-list')
      .get('li#item-1 .item-description:first')
      .should('contain', 'Nikolausmuetze aufsetzen');
    cy.get('#todo-list')
      .get('li#item-1 .item-priority:first')
      .should('contain', '!');
    cy.get('#todo-list')
      .get('li#item-1 .item-date:first')
      .should('contain', '06.12.2023');
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
      .should('contain', '21.03.2023');
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

  it('should remove a todo', () => {
    cy.get('#todo-list').find('li').should('have.length', 1);
    cy.get('#todo-list').find('li:first').find('#trashIcon').click();
    cy.get('#todo-list').find('li').should('have.length', 0);
  });

  it('should remove a completed todo', () => {
    cy.get('#todo-list').find('li:first').find('[type="checkbox"]').click();
    cy.get('#todo-list').find('li').should('have.length', 0);
    cy.get('#donelist').find('li').should('have.length', 1);
    cy.get('#donelist').find('li:first').find('#trashIcon').click();
    cy.get('#donelist').find('li').should('have.length', 0);
  });

  it('should not add a new todo, if description is empty', () => {
    cy.get('#todo-list').find('li').should('have.length', 1);
    cy.get('#description').should('have.class', 'empty');
    cy.get('#add_button').click();
    cy.get('#description').should('have.class', 'empty');
    cy.get('#todo-list').find('li').should('have.length', 1);
  });

  it('should limit description to 45 digits', () => {
    cy.get('#description').type(
      '123456789101214161820222426283032343638404244464850'
    );
    cy.get('#add_button').click();
    cy.get('#todo-list')
      .find('li:last')
      .find('p')
      .should('have.text', '123456789101214161820222426283032343638404244');
  });
});
