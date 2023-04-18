const validateValue = require('./validateValue')

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Меньше Корректного', () => {
        expect(validateValue(-50)).toBe(false)
    })
    test('Больше Корректного', () => {
        expect(validateValue(150)).toBe(false)
    })
    test('Пограничное нижнее', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Пограничное верхнее', () => {
        expect(validateValue(100)).toBe(true)
    })
})
