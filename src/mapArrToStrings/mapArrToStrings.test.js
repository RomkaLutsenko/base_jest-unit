const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('НЕ Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'asdadfsg'])).toEqual(['1', '2', '3'])
    })
    test('Пустой массив', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
    })
})
