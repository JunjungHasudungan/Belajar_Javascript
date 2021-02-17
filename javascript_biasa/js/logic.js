        var a = 20;
        var b = 19;
        var c = 30;

        var benar = a > b;
        var salah = a < b;
        var benarJuga = a != b;

        // operator && (and)
        var hasil = benar && salah;
        document.write(`${a} && ${b} = ${hasil}<br/>`);
        
        // operator || (or)
                var hasil = benar || salah || benarJuga;
        document.write(`${a} || ${b}  || ${c} = ${hasil}<br/>`);
        
        // operator ! (not)
        var hasil = !benar;
        document.write(`${b} > ${a} = [ ${hasil} = !${benar}] <br/>`);