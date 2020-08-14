import fs from 'fs'


interface VeiculosProps{
    modelo: string;
    ano: number;
    portas: number;
    marca: string;
}

 export class Passeio{
    modelo: string;
    ano: number;
    portas: number;
    marca: string;
    texto?: Object;

    constructor( props : VeiculosProps){
        this.modelo =   props.modelo    
        this.ano = props.ano
        this.portas = 4
        this.marca = props.marca
    }
    salvarJson(){
        this.texto = { 
            "modelo" : this.modelo,
            "ano" : this.ano,
            "portas": this.portas,
            "marca": this.marca
        }
        fs.writeFile('myjsonfile.json', JSON.stringify(this.texto), 'utf8', function(err) {
            if (err) throw err;
            console.log('complete');
            }
        ); 
        return 'Arquivo salvo'
    }
}

export class  Moto{
    modelo: string;
    ano: number;
    marca: string;
    rodas: number;
    passageiros: number;

    texto?: Object;
    constructor(props : VeiculosProps){
        this.modelo =   props.modelo    
        this.ano = props.ano
        this.marca = props.marca
        this.rodas = 2
        this.passageiros = 2
    }
    salvarJson(){
        this.texto = { 
            "modelo" : this.modelo,
            "ano" : this.ano,
            "marca": this.marca,
            "rodas": this.rodas,
            "passageiros": this.passageiros
        } 
        fs.writeFile('myjsonfile.json', JSON.stringify(this.texto), 'utf8', function(err) {
            if (err) throw err;
            console.log('complete');
            }
        ); 
        return 'Arquivo salvo'
    }
}