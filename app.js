// var a = 2;
// var b = 1;
// var result= --a - --b + ++b + b--
// alert(result)

// function clicka(){
//     var input = document.getElementById("inp").value;
//      alert(input + " " + "Hello")
// }

    var input = document.getElementById("num").value;
    function clickan(){
        var input = document.getElementById("num").value;
        var paran = document.getElementById("pera");
        if (input){
            paran.innerHTML = input +" " +"x1 =" + " " + input*1 +"<br />"; 
            paran.innerHTML += input +" " +"x2 =" + " " + input*2 +"<br />"; 
            paran.innerHTML += input +" " +"x3 =" + " " + input*3 +"<br />"; 
            paran.innerHTML += input +" " +"x4 =" + " " + input*4 +"<br />"; 
            paran.innerHTML += input +" " +"x5 =" + " " + input*5 +"<br />"; 
            paran.innerHTML += input +" " +"x6 =" + " " + input*6 +"<br />"; 
            paran.innerHTML += input +" " +"x7 =" + " " + input*7 +"<br />"; 
            paran.innerHTML += input +" " +"x8 =" + " " + input*8 +"<br />"; 
            paran.innerHTML += input +" " +"x9 =" + " " + input*9 +"<br />"; 
            paran.innerHTML +=  input +" " +"x10 =" + " " + input*10 +"<br />"; 
             } else{
                paran.innerHTML = "5x1 =" + " " + 5*1 +"<br />"; 
                paran.innerHTML += "5x2 =" + " " + 5*2 +"<br />"; 
                paran.innerHTML += "5x3 =" + " " + 5*3 +"<br />"; 
                paran.innerHTML += "5x4 =" + " " + 5*4 +"<br />"; 
                paran.innerHTML += "5x5 =" + " " + 5*5 +"<br />"; 
                paran.innerHTML += "5x6 =" + " " + 5*6 +"<br />"; 
                paran.innerHTML += "5x7 =" + " " + 5*7 +"<br />"; 
                paran.innerHTML += "5x8 =" + " " + 5*8 +"<br />"; 
                paran.innerHTML += "5x9 =" + " " + 5*9 +"<br />"; 
                paran.innerHTML += "5x10 =" + " " + 5*10 +"<br />"; 
             }
    }
