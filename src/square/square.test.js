const square = require('./square')

describe('square', () => {
    let mockValue

    // Перед каждым
    beforeEach( () => {
        // Добавить в БД
        mockValue = Math.random()
    })
    // Один раз в начале
    beforeAll( () => {

    })

    test('Корректное значение', () => {
        // expect(square(2)).toEqual(4)
        // expect(square(2)).toBeLessThan(5)
        // expect(square(2)).toBeGreaterThan(3)
        // expect(square(2)).not.toBeUndefined()
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(3)
        expect(spyMathPow).toBeCalledTimes(1)
    })

    test('Корректное значение', () => {

        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })

    afterEach( () => {
        // Удалить из БД
        jest.clearAllMocks()
    })
    afterAll( () => {
        // Почистили память
    })
})
