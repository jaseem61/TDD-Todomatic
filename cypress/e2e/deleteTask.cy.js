describe("user should be able to delete any task", () => {
  it("delete task", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="delete-todo-0"]').click();
    cy.get('[id="todo-0"]').should("not.exist");
  });
});
