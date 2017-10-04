#! /usr/bin/env node
const sys = require('sys')
const exec = require('child_process').exec
const respond = (error, stdout, stderr) => {
  if (error) console.log('error: ', error)
  if (stderr) console.log('stderr: ', stderr)
  console.log(stdout)
}
exec("npm i -S node-sass", respond)

// const program = require('commander')
// let p = program

// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// const prompt = question => {
//   return new Promise(resolve => {
//     rl.question(question, response => {
//       resolve(response)
//     })
//   })
// }

// const repeat = async argument => {
//   console.log('your argument was: ', argument)
//   const input = await prompt('What is your quest?')
//   console.log('your quest was: ', input)
//   rl.close()
// }

// program
//   .arguments('<argument>')
//   .option('-p, --password <password>', 'The user\'s password')
//   .action((argument) => {
//     repeat(argument)
//   })
//   .parse(process.argv)
