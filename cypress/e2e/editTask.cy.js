describe("User should be able to edit a task", () => {
  it("edit Task", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[id="edit-todo-0"]').click();
    cy.get('[id="todo-0"]').type("New Name");
    cy.get('[data-testid="todo-edit-save"]').click();
    cy.contains("New Name").should("be.visible");
  });
});
