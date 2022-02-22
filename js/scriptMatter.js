// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Vertices = Matter.Vertices,
    Bodies = Matter.Bodies;

// provide concave decomposition support library
//Common.setDecomp(require('poly-decomp'));
//window.decomp = require('poly-decomp');


// create engine
var engine = Engine.create(),
    world = engine.world;

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: document.getElementById("canvas").width,
        height: document.getElementById("canvas").height/2,
        wireframes: true,
        background: '#111',
        pixelRatio: 5,
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 50, 50, {
    render: {
        fillStyle: '#0000ff',
        strokeStyle: '#222',
        lineWidth: 5,
        sprite: {
            texture: '../img/a.png'
        }
    },

});
var boxB = Bodies.rectangle(450, 50, 50, 50, {
    render: {
        fillStyle: '#222',
        strokeStyle: '#0000ff',
        lineWidth: 5,
        sprite: {
            texture: '../img/b.png'
        }
    }

});

var ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 200, 810, 30, {
    render: {
        fillStyle: '#222'
    },
    isStatic: true

});

var pilha = Composites.stack(window.innerWidth / 2.75, -200, 25, 25, 0, 0, function (x, y) {
    if (Common.random() > 0.6) {
        return Bodies.circle(x, y, 10, {
            density: 0.002,
            frictionAir: 0.1,
            restitution: 0.6,
            friction: 0.01,
            render: {
                sprite: {
                    texture: '../img/a.png',
                    yScale: 0.5,
                    xScale: 0.5
                }
            }
        });
    } else {
        return Bodies.circle(x, y, 10, {
            density: 0.0005,
            frictionAir: 0.06,
            restitution: 0.3,
            friction: 0.01,
            render: {
                sprite: {
                    texture: '../img/b.png',
                    yScale: 0.5,
                    xScale: 0.5
                }
            }
        });
    }
});

// add all of the bodies to the world
//Composite.add(engine.world, [boxA, boxB, ground]);
Composite.add(engine.world, [pilha, ground]);

mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);


// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;
