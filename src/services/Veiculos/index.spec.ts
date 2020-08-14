import { Passeio } from "./Veiculos"


const passeio = new Passeio({modelo: 'Model 3', portas:4,ano:2017 , marca:'Tesla' })

describe('CaixaTeste' , () =>{
    it('calcular troco de 50' , ()=>{
        expect(passeio.salvarJson()).toBe('Arquivo salvo')
    })
})