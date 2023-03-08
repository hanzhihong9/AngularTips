# Tips

## DEV

### Component

- 100 lines or less
- single responsibility
- have one - only one - reason to change

### testing

 - not have to use TestBed
 - test the class, without DOM involvement, leave the css/template test to e2e test
 - Do tests

```JS
decribe('testsuite1'

)

```

### Unsubscribe

- always unsubscribe subscriptions
- use SubSink

```JS
class myComp implements OnDestory {
 private subs = new SubSinks
 sub.sink(myObservable.subscribe())
 // or 
 sub.add(myObservable.subscribe())

 nfOnDestory() {
   this.sub.unsubscribe()
 }

}


```

### Public and Private

- function : private , not used in template

### use Angular Forms

- tempalate

```
```

- interactive

### use Classes/Enums

```JS  
class A Class {
public readonly _id:string
constructor() {
  this._id = '123';
}

}

enum MyE {
  value = 'value'
  story = 'story'
}

```

### RxJS

```JS

```

### lazy loading

- load ngModule as needed
```
```

### Transclusion

```HTML
<ng-content>
```

### NgRx

- contralize data
- ngrx-data
  
## tool for faster Angular

### use module map to find out the big module and try to use a samller one
### use DEV tool memory to check how many instances of a component

### issues

- network slow -- smaller js
- dead code clean

- Differential loading

``` HTML
<script type="module" scr="es-2015.js"></script>
<script nomodule scr="es5.js"></script>
```

- code splitting (lazy loading)
- Component (ngloadable/"<lazy-af>")
- Route
- Pre-feteching - visible link/predictive/mouse-over
- configure size budgets
- CDN
- compression
  
```JS
// to do Pre-feteching, use :
// ngx-quicklink
// guess.js
```

## use view addd child but use renderer if needed
 
### Not Angular has a view layer in momery !
```ts
 onst iframe = this.renderer.createElement('iframe') as HTMLIFrameElement;
      iframe.name = this.uniqueName; // use renderer, because iframe name should be added before inserting it into DOM , otherwise window.name is '' in the iframe window
      iframe.style.minHeight = this.iHeight;
      iframe.src = unwrapSafeValue(srcUrlSafe);
      iframe.width = "100%";
      iframe.scrolling = "no";
      iframe.frameBorder = "0"
      this.renderer.appendChild(this.iframeParent.nativeElement, iframe);

// and to get the iframe 
 iframElement = this.childElement.nativeElement.getElementsByTagName('iframe')[0];
```
