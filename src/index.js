export function contaPalavras(texto) {//Quebrar o texto em paragrafo
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {//O flatMap junta os objetos de contagem de palavras de todos os parágrafos em um único array contagem
      if (!paragrafo) return [];//Se o paragrafo estiver vazio, retorna array vazio
      return verificaPalavrasDuplicadas(paragrafo); //A função é aplicada ao parágrafo, retornando o objeto com a contagem de palavras.
    })
    return contagem;//Extrair da fubção
  }
  
  function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');//colocar as letras em lower para não haver diferenciações e separar por \n\n
  }
  
  function limpaPalavras(palavra) {//Tirar caracteres especiais
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); //Expressão regular com eles, e substitui-los por vazio
  }
  
  function verificaPalavrasDuplicadas(texto) { //Verificar repetição de palavras
    const listaPalavras = texto.split(' '); //Separar as palavras quando houver espaço
    const resultado = {}; //Colocar as palavras em um objeto
    listaPalavras.forEach(palavra => {  //Para cada palavra
      if (palavra.length >= 3) { //Se ela tiver mais de 2 caracteres
        const palavraLimpa = limpaPalavras(palavra); //Vai limpar a palavra
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1 //Acrescenta no objeto resultado a propriedade texto e o valor 
      }
    })
    return resultado; // retorna um objeto 
  }
