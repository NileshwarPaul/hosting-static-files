
function add()
{


var input_1 = Number(document.getElementById('input1').value)

var input_2 =Number( document.getElementById('input2').value)

console.log(input_1)
console.log(input_2)


var result=input_1 + input_2

document.getElementById('display_result').innerHTML=result


}

document.getElementById('submit').addEventListener('click',add)