// Only change code below this line
function countdown(n){
    if (n  < 1) {
        console.log(n-1, '-1')
        return []
    } else {

        let array = countdown(n-1)
        console.log(n-1, 'n-1')
        // до тех пор пока не накопятся все countdown'ы не будет выполняться unshift

        array.unshift(n)
        return array

    }
}
// Only change code above this line


/*

 В начале идёт накопление неизвестных решений в таком порядке:
 countdown(5)
 countdown(4)
 countdown(3)
 countdown(2)
 countdown(1)
 countdown(0), но данная функция запускает if (n < 1) и даёт пустой массив и даёт ответ, что countdown(0) = []

 И функция начинает работу с конца, она начинает выполняться countdown(1), она идёт по ветке else, там функция
 натыкается на строку let array = countdown(n-1) = countdown(1-1) = countdown(0), ответ которой функция знает, т.е. [] - пустой массив,
 и начинает выполнение строчки array.unshift(n), т.е. array.unshift(1) в итоге array = [1]
 и точно также после этого начинает выполнение countdown(2), которая наткнётся уже на известное решение countdown(2-1) = [1]
 и выполнит array.unshift(2), что даст ответ  [2,1]
 и так далее до countdown(5), в результате которого будет ответ [5, 4, 3, 2, 1]



 */


console.log(  countdown(5)  ) // [5, 4, 3, 2, 1]