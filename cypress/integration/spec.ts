describe('Test dashboard', () => {
  it('Check app title', () => {
    cy.visit('/');
    cy.contains('Angular jest cypress');
  })

  it('Check row count', () => {
    cy.get('mat-table').find('mat-row').should(($tr) => {
      expect($tr).to.have.length(10);
    });
  })

  it('Find user Reichert, open one album and close dialog', () => {
    cy.visit('/');
    cy.contains('Glenna Reichert').parent().should('have.class', 'mat-row');
    /**
     * the full path is
     * ':nth-child(10) > .cdk-column-functions > [mattooltip="Show users albums and photos"] > .mat-button-wrapper > .mat-icon'
     * but the shorthand is enough
     */
    cy.get(':nth-child(10) [mattooltip="Show users albums and photos"] .mat-icon').click();
    cy.contains('aperiam odio fugiat').click();
    cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').find('img').should(($img) => {
      expect($img).not.to.have.length(0);
    });
    cy.contains('Close').click();
  })
})
