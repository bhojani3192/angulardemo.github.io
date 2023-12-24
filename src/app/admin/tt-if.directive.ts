import { Directive,  Input,  ViewContainerRef , TemplateRef } from '@angular/core'

@Directive({
    selector :  '[ttIf]'
})

export class ttIfDirective {

    _ttif : boolean = true;

    constructor(private _ViewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>){
        }

        @Input()
            set ttIf (condition:any){
                this._ttif = condition
                this._updateview();
            }
        
    
            _updateview(){
                if(this._ttif){
                    this._ViewContainer.createEmbeddedView(this.templateRef);
                }
                else{
                    this._ViewContainer.clear();
                }
            }
    
}