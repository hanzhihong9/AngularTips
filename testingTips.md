# test cheatsheet

## test obejct

 - test a object is a Promise
 ```
  expect( typeof aPromise.then).toEqual('function') // is a promise
 
 ```
 
 - test within a Promise (https://codecraft.tv/courses/angular/unit-testing/asynchronous/)
 
 ```
 it('test then of Promise via jasmine.done', (done) => { 
  
  expect(el.nativeElement.textContent.trim()).toBe('Login');
   const aPromise = service.getPromise();
   expect( typeof aPromise.then).toEqual('function') // is a promise
   let thenVal = '1';
   aPromise
   .then( val => {
      expect( val.length).toEqual(4) // aPromise is resolved
     
    })
   .catch( err => {
     thenVal = 'catch';
      done()
   })
   .finally( ()=> {
     thenVal = 'finally'; // test it if needed
   })
   aPromise.resolve([1,2,3,4]); // test then
   aPromise.reject('error');

});
 ```
