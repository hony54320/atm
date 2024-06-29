import inquirer from "inquirer";
async function ATM() {
    let atmPin = 1234;
    let currentBalance = 25000;
    console.log("--------------");
    console.log("Welcome to ATM");
    console.log("--------------");
    let { value } = await inquirer.prompt([{
            name: 'value',
            message: 'Enter 4 Digit Atm Pin',
            type: 'number',
        }]);
    if (value === atmPin) {
        let { value0 } = await inquirer.prompt([{
                name: 'value0',
                message: 'Press C for Current Account\n ? Press S for Saving Account',
                type: 'string',
            }]);
        if (value0 == 'c' || value0 == 'C') {
            currentAccount();
        }
        else {
            savingAccount();
        }
        async function currentAccount() {
            let { value1 } = await inquirer.prompt([{
                    name: 'value1',
                    message: 'For Checking Balance press C\n ? For Amount Withdraw press W',
                    type: 'string',
                }]);
            if (value1 == 'C' || value1 == 'c') {
                console.log('Current Balance is ' + currentBalance);
            }
            else if (value1 == 'W' || value1 == 'w') {
                let { value4 } = await inquirer.prompt([{
                        name: 'value4',
                        message: 'Enter amount to withdraw',
                        type: 'string',
                    }]);
                if (value4 <= 0) {
                    console.log("Invalid Input");
                }
                else if (value4 > currentBalance) {
                    console.log("You don't have enough money");
                }
                else {
                    console.log("Are you sure you want to continue?");
                    let { value5 } = await inquirer.prompt([{
                            name: 'value5',
                            message: 'Y or N',
                            type: 'string',
                        }]);
                    if (value5 == 'Y' || value5 == 'y') {
                        console.log("Amount Withdraw Successfully");
                        console.log('Balance after withdraw is ' + (currentBalance - value4));
                    }
                    else {
                        console.log("Transcation Cancelled");
                    }
                }
            }
            anotherTransaction();
        }
        async function savingAccount() {
            let { value1 } = await inquirer.prompt([{
                    name: 'value1',
                    message: 'For Checking Balance press C\n ? For Amount Withdraw press W',
                    type: 'string',
                }]);
            if (value1 == 'C' || value1 == 'c') {
                console.log('Current Balance is ' + currentBalance);
            }
            else if (value1 == 'W' || value1 == 'w') {
                let { value4 } = await inquirer.prompt([{
                        name: 'value4',
                        message: 'Enter amount to withdraw',
                        type: 'string',
                    }]);
                if (value4 <= 0) {
                    console.log("Invalid Input");
                }
                else if (value4 > currentBalance) {
                    console.log("You don't have enough money");
                }
                else {
                    console.log("Are you sure you want to continue?");
                    let { value5 } = await inquirer.prompt([{
                            name: 'value5',
                            message: 'Y or N',
                            type: 'string',
                        }]);
                    if (value5 == 'Y' || value5 == 'y') {
                        console.log("Amount Withdraw Successfully");
                        console.log('Balance after withdraw is ' + (currentBalance - value4));
                    }
                    else {
                        console.log("Transcation Cancelled");
                    }
                }
            }
            anotherTransaction();
        }
        async function anotherTransaction() {
            console.log('Do you want another transaction?');
            let { value6 } = await inquirer.prompt([{
                    name: 'value6',
                    message: 'Press Y for Yes & N for No',
                    type: 'string',
                }]);
            if (value6 == 'Y' || value6 == 'y') {
                currentAccount();
            }
        }
    }
    else {
        console.log("Invalid Pin");
    }
}
ATM();
