//Selecionar elementos
const input_element = document.querySelector(".input");
const elemento_op_saida = document.querySelector(".conta .value");
const elemento_res_saida = document.querySelector(".res .value");

// Variáveis de operação
const OPERADORES = ["+", "-", "*", "/"];
const POWER = "POWER(",FACTORIAL = "FACTORIAL";
//dados principais da calculadora (2 arrays):
let data = 
{
  operation: [],
  formula: [],
};

// Botões da calculadora
  let botoes_calc = [
    {
          nome : "rad",
          simbolo : "Rad",
          formula : false,
          tipo : "key"
      },
      {
          nome : "deg",
          simbolo : "Deg",
          formula : false,
          tipo : "key"
      },
      {
          nome : "square-root",
          simbolo : "√",
          formula : "Math.sqrt",
          tipo : "math_function"
      },
      {
          nome : "square",
          simbolo : "x²",
          formula : POWER,
          tipo : "math_function"
      },
      {
          nome : "open-parenthesis",
          simbolo : "(",
          formula : "(",
          tipo : "number"
      },
      {
          nome : "close-parenthesis",
          simbolo : ")",
          formula : ")",
          tipo : "number"
      },
      {
          nome : "clear",
          simbolo : "C",
          formula : false,
          tipo : "key"
      },
      {
          nome : "delete",
          simbolo : "⌫",
          formula : false,
          tipo : "key"
      },
      {
          nome : "pi",
          simbolo : "π",
          formula : "Math.PI",
          tipo : "number"
      },
      {
          nome : "cos",
          simbolo : "cos",
          formula : "trigo(Math.cos,",
          tipo : "trigo_function"
      },{
          nome : "sin",
          simbolo : "sin",
          formula : "trigo(Math.sin,",
          tipo : "trigo_function"
      },{
          nome : "tan",
          simbolo : "tan",
          formula : "trigo(Math.tan,",
          tipo : "trigo_function"
      },{
          nome : "7",
          simbolo : 7,
          formula : 7,
          tipo : "number"
      },{
          nome : "8",
          simbolo : 8,
          formula : 8,
          tipo : "number"
      },{
          nome : "9",
          simbolo : 9,
          formula : 9,
          tipo : "number"
      },
      {
          nome : "division",
          simbolo : "÷",
          formula : "/",
          tipo : "operator"
      },
      {
          nome : "e",
          simbolo : "e",
          formula : "Math.E",
          tipo : "number"
      },
      {
          nome : "acos",
          simbolo : "acos",
          formula : "inv_trigo(Math.acos,",
          tipo : "trigo_function"
      },{
          nome : "asin",
          simbolo : "asin",
          formula : "inv_trigo(Math.asin,",
          tipo : "trigo_function"
      },{
          nome : "atan",
          simbolo : "atan",
          formula : "inv_trigo(Math.atan,",
          tipo : "trigo_function"
      },
      {
          nome : "4",
          simbolo : 4,
          formula : 4,
          tipo : "number"
      },{
          nome : "5",
          simbolo : 5,
          formula : 5,
          tipo : "number"
      },{
          nome : "6",
          simbolo : 6,
          formula : 6,
          tipo : "number"
      },{
          nome : "multiplication",
          simbolo : "×",
          formula : "*",
          tipo : "operator"
      },{
          nome : "factorial",
          simbolo : "×!",
          formula : FACTORIAL,
          tipo : "math_function"
      },{
          nome : "exp",
          simbolo : "exp",
          formula : "Math.exp",
          tipo : "math_function"
      },{
          nome : "ln",
          simbolo : "ln",
          formula : "Math.log",
          tipo : "math_function"
      },{
          nome : "log",
          simbolo : "log",
          formula : "Math.log10",
          tipo : "math_function"
      },{
          nome : "1",
          simbolo : 1,
          formula : 1,
          tipo : "number"
      },{
          nome : "2",
          simbolo : 2,
          formula : 2,
          tipo : "number"
      },{
          nome : "3",
          simbolo : 3,
          formula : 3,
          tipo : "number"
      },{
          nome : "subtraction",
          simbolo : "–",
          formula : "-",
          tipo : "operator"
      },{
          nome : "power",
          simbolo : "x<span>y</span>",
          formula : POWER,
          tipo : "math_function"
      },{
          nome : "ANS",
          simbolo : "ANS",
          formula : "ans",
          tipo : "number"
      },{
          nome : "percent",
          simbolo : "%",
          formula : "/100",
          tipo : "number"
      },{
          nome : "comma",
          simbolo : ".",
          formula : ".",
          tipo : "number"
      },{
          nome : "0",
          simbolo : 0,
          formula : 0,
          tipo : "number"
      },{
          nome : "calculate",
          simbolo : "=",
          formula : "=",
          tipo : "calculate"
      },{
          nome : "addition",
          simbolo : "+",
          formula : "+",
          tipo : "operator"
      }
  ];

  function criarBotoes() 
  {
    const bot_por_linha = 8;
    let bot_add = 0;

    botoes_calc.forEach((botao) => {
      if (bot_add % bot_por_linha == 0)
        input_element.innerHTML += `<div class="row"></div>`;

      const row = document.querySelector(".row:last-child");

      row.innerHTML += `<button id="${botao.nome}" class="${botao.tipo}">${botao.simbolo}</button>`;
      bot_add++;
    });
  }

  criarBotoes();
