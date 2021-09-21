class Custom {

    constructor(scope,module){
        this.scope = scope;
        this.module = module;
    }

    call(){
        this.scope='altered'
        console.log("this os",this.scope);
    }
}


class Child extends Custom {
    constructor(scope,module){
        super(scope, module)
    }


}

console.log(new Child('sc','md').scope)