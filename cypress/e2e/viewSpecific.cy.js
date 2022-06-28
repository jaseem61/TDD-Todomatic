describe("Only specific subset tasks should be returned", () => {
  it("should display specific tasks when filter button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="todo-checkbox"]').should("have.length", 3);
    cy.get('[id="Completed"]').click();
    cy.get('[data-testid="todo-checkbox"]').each((checkbox) => {
      expect(checkbox[0].checked).to.equal(true);
    });
    cy.get('[id="Active"]').click();
    cy.get('[data-testid="todo-checkbox"]').each((checkbox) => {
      expect(checkbox[0].checked).to.equal(false);
    });
  });
});
