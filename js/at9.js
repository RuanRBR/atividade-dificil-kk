function calculosIMC(){
    let peso= 56, altura =1.72 , IMV = peso/(altura ** 2);


    if(IMV < 18.5){
    console.log("Baixo peso")
    }else if (IMV >= 18.5 && IMV <= 24.9){
    console.log("Peso Normal")}
    else{
    console.log("Acima do Peso")
    }
}
calculosIMC()
