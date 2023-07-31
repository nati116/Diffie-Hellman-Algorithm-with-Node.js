const crypto = require('crypto');
    const p = 23;
    const g = 9;

    // alice and bob private keys
    const a = crypto.randomBytes(32).readUIntBE(0,32);
    const b = crypto.randomBytes(32).readUIntBE(0,32);

    // alice public key
    var x = g ** a % p;

    // bob public key generated

    var y = g ** b % p;
  
   // shared secret key

    const ka = y**a % p;
    const kb = x**b % p;



   if (ka === kb ){
        console.log('your shared secrete keys match perfectly');
   }



