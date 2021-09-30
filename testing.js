import {go} from './encryption';

function clickfunc_enc_test(){
    var i = "Paolo";
    document.getElementById("p_id").innerHTML = encrypt(i, 0);
}