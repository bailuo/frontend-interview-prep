
const promise1 = new Promise((_resolve, _reject) => {});

// resolve
const promiseResolved = Promise.resolve('foo'); // Promise { 'foo' }
// ommit the first option in then
const promiseReject = Promise.reject('foo'); // Promise { <rejected> 'foo' }}
const pRej1 = promiseReject.then(null, (val) => {
    // val is 'foo'
    Error('val');
}) //  Promise { <pending> }

// finally
