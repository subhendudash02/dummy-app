// const func = () => {
//     setTimeout(() => {
//         cy.get("Button").click();
//     }, 2000);
// }

describe("renders the home page", ()=> {
    it("renders correctly", () => {
        cy.visit("/");
        cy.get("Button").click();
        cy.get("Button").click();
    })
})