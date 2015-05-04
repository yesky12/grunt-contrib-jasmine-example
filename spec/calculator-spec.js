/**
 * Created by josh on 2015/5/1.
 */
var calculator = require("../src/calculator");

describe("multiplication", function () {
    it("should multiply 2 and 3", function () {
        var product = calculator.multiply(2, 3);
        //expect(5).toBe(6);

        //expect(product).toBe(6);
        expect(product).toBe(5);

    });

    it("should multiply 3 and 5", function () {
        var product = calculator.multiply(3, 5);
        //expect
    });

});