describe("User should be able to mark task as completed", () => {
  it("mark task completed", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="todo-1"]').click();
    cy.get('[id="Completed"]').click();
    cy.contains("Sleep");
  });
});
