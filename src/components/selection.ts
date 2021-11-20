import { bindable } from 'aurelia-framework'
import { EventAggregator, Subscription} from 'aurelia-event-aggregator';
import { LangState } from 'status/lang-state';
import { inject } from 'aurelia-dependency-injection';


@inject(EventAggregator)
export class Selection{
    @bindable option;
    constructor(
        public eventAggregator: EventAggregator,
    ){
        
    }

    onChange(e){
        this.eventAggregator.publish(LangState.subscribeId ,e.target.value)
    }

    sayHi(e){
        console.log(e)
    }
}