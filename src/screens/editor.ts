import * as monaco from 'monaco-editor'
import { bindable } from 'aurelia-framework'
import { inject } from 'aurelia-dependency-injection';
import monacoConfig from '../../config/monacoConfig.json'
import { EventAggregator, Subscription} from 'aurelia-event-aggregator';
import { LangState } from 'status/lang-state';

// class IEdiatorOption 

@inject(EventAggregator)
export class Editor {
    @bindable editorEle;
    public monacoOption: monaco.editor.IStandaloneEditorConstructionOptions = monacoConfig;
    public langOption: string[] = ['javascript', 'c#', 'c++', 'sql'];
    constructor(
        public eventAggregator: EventAggregator,
        public subscription: Subscription
    ){

    }

    attached() {
        let codeEditor = monaco.editor.create(this.editorEle, this.monacoOption)
        // 第三个参数  override  对象的形式 进行重写  怎么调 重写的方法？ 
        // codeEditor.sayHi();
        this.subscription = this.eventAggregator.subscribe(LangState.subscribeId,(res)=>{
            
            // codeEditor.setModelLanguage()
        })
    }

    // setModelLanguage(){
        
    // }

    detached() {
        this.subscription.dispose();
    }
}