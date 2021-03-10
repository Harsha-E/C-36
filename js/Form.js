class Form{

    constructor (){

    }

    display(){
    var title = createElement('h2', " Car Racing ");
    title.position(130,10);
    var input = createInput("Name");
    input.position(130, 160);
    input.size(50, 25);
    var Button = createButton("Button");
    Button.position(250,200);
    Button.size(50, 25);
    Button.mousePressed( function(){
    input.hide();
    Button.hide();
    var name = input.value();
    playerCount+=1;
    player.update(name);
    player.updateCount(playerCount);
    var greeting = createElement('h3', "Hello " + name);
    greeting.position(130, 160);

    } );

    }

}