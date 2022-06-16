const Intern = require("../lib/intern")
const Employee = require("../lib/employee")

describe("Intern", () => {
    // Test for all use cases with initializing a new Manager
    it("should create an object with school ", () => {
        const intern = new Intern("Irene", 2, "Irene@gmail.com", "UofT")
        // Verify that the new objects has the correct property
        expect(intern.school).toEqual("UofT");
    })
    it("getSchool() method should get the value ", () => {
        const intern = new Intern("Irene", 2, "Irene@gmail.com", "UofT")
        // Verify that the new objects has the correct property
        expect(intern.getSchool()).toEqual("UofT");
    })
    it("getRole() method should get the value ", () => {
        const intern = new Intern("Irene", 2, "Irene@gmail.com", "UofT")
        // Verify that the new objects has the correct property
        expect(intern.getRole()).toEqual("Intern");
    })

})