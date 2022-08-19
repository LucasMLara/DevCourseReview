const { sum, myRemove,myFizzBuzz } = require('./functions')

describe('Testa a função "Sum"',  () => {
    it('se Retorna 9 ao somar 4 + 5', () => {
        expect(sum(4,5)).toBe(9)
    });

    it('Se retorna 0 ao somar "0 + 0" ',  () => {
        expect(sum(0,0)).toBe(0)
    });

    it('should ', function () {
        expect(() => sum(1,"5")).toThrow()
    });
});


describe('Testa a função "myRemove"', function () {

    it('should ', function () {
        let array = [1,2,3,4]
        expect(myRemove(array, 3)).toEqual([1,2,4])
    });

    it('should ', function () {
        let array = [1,2,3,4]
        expect(myRemove(array, 3)).not.toEqual([1,2,3, 4])
    });

    it('should ', function () {
        let array = [1,2,3,4]
        expect(myRemove(array, 5)).toEqual([1,2,3,4])
    });

});


describe('Testa a função "myFizzBuzz"', function () {

    it('should ', function () {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });
    it('should ', function () {
        expect(myFizzBuzz(3)).toBe('fizz')
    });
    it('should ', function () {
        expect(myFizzBuzz(5)).toBe('buzz')
    });
    it('should ', function () {
        expect(myFizzBuzz(65498561681)).toBe(65498561681)
    });
    it('should ', function () {
        expect(myFizzBuzz('88')).toBeFalsy()
    });
});
