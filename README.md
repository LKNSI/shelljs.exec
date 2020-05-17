# shelljs.exec

Async fork of shelljs.exec 

Changes:

```javascript
const shelljsExec = async (command, options) => {

...

stdout = cp.exec(command, options);

...

}



```
Why:

I run a React.js instance provisioning framework using handlebars. Sync is just too slow for blocking the event loop with yarn installing 90+ packages, then having to build react for the first time, write systemd files, then launch.

Enjoy :)


Fork of https://github.com/danday74/shelljs.exec
