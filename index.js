'use strict'

var cp = require('child_process')
var normaliseOptions = require('./js/normaliseOptions')


// Now Async :) Tested 17/05/2020

const shelljsExec = async (command, options) => {

  options = normaliseOptions(options)

  var error, stdout, stderr, code, ok, pid

  try {
    error = null
    stdout = cp.exec(command, options)
    stderr = ''
    code = 0
    ok = true
  } catch (e) {
    error = e
    stdout = e.stdout
    stderr = e.stderr
    code = e.status || /* istanbul ignore next */ 1
    ok = false
  }

  return {
    error: error,
    stdout: stdout,
    pid: stdout.pid,
    stderr: stderr,
    code: code,
    ok: ok
  }
}

module.exports = shelljsExec
