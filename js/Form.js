class Form{
    constructor(){
       this.input = createInput("");
       this.button = createButton('Play');
       this.button2 = createButton('Start');
       this.adult = createButton('Adult Ticket');
       this.child = createButton('Child Ticket');
       this.scan = createButton('Scan and Pay');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
     //  this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
       this.button2.hide();
        this.input.hide();
        this.title.hide();
    }

vanish(){
    this.title.hide();
    this.greeting.hide();
}

remove(){
    this.adult.hide();
    this.child.hide();
}

    display() {

        this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
        this.input.style('width', '300px');
        this.input.style('height', '40px');
        this.input.style('background', 'lightpink');
        this.input.style('font-size', '40px');
        this.button.position(displayWidth/2 - 200, displayHeight/2 +70);
        this.button.style('width', '400px');
        this.button.style('height', '40px');
        this.button.style('background', 'orange');

       // this.reset.position();
       // this.reset.style('width', '100px');
        //this.reset.style('height', '30px');
        //this.reset.style('background', 'lightpink');

        //opensound.play();

        this.button.mousePressed(() => {
            gameState = 1;
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            //playerCount += 1;
            //player.index = playerCount;
            //player.update();
            //player.updateCount(playerCount);

        });

        this.button2.mousePressed(() => {
            gameState = 2;
            this.button2.hide();
        });

        this.adult.mousePressed(() => {
            gameState = 3;
        });

        this.child.mousePressed(() => {
            gameState = 3;
        });

        this.scan.mousePressed(() => {
                    scan.visible = false;
        tick.visible = true;
        this.scan.hide();
        });
        /*this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        }); */

    }
}