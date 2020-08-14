import { Router } from 'express';
import CalcTroco from '../services/Caixa';
import { Passeio , Moto} from '../services/Veiculos/Veiculos';
import CalcPalindromo from '../services/Palindromo';

const routes = Router();
const calcTroco = new CalcTroco
const calcPalindromo = new CalcPalindromo

routes.post( '/palindromos' , (resquest , response)=>{
    const { numero , intervalo} = resquest.body

    const arrayNumero = numero.split('')
    const tamanho = parseInt(intervalo)
    
    const resultado = calcPalindromo.execute(arrayNumero , tamanho)
    const res = [...resultado].join(' - ')
    
    return response.json(res)
})

routes.post( '/caixa' , (resquest , response)=>{
    const { valorCompra , valorPagamento} = resquest.body


    const valorCompraInt = parseInt(valorCompra)
    const valorPagamentoInt = parseInt(valorPagamento)

    const resultado = calcTroco.execute(valorCompraInt , valorPagamentoInt)

    return response.json(resultado)
})

routes.post( '/veiculos' , (resquest , response)=>{
    const { modelo , ano , portas , marca} = resquest.body

    try {   
            if(portas){
            const veiculo = new Passeio({modelo,ano,portas,marca})
            veiculo.salvarJson()
            }else {
                const veiculo = new Moto({modelo,ano,portas,marca})
                veiculo.salvarJson()
            }
        return response.status(201).json({"message": "Arquivo salvo"})
        } catch (error) {
        return response.status(504).json(error)   
    }  
})

export default routes;