// const func = () => {
//     setTimeout(() => {
//         cy.get("Button").click();
//     }, 2000);
// }

describe("renders the home page", ()=> {
    it("renders correctly", () => {
        cy.visit("/");
        if (cy.contains("Click Me")) {
            cy.log("Button found. Clicking...");
            cy.wait(2000); // 2s
            cy.contains("Click Me").click();
            cy.log("Going Back...");
            cy.wait(2000); // 2s
            cy.contains("Go Back").click();
        }
        else {
            cy.log("Button not found. Retrying...");
        }


    })
})