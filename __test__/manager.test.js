const Manager = require("../lib/manager")
const Employee = require("../lib/employee")

describe("Manager", () => {
    // Test for all use cases with initializing a new Manager
    it("should create an object with officeNumber ", () => {
        const manager = new Manager("Irene", 2, "Irene@gmail.com", 10)
        // Verify that the new objects has the correct property
        expect(manager.officeNumber).toEqual(10);
    })
    it(" getOfficeNumber() method should get the value", () => {
        const manager = new Manager("Irene", 2, "Irene@gmail.com", 10)
        // Verify that the new objects has the correct property
        expect(manager.getOfficeNumber()).toEqual(10);
    })
    it("getRole() method should get the value ", () => {
        const manager = new Manager("Irene", 2, "Irene@gmail.com", 10)
        // Verify that the new objects has the correct property
        expect(manager.getRole()).toEqual("Manager");
    })

})