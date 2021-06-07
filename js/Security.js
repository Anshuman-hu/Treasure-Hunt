class Security {

    constructor(){

        // Add code to create the input and button elements
        this.acess1 = createInput("Code1");
        this.acess1.position(100,90);
        
        this.button1 = createButton(`Check`);
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');
        
        this.acess3 = createInput("Code3");
        this.acess3.position(100,290);
        
        this.button3 = createButton(`Check`);
        this.button3.position(100,320);
        this.button3.style('background', 'lightgrey');

        this.acess2 = createInput("Code2");
        this.acess2.position(700,190);
        
        this.button2 = createButton(`Check`);
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');

        
    }

    display(){

        // Add code to make the buttons function as expected

        this.button1.mousePressed(()=>{
            if (system.authenticate(acessCode1,this.acess1.value())) {
                this.button1.hide();
                this.acess1.hide();
                score++
            }
        });
        this.button2.mousePressed(()=>{
            if (system.authenticate(acessCode2,this.acess2.value())) {
                this.button2.hide();
                this.acess2.hide();
                score++

            }
        });
        this.button3.mousePressed(()=>{
            if (system.authenticate(acessCode3,this.acess3.value())) {
                this.button3.hide();
                this.acess3.hide();
                score++

            }
        });
        }
}