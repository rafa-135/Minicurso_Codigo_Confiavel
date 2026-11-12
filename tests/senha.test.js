const senhaValida = require("../src/senha")

describe("senhaValida", () => {
    test("aceita senha válida", () => {
        expect(senhaValida("abc12345")).toBe(true);
    });
    test("rejeita senha curta", () => {
        expect(senhaValida("ab1")).toBe(false);
    });
    test("rejeita senha sem numero", () => {
        expect(senhaValida("abcdefgh")).toBe(false);
    });
});