function encrypt(value_from, location){
    var value_enc = document.getElementById(value_from).value;
    var value_loc = location;

    const splitting = value_enc.split("");
    var proc = pattern_process(splitting);
    document.getElementById(location).innerHTML = proc;

    //return(proc);
}

function pattern_process(to_split){
    const arr_keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","1","2","3","4","5","6","7","8","9","0"];
    const arr_values = ["0123","0234","0345","0456","0567","0678","0789","1890","1123","1234","1345","1456","1567","1678","1789","2123","2234","2345","2456","2567","2678","2789","3123","3234","3345","3456","3567","3678","3789","4123","4234","4345","4456","4567","4678","4789","5123","5234","5345","5456","5567","5678","5789","6123","6234","6345","6456","6567","6678","6789","7123","7234","7345","7456","7567","7678","7789","8123","8234","8345","8456","8567","8678"];

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
    const arr_keys_d = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","1","2","3","4","5","6","7","8","9","0"];
    const arr_values_d = ["0123","0234","0345","0456","0567","0678","0789","1890","1123","1234","1345","1456","1567","1678","1789","2123","2234","2345","2456","2567","2678","2789","3123","3234","3345","3456","3567","3678","3789","4123","4234","4345","4456","4567","4678","4789","5123","5234","5345","5456","5567","5678","5789","6123","6234","6345","6456","6567","6678","6789","7123","7234","7345","7456","7567","7678","7789","8123","8234","8345","8456","8567","8678"];

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

function decrypt(value_from_d, location_d){
    var value_enc_d = document.getElementById(value_from_d).value;
    var value_loc_d = location_d;

    const splitting_d = value_enc_d.match(/.{1,4}/g);
    var proc_d = repattern_process(splitting_d);
    document.getElementById(location_d).innerHTML = proc_d;

    //return(proc);
}