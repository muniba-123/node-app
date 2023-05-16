// const repl = require('repl');
// const local = repl.start('prompt>');
// local.on('exit', () => {
//     console.log('exiting repl');
//     process.exit();
// });


// const ProgressBar = require('progress');

// const bar = new ProgressBar(':bar', { total: 10 });
// const timer = setInterval(() => {
//     bar.tick();
//     if (bar.complete) {
//         clearInterval(timer);
//     }
// }, 1000);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// });

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
];

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers.name}!`);
});