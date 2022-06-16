const Engineer = require("../lib/engineer")
const Employee = require("../lib/employee")

describe("Engineer", () => {
    // Test for all use cases with initializing a new Manager
    it("should create an object with github ", () => {
        const engineer = new Engineer("Irene", 2, "Irene@gmail.com", "IreneCoding")
        // Verify that the new objects has the correct property
        expect(engineer.github).toBe("IreneCoding");
    })
    it("getGithub() method should get the value ", () => {
        const engineer = new Engineer("Irene", 2, "Irene@gmail.com", "IreneCoding")
        // Verify that the new objects has the correct property
        expect(engineer.getGithub()).toBe("IreneCoding");
    })
    it("getRole() method should get the value ", () => {
        const engineer = new Engineer("Irene", 2, "Irene@gmail.com", "IreneCoding")
        // Verify that the new objects has the correct property
        expect(engineer.getRole()).toBe("Engineer");
    })

})