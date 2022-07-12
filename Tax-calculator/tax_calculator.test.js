const Tax=require("./tax_calculator")



describe('tax calculations', () => {
    test('income 450000 & savings 300000', () => {
        expect(Tax(450000, 300000)).toBe(40000)
    });
    test('income 750000 & savings 50000', () => {
        expect(Tax(750000, 50000)).toBe(147000)
    });
    test('income 1200000 & savings 500000', () => {
        expect(Tax(1200000, 500000)).toBe(345000)
    });

    test('income 1200000 & savings 500000', () => {
        expect(Tax(1200000, 500000)).toBe(345000)
    });

    test('income 700000 & savings 500000', () => {
        expect(Tax(700000, 500000)).toBe(130000)
    });

    test('income 200000 & savings 180000', () => {
        expect(Tax(200000, 180000)).toBe(250000)
    });
});