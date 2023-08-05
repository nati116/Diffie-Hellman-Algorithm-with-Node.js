
const crypto = require('crypto'); 

class DHGenParameterSpec {
  static p;
  static g;
  static a;
  static b;
  static A;
  static B;

  static getPrimeP_G() {
    const rand1 = crypto.randomBytes(32);
    const rand2 = crypto.randomBytes(32);

    this.p = BigInt('0x' + rand1.toString('hex'));
    this.g = BigInt('0x' + rand2.toString('hex'));

    console.log(`${this.p},${this.g}`);
  }

  static getExponent() {
    this.a = crypto.randomInt(1000);
    this.b = crypto.randomInt(1000);

    console.log(`${this.a}__${this.b}`);
  }

  static pow() {
    this.A = BigInt(this.g) ** BigInt(this.a) % this.p; 
    this.B = BigInt(this.g) ** BigInt(this.b) % this.p;
  }
}

Execute = () => {
  DHGenParameterSpec.getPrimeP_G();
  DHGenParameterSpec.getExponent();
  DHGenParameterSpec.pow();

  const Sa = BigInt(DHGenParameterSpec.B) ** BigInt(DHGenParameterSpec.a) % DHGenParameterSpec.p;
  const Sb = BigInt(DHGenParameterSpec.A) ** BigInt(DHGenParameterSpec.b) % DHGenParameterSpec.p;

  console.log(`${DHGenParameterSpec.A}__${DHGenParameterSpec.B}`);
  if( Sa === Sb){
     console.log('the shared keys are the same');
  }
  console.log(`${Sa}__${Sb}`);
}

Execute();


