
const crypto = require('crypto'); 

class DHParameters {
  static p; // prime number
  static g; // generator
  static a; // private key for Alice
  static b; // private key for bob
  static A; // public key generated
  static B; // public key generated

  static getPrimeAndGenerator() {

            // Utility function to check if a BigInt is prime  
        function isPrime(num) {
          for (let i = 2n; i < num; i++) {
            if (num % i === 0n) return false;
          }
          return true;
        }

        // Generate a random prime BigInt
        let prime; 
        do {
          const randBytes = crypto.randomBytes(32);
          let rand = BigInt('0x' + randBytes.toString('hex'));
          prime = rand % 10000000000000000n;
        } while (!isPrime(prime))

    const rand1 = prime;
    const rand2 = crypto.randomBytes(32);

    this.p = rand1;
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
  DHParameters.getPrimeAndGenerator();
  DHParameters.getExponent();
  DHParameters.pow();

  const Sa = BigInt(DHParameters.B) ** BigInt(DHParameters.a) % DHParameters.p;
  const Sb = BigInt(DHParameters.A) ** BigInt(DHParameters.b) % DHParameters.p;

  console.log(`${DHParameters.A}`);
  console.log(`${DHParameters.B}`);

  if( Sa === Sb){
     console.log('The shared keys are the same');
  }
  console.log(`${Sa} === ${Sb}`);
}

// 
Execute();


