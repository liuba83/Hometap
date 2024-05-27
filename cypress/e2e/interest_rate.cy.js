describe("interest rate", () => {
  beforeEach(() => {
    cy.visit("/mortgage-calculator/");
  });

  //e2e test to have interest rate adjusted
  it("adjusts interest rate with set Home price, downpayment and loan program", () => {
    cy.get('[id="homePrice"]')
      .clear()
      .type("500000")
      .invoke("val")
      .then((num) => parseInt(num.replace(/,/, "")))
      .should("eq", 500000);

    cy.get('[id="form-1_downPaymentPercent"]')
      .clear()
      .type("5")
      .invoke("val")
      .then(parseFloat)
      .should("eq", 5);

    cy.get("select").select("15 year fixed").type("{enter}");
    cy.get("select").invoke("val").should("eq", "Fixed15Year");

    cy.wait(2000);

    cy.get('[id="rate"]').invoke("val").then(parseFloat).should("be.lt", 4);
  });

  //open page about interest rates 
  it("opens new page about interest rate", () => {
    cy.contains("See current rates").invoke("removeAttr", "target").click();
    cy.contains("What are today's mortgage rates?");
  }); 

  //negative test
  it("shows error message when interest rate field is blank", () => {
    cy.get('[id="rate"]')
      .clear()
      .should("have.value", "")
      .should("have.attr", "required");
    cy.get('body').click({force: true});
    cy.contains("Invalid value");
  });
  
});
