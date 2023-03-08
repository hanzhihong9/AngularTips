# Angular + Rxjs

## abserable 
 - hot vs cold
 - finite vs infinite

## RXJS functions

- of , from

```Javascript
const person:Person= {
  name: 'dave'
}
const o:Observable<t> = of(123)
o.subscribe( data => console.log(data) )

const personPromise = Promise.resove(person);
const o2:Observable<t> = from(personPromise) // cannot use of
o2.subscribe( data => console.log(data) )

const o3:Observable<t> = of('dave')
o3.pipe(
  tap( data:string => data.toUppercase() ) // tap does not change data,  it if you do not want to change it 
  map( data:string => data.toUppercase())
).subscribe( data => console.log(data) )


// share - make request not emit multiple times

request().pipe(share())


```
- map tap
- share
- switchMap
- debounceTime
- DistictUntilChanged

```
// compare object
distinctUntilChanged((a, b) => JSON.stringify(a).split('').sort().join('') === JSON.stringify(b).split('').sort().join('')),

```

- Take TakeUitil TakeWhile TakeLaset Fist
- mergemap/flatmap
- concate
- fornkjoin -- like Promise.all
