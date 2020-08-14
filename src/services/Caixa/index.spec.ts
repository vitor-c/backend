import CalcTroco from './index'

const calcTroco = new CalcTroco

describe('CaixaTeste' , () =>{
    it('calcular troco de 50' , ()=>{

        expect(calcTroco.execute( 50 , 100)).toStrictEqual({ troco: [ '5 notas de 10R$ ,' ], valorTroco: 50 })
    })
})

