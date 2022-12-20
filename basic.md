# basic

## questions and answers

### questions part 1

- What is Angular?
- What are the advantages of Angular?
- What is AOT vs JIT Compilation?
- What is JIT Compilation?
- What is an Angular Component?
- What is an Angular Module?
- What is an Angular Service?
- What is an Angular Component Selector?
- What is an Angular Component Template?
- What is an Angular Component Style Property?

- Angular lifecycle hooks
  init
  oncheck
  onAfterContentInit
  onContentChecked
  afterViewInit
  afterViewChecked
  ondestory

- Angular data binding
  1 way 
  property banking
  [here]="myhere"
  2 way :

  ```
   {{myVar}}
  ```
  
  event 

- Angular pipes

```
 {{ myData | uppercase}}
```

- Angular Observables vs Promise

Observables : lazy, event 
Promise : ansyc + callback

- Angular directives
  
```
ng-if

ng-class
```

- ng template

``` HTML

<!--1-->
<div *ngIf="me; else loading"> this is me</div>

<!--2-->
<ng-template [ngIf]="me" [ngIfElse]="loading">
  <div> this is me</div>
</ng-template>

<ng-template #loading>
  <div>loading</div>
</ng-template>

<!--3-->
<div *ngIf="me"> this is me</div>
<div *ngIf="!me"> this is loading</div>


```

- ng container

``` HTML

<!-- cannot do this-->
<div *ngIf="me; else loading" *ngFor="" ></div>
<!-- do this , but 2 divs not good-->
<div ngIf="me; else loading" >
  <div *ngFor="" ></div>
</div>

<!-- do this , not  div - good-->
<ng-container *ngIf="me; else loading" >
  <ng-container *ngFor="let n of numbers" >{{n}}</ng-container>
</ng-container>

```

- ng content -- for child

``` HTML
<!-- COMP1 has-->
<ng-content>
</ng-content>


<!-- use COMP1-->
<COMP1> there is the child content</COMP1>

```

- ngTemplateOutlet - can use ng-template without other directive like ngIF

``` HTML
<ng-container *ngTemplateOutlet="loading" >
</ng-container>

<ng-template #loading>
  <div>loading</div>
</ng-template>


<ng-container *ngTemplateOutlet="me;context:{obj1}" >
</ng-container>

<ng-template #me let-obj1="obj1">
  <div>{{obj?.value}}</div>
</ng-template>
```


## interview questions

https://github.com/sudheerj/angular-interview-questions

- How do you update specific properties of a form model?
- What are the different ways to group form controls?
- 