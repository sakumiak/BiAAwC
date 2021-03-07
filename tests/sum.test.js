function sum(a, b,) {
    return a+b
}

describe("Test sum function", () => {
    test('add two numbers', () => {
        const result = sum(1,2)

        expect(result).toBe(3)
    })
})