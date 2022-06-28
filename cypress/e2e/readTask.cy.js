describe("User should be able to view the list of tasks", () => {
  it("read task list", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-testid="todo-name"]').each((labelElement) => {
      expect(labelElement[0].innerText).to.be.oneOf(["Eat", "Sleep", "Repeat"]);
    });
    cy.get('[data-testid="todo-name"]').should("have.length", 3);
  });
});