//

// Verificação de radianos ou graus
  let RAD = true;

  const rad_bot = document.getElementById("rad");
  const deg_bot = document.getElementById("deg");

  rad_bot.classList.toggle("active-angle");

  function mudarAng() 
  {
    rad_bot.classList.toggle("active-angle");
    deg_bot.classList.toggle("active-angle");
  }
//

//event listener click
  input_element.addEventListener("click", (e) => {
    const target_bot = e.target;
    botoes_calc.forEach((botao) => {
      if (botao.nome == target_bot.id) calculator(botao);
    });
  });
//

//CALCULADORA
  function calculator(botao)
  {
      if(botao.tipo == "operator")
      {
          data.operation.push(botao.simbolo);
          data.formula.push(botao.formula);
      }
      else if(botao.tipo == "number")
      {
          data.operation.push(botao.simbolo);
          data.formula.push(botao.formula);
      }
      else if(botao.tipo == "trigo_function")
      {
       
        if (data.formula.length > 0 && !Anterior(data.formula, data.formula.length)) 
        {
          data.operation.push(botao.simbolo + "(");
          data.formula.push("*" + botao.formula);
        } else {
          data.operation.push(botao.simbolo + "(");
          data.formula.push(botao.formula);
        }
      }
      else if(botao.tipo == "math_function")
      {
          let simb, form;

          if(botao.nome == "factorial")
          {
              simb = '!';
              form = botao.formula;
              data.operation.push(simb);
              data.formula.push(form);
          }
          else if(botao.nome == "power")
          {
              simb = "^(";
              form = botao.formula;
              data.operation.push(simb);
              data.formula.push(form);
          }
          else if(botao.nome == "square")
          {
            simb = "^(2)";
            form = botao.formula;
            data.operation.push(simb);
            data.formula.push(form,2,")");
          }
          else
          {
              simb = botao.simbolo + "(";
              form = botao.formula + "(";
              

              if (data.formula.length>0 &&!Anterior(data.formula, data.formula.length)) 
              {
                data.operation.push(simb);
                data.formula.push("*" + form);
              } 
              else 
              {
                data.operation.push(simb);
                data.formula.push(form);
              }
          }
      }
      else if(botao.tipo == "key")
      {
          if (botao.nome == "clear") 
          {
            data.operation = [];
            data.formula = [];
            AtualizarResSaida("");
          } else if (botao.nome == "delete") 
          {
            data.operation.pop();
            data.formula.pop();
          } else if (botao.nome == "rad") {
            RAD = true;
            mudarAng();
          } else if (botao.nome == "deg") {
            RAD = false;
            mudarAng();
          }
      }
      else if(botao.tipo == "calculate")
      {
        let formula_str = data.formula.join("");
    
        //ARRUMAR POWER e FATORIAL
        let POWER_SEARCH = search(data.formula, POWER);
        let FACTORIAL_SEARCH = search(data.formula, FACTORIAL);
      
        //Arrumar o erro do BASE POWER
        
        const BASES=GetPowerBase(data.formula,POWER_SEARCH);
        BASES.forEach(base=>{
          
          let toReplace = base + POWER;
          let replacement = "Math.pow("+ base + ",";
          formula_str = formula_str.replace(toReplace,replacement)
          
          
        })

        //Arrumar o erro do FATORIAL
        const FATB = getFatorialBase(data.formula,FACTORIAL_SEARCH); 
        
        FATB.forEach(fat=>{
          formula_str = formula_str.replace(fat.toReplace,fat.replacement);
          
        })
        let res;
        
        try {
          res = eval(formula_str);
        } catch (error) {
          if (error instanceof SyntaxError) {
            res = "Equação inválida";
            AtualizarResSaida(res);
            return;
          }
        }
         let ans = res.length > 10 ? res.toFixed(10) : res;
        data.operation = [res];
        data.formula = [res];
        AtualizarResSaida(ans);
        return;
      }
      AtualizarOpSaida(data.operation.join(''));
  }
