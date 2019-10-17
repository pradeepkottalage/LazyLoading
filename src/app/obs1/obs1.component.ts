import { Component, OnInit } from '@angular/core';
import { Observable, of, from, fromEvent, interval,timer, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, concatAll, take,  multicast, refCount } from 'rxjs/operators';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.less']
})
export class Obs1Component implements OnInit {
 myObservable:Observable<any>;
 list :any; 
  constructor(private todoServ:TodoService) { }

  ngOnInit() {
    // this.todoServ.todos.subscribe((d)=>{
   
    //  this.list = d;
    // });
   // this.testObj();
    //this.testObj2();
    //this.concatAll()
     // this.fromEvent();
   //  this.intervalTake();
    //this.ObservableTimer();
   // this.Subject1();
   //this.subjectAsObserver();
   //this.multiCasteOp();
  //this.behaviorsubject();
  //this.replaySub();
  }
  testObj(){
    this.myObservable = of(1, 2, 3).pipe(map(i=>{i*10}));  
    this.myObservable.subscribe((item)=>{console.log(item);})
   
  }
  testObj2(){
    
    let  source = from(['Ram', 'Tom', 'Hary'])
    source.subscribe((a)=>{ console.log(a) }); 
    
  }
  concatAll(){
    
    let  source = from(["prade","eep"]).pipe(concatAll());
       source.subscribe((a)=>{ console.log(a) }); 
    // let source = interval(1000).pipe(map((p)=>{ p*10}));
    // source.subscribe((i)=>{console.log(i);})
    }
    fromEvent(){
      let source = fromEvent(document, 'click');
      source.pipe(map( (i)=>interval(2000) )).subscribe(x=>{console.log(x);})
    }
    intervalTake(){
      let source$ = interval(1000).pipe(take(2));
      let res = source$.pipe(map(val=>{interval(1000).pipe(map(i=>{ `result val : ${val}  i: ${i} `}), take(5))}))
     // res.pipe(combineAll());
    }
    ObservableTimer(){
      let tim = timer(2000);
      tim.subscribe((t)=>{console.log(t);})
    }
    // subject
    Subject1(){
      let sub = new Subject();
      sub.subscribe((i)=>{ console.log(i);})
      sub.subscribe((i)=>{ console.log(i);})

      sub.next(Math.random())
      //sub.next(Math.random())
      setTimeout(() => {
        sub.next('World')
      }, 1000)

    }
subjectAsObserver(){
  let sub = new Subject();
  sub.subscribe((i)=>{console.log(`subjects subscription 1 :${i}`);})
  sub.subscribe((i)=>{console.log(`subjects subscription 2 :${i}`);})
  
  let obs = from([1,2,3]);
  obs.subscribe(sub);
//With the approach above, we essentially just converted a unicast Observable execution to multicast, through the Subject. 
}
  multiCasteOp(){
    let source = from([1, 2, 3]);
    let subject = new Subject();

    
    let multicasted = source.pipe(multicast(subject),refCount())
    
    multicasted.subscribe((i)=>{console.log("multicasted value 1 "+i);});
    setTimeout(() => {
      multicasted.subscribe((i)=>{console.log("multicasted value 2 "+i);});
    },1000)
    
  }
  behaviorsubject(){
   let sub = new BehaviorSubject(1);
   sub.subscribe((i)=>{ console.log("first Sub "+i);})
   sub.subscribe((i)=>{ console.log("second sub"+ i);})
  // sub.next(2);
  //  sub.subscribe((i)=>{ console.log(i);})
    sub.next(3)
    sub.subscribe((i)=>{ console.log("third Sub "+i);})
  }

  replaySub(){
    let sub = new ReplaySubject(3)
    sub.subscribe((i)=>{console.log("replay sub 1 "+i);})
    sub.next(1)
    sub.next(2)
    sub.next(3)
    sub.next(4)
    //sub.subscribe((i)=>{console.log("replay sub 2 "+i);})
    sub.next(5);
  }
  
}
