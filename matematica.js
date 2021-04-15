var operacoes = {
    soma : function(a,b){
        return a+b
            },
    mult : function(a,b){
        return a*b;
            },
    subt : function(a,b){
        return a-b;
            },
    div : function(a,b){
        return a/b;
            }
    
};

var numeros = {
    numA : function(a){
        return a
            },
    numB : function(b){
        return b
            }
        };
module.exports = operacoes;