//

// ATUALIZAR A SAÍDA
  function AtualizarOpSaida(operation)
  {
      elemento_op_saida.innerHTML = operation;
  }
  function AtualizarResSaida(resultado) {
      elemento_res_saida.innerHTML = resultado;
  }
//

//PERCORRER ARRAY   
  function search(array, keyword) //recebe uma array e uma palavra chave
  {                               //retorna uma nova array com os regEX da palavra chave na array
      let search_result=[];
      array.forEach( (element,index)=>{
          if(element == keyword) search_result.push(index); 
      });
      
      return search_result;
  }

//PEGAR NÚMEROS
  function GetPowerBase(formula, POWER_SEARCH)// retorna o número anterior ao power
  {
      let power_bases = [];
      POWER_SEARCH.forEach(power_index =>{
          
          let Tbase=[];
          
          let contP=0;
          let indexA = power_index-1;
        
          
          while(indexA>=0)
          {
              if(formula[indexA] == "(")
                  contP--;
              if(formula[indexA]==")")
                  contP++;
          
          let ehOP=false;

          OPERADORES.forEach((OPERADOR) => {
            if (formula[indexA] == OPERADOR) ehOP = true;
              });

          let ehPOW = formula[indexA]==POWER;
          if((ehOP && contP == 0) || ehPOW) 
              break;
          
          Tbase.unshift(formula[indexA]);
          
          indexA--;
          }
          power_bases.push(Tbase.join(''));
      })
          return power_bases;
  }

  function getFatorialBase(formula, FACTORIAL_SEARCH) //retorna o número anterior ao fatorial,
  {
    let fat_bases = [];
    let factorial_seq = 0;

    FACTORIAL_SEARCH.forEach((fat_index) => {
      let fb = [];
      
      
      let contP = 0;
      let proxInd = fat_index + 1;
      let proxInput = formula[proxInd];
      

      if (proxInput == FACTORIAL) {
        factorial_seq++;
        return;
      }
      let primeiro_fatorial_index = fat_index - factorial_seq;
      let indexA = (primeiro_fatorial_index - 1);

      while (indexA >= 0) 
      {
        if (formula[indexA] == "(") contP--;
        if (formula[indexA] == ")") contP++;

        let ehOP = false;

        OPERADORES.forEach((OPERADOR) => {
          if (formula[indexA] == OPERADOR) ehOP = true;
        });

        if(!ehOP)
          fb.unshift(formula[indexA]);
        else
          break;

        indexA--;
      }
      let num_str = fb.join('');
      
      const factorial = "fatorial(",
        close_p = ")";
      let times = factorial_seq + 1;
      let toReplace = num_str + FACTORIAL.repeat(times);
      let replacement = factorial.repeat(times) + num_str + close_p.repeat(times);

      fat_bases.push({
        toReplace: toReplace,
        replacement: replacement,
      });
      factorial_seq = 0;
    });
    return fat_bases;
  }
//

// GAMMA FUNCTION
  function gamma(n) {  
      var g = 7, 
          p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
      if(n < 0.5) {
        return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
      }
      else {
        n--;
        var x = p[0];
        for(var i = 1; i < g + 2; i++) {
          x += p[i] / (n + i);
        }
        var t = n + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
      }
  }
//

//TRIGONOMÉTRICAS

  function trigo(callback, angle)
  {
      if(!RAD)
          angle = (angle* Math.PI) / 180;
      return callback(angle);
  }

  function inv_trigo(callback, value)
  {
      let angle= callback(value);

      if(!RAD)
          angle = angle * 180/Math.PI ;

      return angle;
  }
//

  function fatorial(num) {
    let fat = num;
    if (num %1!=0)
      return gamma(num+1);
    if(num==0 || num==1)
      return 1;

    for (let i = num - 1; i >= 1; i--) {
      fat *= i;
      if (fat == Infinity) return Infinity;
    }

    return fat;
  }

  //Fazer multiplicação sem precisar colocar o 'x'
  function Anterior(dataFor,ind)
  {
    
    let ant = dataFor[ind-1];
    


    for (let i = 0; i < OPERADORES.length; i++) {
      if (ant == OPERADORES[i]) 
      {
        return true;
      } 
      else 
        return false;
      
    }
  }