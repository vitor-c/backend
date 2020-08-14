class CalcPalindromo{
    public execute(arr: string[] , tamanho: number){
        
        const novoArray = [];
        let i = 0;
        while (i < arr.length) {
      
            novoArray.push(arr.slice(i, i + tamanho));
            i += tamanho;
            }

        const resultado = this.executeBuscaPalimetro(novoArray,tamanho)
        return resultado
    }

    executeBuscaPalimetro( arrays: string[][] , tamanho:number){

        const palindromo: string[][] = []
        arrays.map(item => {
        let reversed = [...item].reverse()
        const reversedString = reversed.toString()
        const itemString = item.toString()
      
        if (itemString === reversedString) {
            if(item.length === tamanho){
            palindromo.push(item)
            }
        }
    })  
    return palindromo
    } 
}

export  default CalcPalindromo