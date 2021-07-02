function encrypt(){
    var x=document.getElementById("a").value;
    var s1="";
    for(var i=0;i<x.length;i++){
       s1+= x.charCodeAt(i);
       s1+=" ";
    }
    console.log(s1);
    //s1 -- ascii values
    var arr=s1.split(" ");
    var s2="";
    for(var i=0;i<arr.length-1;i++){
        var int1=parseInt(arr[i]);
        var s3=("00000000"+int1.toString(2)).substr(-8)
        s2+=s3;
        s2+=" ";
    }
    // console.log(s2);
    var s4="";//after 1's complement;
    for(var i=0;i<s2.length;i++){
        if(s2[i]==" "){
            s4+=" ";
        }
        else if(s2[i]==0){
            s4+=1;
        }
        else if(s2[i]==1){
            s4+=0;
        }
        
    }
    //console.log(s2);
    //console.log(s4);//1's complement
    var s5="";
    var key_val=document.getElementById("key").value;
    var binary_arr=s4.split(" ");
    for(var i=0;i<binary_arr.length-1;i++){
        var after_xor="";
        for(var i1=0;i1<8;i1++){
            after_xor+=binary_arr[i][i1]^key_val[i1];
        }
        s5+=after_xor;
        s5+=" ";
    }
    console.log(s5);

    //Reverse
    var s6=s5.split(" ");
    var s8="";
    for(var i=0;i<s6.length-1;i++){
        var s7=s6[i];
        for(var j=s7.length-1;j>=0;j--){
            s8+=s7[j];
        }
        s8+=" ";
    }
    console.log(s8);

    var s9=s8.split(" ");
    var s10=[];
    for(var i=0;i<s9.length-1;i++){
        var s11=parseInt(s9[i],2);
        s11=s11.toString(10);
        // console.log(s11);
        s10.push(s11);
    }
    var final="";
    for(var i=0;i<s10.length;i++){
        let number=s10[i];
        number = number.split('');
    for (let j=0;j<number.length;j++){       
        if (number[j]!= '.'){
            number[j] = String(9 - Number(number[j]) + 0);
         }
    }
    number = number.join("");
    final+=number;
    final+=" ";
    }
    var y=document.getElementById('text').innerText=final;
    //  document.write('Ciper Text is:'+final);
}