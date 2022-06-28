describe("User should be able to add task to the Todo List", () => {
  it("add task", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="form-input"]').type("Random Task");
    cy.get('[data-testid="form-button"]').click();
    cy.contains("Random Task").should("be.visible");
  });
});
