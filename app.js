const input =document.querySelector('input');
const button = document.querySelector('article');


button.addEventListener('click',(e)=>{
    if(e.target.innerHTML==='c'){
        input.value = '';
    }
    else if(e.target.innerHTML==='DEL'){
        if(input.value!=''){
            let res=input.value.split('');
            res.pop();
            input.value=res.join("");
        }
    }

        else if(e.target.innerHTML==='='){
        try{
        input.value = eval(input.value);
        }
        catch(e){
            input.value="INVALID !!";
        }
        }
        else{
            input.value += e.target.innerHTML;
            }
            })