function add(){
    var input1=document.getElementById('input1').value
    document.getElementById('input1').value=""
    console.log(input1)

    
    output.push(input1)
    
    console.log(output)
    document.getElementById('result').innerHTML=output
}

function remove(){
    output.pop()
    document.getElementById('result').innerHTML=output

}
var output=[]

document.getElementById('push').addEventListener('click' ,add)
document.getElementById('pop').addEventListener('click' ,remove)