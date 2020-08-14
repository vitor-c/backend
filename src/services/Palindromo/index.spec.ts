import CalcPalindromo from './index'

const calcPalinfromo = new CalcPalindromo

describe('CaixaTeste' , () =>{
    it('Buscar palindromo 121-555-666 de uma serie de 121123555666' , ()=>{
        expect(calcPalinfromo.execute(['1', '2', '1', '1','2', '3', '5', '5','5', '6', '6', '6'],3))
        .toStrictEqual([["1", "2", "1"], ["5", "5", "5"], ["6", "6", "6"]])
    })
})