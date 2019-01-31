var inputLabel=document.getElementById('disp');

function pushBtn(obj){
    var pushed=obj.innerHTML;
    if(pushed=='=')
        inputLabel.innerHTML=eval(inputLabel.innerHTML);
    else if(pushed=='C')
        inputLabel.innerHTML='0';
    else{
        if(inputLabel.innerHTML=='0')
            inputLabel.innerHTML=pushed;
        else
            inputLabel.innerHTML+=pushed;
    }
}
//function add(){ 
//    
//var a=Number(document.getElementById('id1').value);
//var b=Number(document.getElementById('id2').value);
//
//        var c=a+b;
//        document.getElementById('id3').innerHTML=c
//    }
//     function sub(){
//var a=document.getElementById('id1').value;
//var b=document.getElementById('id2').value;
//         a=parseInt(a)
//         b=parseInt(b)
//
//        var c=a-b;
//        document.getElementById('id3').innerHTML=c
//    }
//
// function div(){
//var a=document.getElementById('id1').value;
//var b=document.getElementById('id2').value;
//         a=parseInt(a)
//         b=parseInt(b)
//
//        var c=a/b;
//        document.getElementById('id3').innerHTML=c
//    }
// function mul(){
//var a=document.getElementById('id1').value;
//var b=document.getElementById('id2').value;
//         a=parseInt(a)
//         b=parseInt(b)
//
//        var c=a*b;
//        document.getElementById('id3').innerHTML=c
//    }
//  function butt(){
//      var sid=document.getSelection.id;
//      alert('$sid')
//      document.getElementById(sid).append="1"
//  }