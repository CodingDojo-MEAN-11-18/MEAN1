const color = require('colors');

/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body, etc), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 params
*                 protocol
*                 route
*                 path
*                 query
*/

module.exports = function (request, response, next) {
  // if (request.method) {
  //   console.log(request.method)
  // }

  // console.log(request.hostname)

  const keys = ['method', 'hostname', 'ip', 'body', 'params', 'path', 'protocol', 'route', 'query'];

  keys.forEach(key => {
    const data = request[key];

    if (data) {
      // console.log('this is the key', key, data);

      if (typeof data === 'object') {
        if (Object.keys(data).length) {
          console.log(color.blue(`The request ${key} object has the following properties:`));
          // [[ 'name', 'Bob' ], [ 'age', '2345' ]]
          // const [k, v] = [ 'name', 'Bob' ]
          for (const [k, v] of Object.entries(data)) {
            // const k = prop[0];
            // const v = prop[1];
            console.log(color.yellow(`\t${k} => ${v}`))
            // console.log('entries', k, v);
          }
        }
      } else {
        console.log(color.red(`The request ${key} is ${data}`));
      }

    }
  })
  next();
};
