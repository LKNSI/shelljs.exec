# shelljs.exec

[![Build Status](https://travis-ci.org/danday74/shelljs.exec.svg?branch=master)](https://travis-ci.org/danday74/shelljs.exec)
[![Coverage Status](https://coveralls.io/repos/github/danday74/shelljs.exec/badge.svg?branch=master)](https://coveralls.io/github/danday74/shelljs.exec?branch=master)
[![dependencies Status](https://david-dm.org/danday74/shelljs.exec/status.svg)](https://david-dm.org/danday74/shelljs.exec)
[![npm](https://img.shields.io/npm/v/shelljs.exec.svg)](https://www.npmjs.com/package/shelljs.exec)
[![npm](https://img.shields.io/npm/dm/shelljs.exec.svg)](https://www.npmjs.com/package/shelljs.exec)
[![node](https://img.shields.io/node/v/shelljs.exec.svg)](https://www.npmjs.com/package/shelljs.exec)

**Replacement for shelljs' slow exec method - benchmarked 20x faster**



<br>

## Introduction

shelljs is **FAST** but its exec method is **SLOW**

- [x] Use this module instead of shelljs' exec method for speeds [20x faster](#benchmarks)

- [x] Use shelljs' other methods as they are lightning fast (e.g. shelljs.echo shelljs.which shelljs.cat)

This is a zero-dependency module



<br>

## Usage

This module takes 2 arguments, the command to execute and an [options object](#options-object)

On success:

```javascript 1.5
var exec = require('shelljs.exec')
var cmdObj = exec('echo hello', {silent: true})

expect(cmdObj).to.eql({
  error: null,
  stdout: 'hello\n',
  stderr: '',
  code: 0,
  ok: true
})
```

On failure:

```javascript 1.5
var exec = require('shelljs.exec')
var cmdObj = exec('blip blop', {silent: true})

expect(cmdObj.error).to.be.an('error')
expect(cmdObj.error.message).to.match(/not found|not recognized/)

expect(cmdObj.stdout).to.equal('')
expect(cmdObj.stderr).to.match(/not found|not recognized/)
expect(cmdObj.code).to.be.above(0)
expect(cmdObj.ok).to.be.false
```



<br>

## Options object

Available options:

* `silent`: Do not echo any output to console - Defaults to false

* and any option available to Node.js' [child_process.execSync](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)

When the `stdio` option of child_process.execSync is provided, it overrides `silent`



<br>

## Benchmarks

Benchmark test result logs are [HERE](https://travis-ci.org/danday74/shelljs.exec)

Generally speaking, on Linux shelljs.exec (this module) is 20 times faster and on Windows 5 times faster than shelljs' exec method.

However, shelljs supported commands, where available, are much faster than both. Use this module where a shelljs supported command is unavailable.

These tables compare average execution times based on 1000 test runs:

##### Linux (Travis CI) Node v6

![alt text](images/linux.png)

##### Windows (GIT bash) Node v6.10.0

![alt text](images/linux.png)



<br>

## Limitations

* Currently this module does not support chaining (shelljs does)

* Currently this module only supports synchronous execution, asynchronous callbacks are not available (shelljs claims full async support)



<br>

## Author says

But as the days of Noah were, so also will the coming of the Son of Man be. 38 For as in the days before the flood, they were eating and drinking, marrying and giving in marriage, until the day that Noah entered the ark, 39 and did not know until the flood came and took them all away, so also will the coming of the Son of Man be.

[Matthew 24:37-39](https://www.biblegateway.com/passage/?search=Matthew+24%3A37-39&version=NKJV)
