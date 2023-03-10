# dismiss a LoadingController before it present will create garbage in DOM

```
import { LoadingController } from '@ionic/angular'
const msg= 'Please wait...';
const loadingDialogPromise = this.loadingCtrl.create({
  message: msg,
});

// 1 present then dismiss
	 loadingDialog.present().then( 
   	()=> setTimeout(() => {
   		loadingDialog.dismiss().then( v =>console.log('loadingDialog.dismiss - ', v))
   	}, 0)) ; 

// 2 dismiss then clean DOM
loadingDialogPromise.then(loadingDialog => {
console.log('loadingDialog.dismiss - finally', msg)
loadingDialog.dismiss().then( v => {
	if(!v) {
		document.getElementById(loadingDialog.id).remove();
	}
});
```
