var shell = require('shelljs')
var shello = require('./index')

console.log('********** shelljs **********')
console.time('shelljs')
var objShell = shell.exec('echo shelljs is slow', {silent: true})
console.log(objShell.stdout)
console.timeEnd('shelljs')
console.log('*****************************')
console.log()
console.log('********** shell-o **********')
console.time('shell-o')
var objShello = shello('echo shell-o is fast')
console.log(objShello.out.toString())
console.timeEnd('shell-o')
console.log('*****************************')