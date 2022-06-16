
const Employee = require("../lib/employee")

describe("Employee", () => {
    // Test for all use cases with initializing a new Emoloyee
    it("should create an object with name ", () => {
        const employee = new Employee("Sarah", 1, "sarah@gmail.com")
        // Verify that the new objects has the correct property
        expect(employee.name).toEqual("Sarah");
    })
    it("should create an object with id ", () => {
        const employee = new Employee("Sarah", 1)
        // Verify that the new objects has the correct property
        expect(employee.id).toEqual(1);
    })
    it("should create an object with name ", () => {
        const employee = new Employee("Sarah", 1, "sarah@gmail.com")
        // Verify that the new objects has the correct property
        expect(employee.email).toEqual("sarah@gmail.com");
    })
})
