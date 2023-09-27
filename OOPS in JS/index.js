
//constructor function

// function BankAccount( customerName, balance=0){

//     this.customerName=customerName;

//     this.accountNumber=Date.now();

//     this.balance=balance;

//      this.deposit=function(amount){
//         this.balance+=amount
//      };

//      this.withdraw=(amount)=>{
//      this.balance-=amount;
//      };


// }


// // console.log(aayushAccount);

// // const aayushAccount=new BankAccount('aayush verma',1000);

// // const anishaAccount=new BankAccount('anisha verma',1000);
// // console.log(aayushAccount,anishaAccount);
// // //we can access properties too

// // console.log(aayushAccount.balance);
// // console.log(anishaAccount.customerName);

// // //we can change the default  value too
// // aayushAccount.customerName="mine";

// // aayushAccount.deposit(5000);
// // anishaAccount.deposit(2000);

// // aayushAccount.withdraw(2000);

// // console.log(anishaAccount);
// // console.log(aayushAccount);

// const accountform=document.querySelector("#accountform");

// const customerName=document.querySelector("Customer name");

// const balance=document.querySelector("#balance");

// accountform.addEventListener('submit',(e)=>{

//  e.preventDefault();

//  console.log(customerName.amount,balance.amount);

// });


//*******  lec 2 prototype*****


// function BankAccount( customerName, balance=0){

//     this.customerName=customerName;

//     this.accountNumber=Date.now();

//     this.balance=balance;

    //  this.deposit=function(amount){
    //     this.balance+=amount
    //  };

    // //  this.withdraw=(amount)=>{
    // //  this.balance-=amount;
    // //  };
    // }

    // // BankAccount.prototype.test='this is a test';

    // const rakeshAccount=new BankAccount('rakesh k');

    // BankAccount.prototype.deposit=function(amount) {
    //     this.balance+=amount;
    //  };
    // // console.log(BankAccount.prototype)
    // rakeshAccount.deposit(3000);
    // console.log(rakeshAccount)


    //****how to use classes***// 

    // class BankAccount{
    //     customerName;
    //     accountNumber;
    //     balance=0;

    //     constructor(customerName,balance=0){

    //         this.customerName=customerName;

    //         this.accountNumber=Date.now();

    //         this.balance=balance;

    //     }


    //     deposit(amount){
    //       this.balance+=amount;
//         }


//         withdraw(amount){
//          this.balance-=amount;
//         }
//     }
//     //class ka object aisa banta hai

//     const rakeshAccount=new BankAccount("rakesh k",3000);
//     rakeshAccount.deposit(3000)

// const johnAccount=new BankAccount("John Doe");
// johnAccount.deposit(500)
// johnAccount.withdraw(300);


//     console.log(rakeshAccount,johnAccount);

// ****lec inheritance***//

class BankAccount{
    customerName;
    accountNumber;
    balance=0;

    constructor(customerName,balance=0){

        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;

    }

    deposit(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBusinessLoan(amount){
        console.log('Taking business loan:'+amount);
    }
}

class SavingAccount extends BankAccount{
    transactionLimit=10000;

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    takePersonalLoan(amount){
        console.log('Taking personal loan:'+amount);
    }
}

//object creation

const rakeshAccount=new SavingAccount('Rakesh K',500);
rakeshAccount.deposit(500);
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);
rakeshAccount.takeBusinessLoan(780);
console.log(rakeshAccount);

