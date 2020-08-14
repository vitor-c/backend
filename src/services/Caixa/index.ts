class CalcTroco{
    public execute(valorCompra:number , valorPagamento: number ){
        let valorTroco = 0

            if (valorPagamento === valorCompra){
                return valorTroco
            }else if(valorPagamento > valorCompra){
                valorTroco = valorPagamento - valorCompra    
            }

        const troco = this.executeCalcTroco(valorTroco)
        console.log({troco , valorTroco})
        return {troco , valorTroco}
    }

    executeCalcTroco( valorTroco: number){
        
        let troco = valorTroco
        const notas = [100,10,1];
        let notasTroco = []

            for(let x=0; x < notas.length; x++){
                if(troco >= notas[x]){
                    let div = Math.floor(troco/notas[x]);
                    
                    notasTroco.push(`${div} notas de ${notas[x]}R$ ,` )  ;
                    troco -= div*notas[x];
                }
            }
        return notasTroco;
    }
}

export default CalcTroco