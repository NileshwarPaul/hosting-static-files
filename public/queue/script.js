function add(){
    var input1=document.getElementById('input1').value
    document.getElementById('input1').value=""
 
    output.push(input1)
   
    document.getElementById('result').innerText=output
    
    
    
}

function remove(){
    output.shift()
    document.getElementById('result').innerHTML=output

}

var output=[]
document.getElementById('push').addEventListener('click' ,add)
document.getElementById('pop').addEventListener('click' ,remove)