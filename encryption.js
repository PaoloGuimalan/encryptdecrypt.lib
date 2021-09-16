function encrypt(value_from, count){
    const value_enc = value_from;
    const splitting = value_enc.split("");
    const proc = pattern_process(splitting);

    if(count > 0 && count < 6){
        return encrypt(proc, count-1);
    }
    else if(count > 5){
        document.write(
            "<div style='color: red'>Encryption Count exceeded to 5!</div>"
            );
    }
    else if(count < 0){
        document.write(
            "<body style='background: grey; margin: 0; width: 100%; height: 100%;'>"+
                "<div style='color: red; width: 80%; height: 100px; background-color: black; margin: 50px auto 0 auto; text-align: center; font-size: 15px;'>"+
                    "<p style=''>Encryption Count is invalid!</p><br><p>encryption.js: line 14 occured!</p>"+
                "</div>"+
            "</body>"
            );
    }
    else if(count == 0){
        return proc;
    }
}

function pattern_process(to_split){
    const arr_keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","+","{","[","}","]",";",":","'","<",",",">",".","?","/","-","=","`","~"];
    const arr_values = ["0123","0234","0345","0456","0567","0678","0789","1890","1123","1234","1345","1456","1567","1678","1789","2123","2234","2345","2456","2567","2678","2789","3123","3234","3345","3456","3567","3678","3789","4123","4234","4345","4456","4567","4678","4789","5123","5234","5345","5456","5567","5678","5789","6123","6234","6345","6456","6567","6678","6789","7123","7234","7345","7456","7567","7678","7789","8123","8234","8345","8456","8567","8678","8789","9123","9234","9356","9567","9678","9789","0987","0876","0765","0654","0543","0432","0321","9987","9876","9765","9654","9543","9432","9321","8987","8876","8765","8654","8543","8432","8321","7987"];
    //8678
    const array = to_split;
    var string_value = "";
    for (let index_arr = 0; index_arr < array.length; index_arr++) {
       for (let index_val = 0; index_val < arr_keys.length; index_val++) {
           if(array[index_arr] == arr_keys[index_val]){
                string_value = string_value + arr_values[index_val];
           }
       } 
    }

    return string_value;
}

function repattern_process(to_bind){
    const arr_keys_d = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","_","+","{","[","}","]",";",":","'","<",",",">",".","?","/","-","=","`","~"];
    const arr_values_d = ["0123","0234","0345","0456","0567","0678","0789","1890","1123","1234","1345","1456","1567","1678","1789","2123","2234","2345","2456","2567","2678","2789","3123","3234","3345","3456","3567","3678","3789","4123","4234","4345","4456","4567","4678","4789","5123","5234","5345","5456","5567","5678","5789","6123","6234","6345","6456","6567","6678","6789","7123","7234","7345","7456","7567","7678","7789","8123","8234","8345","8456","8567","8678","8789","9123","9234","9356","9567","9678","9789","0987","0876","0765","0654","0543","0432","0321","9987","9876","9765","9654","9543","9432","9321","8987","8876","8765","8654","8543","8432","8321","7987"];

    const array_d = to_bind;
    var string_value_d = "";
    for (let index_arr_d = 0; index_arr_d < array_d.length; index_arr_d++) {
        for (let index_val_d = 0; index_val_d < arr_values_d.length; index_val_d++) {
            if(array_d[index_arr_d] == arr_values_d[index_val_d]){
                 string_value_d = string_value_d + arr_keys_d[index_val_d];
            }
        } 
     }

    return string_value_d;
}

function decrypt(value_from_d, count_d){
    var value_enc_d = value_from_d;
    const splitting_d = value_enc_d.match(/.{1,4}/g);
    var proc_d = repattern_process(splitting_d);

    if(count_d > 0){
        return decrypt(proc_d, count_d-1);
    }
    else if(count_d < 0){
        document.write(
            "<div style='color: red'>Error Occured!</div>"
            );
    }
    else if(count_d == 0){
        return proc_d;
    }
}