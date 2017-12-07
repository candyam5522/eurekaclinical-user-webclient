export class AppProperties {

    private _userWebappUrl:string; 
    
    private _ephiProhibited:boolean;
    
    private _demoMode:boolean;

    private _registryServiceUrl:string;  
    
    private _localAccountRegistrationEnabled:boolean;  
            
    constructor() {}
    
    get userWebappUrl():string {
        return this._userWebappUrl;
    }
    
    set userWebappUrl( value:string ) {
        this._userWebappUrl = value;
    }    
    
    get ephiProhibited():boolean {
        return this._ephiProhibited;
    }

    set ephiProhibited( value: boolean ) {
        this._ephiProhibited = value;
    }
    
    get demoMode():boolean {
        return this._demoMode;
    }

    set demoMode( value: boolean ) {
        this._demoMode = value;
    }
            
    get registryServiceUrl():string {
        return this._registryServiceUrl;
    }
    
    set registryServiceUrl( value:string ) {
        this._registryServiceUrl = value;
    }
                          
    get localAccountRegistrationEnabled():boolean {
        return this._localAccountRegistrationEnabled;
    }
    
    set localAccountRegistrationEnabled( value:boolean ) {
        this._localAccountRegistrationEnabled = value;
    }
     
    toJSON() {
        
        let json = {};
        
        json["userWebappUrl"] = this._userWebappUrl;
        
        return json;
        
    }

}



