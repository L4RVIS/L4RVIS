/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

tsParticles.load("tsparticles",
  
  {
  "background": {
    "color": {
      "value": "#eeeeee"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "backgroundMask": {
    "cover": {
      "color": {
        "value": "#0032eb"
      }
    }
  },
  "fullScreen": {
    "zIndex": -1
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "repulse",
        "parallax": {
          "enable": true,
          "force": 60
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "connect": {
        "distance": 120,
        "links": {
          "opacity": 0.8
        }
      },
      "grab": {
        "distance": 400
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#0032eb"
            }
          }
        },
        "shadow": {
          "length": 100
        }
      },
      "repulse": {
        "maxSpeed": 30
      }
    }
  },
  "particles": {
    "color": {
      "value": "#0032eb"
    },
    "links": {
      "color": {
        "value": "#0032eb"
      },
      "distance": 150,
      "enable": true,
      "opacity": 0.9
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "spin": {}
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 70
    },
    "opacity": {
      "random": {
        "minimumValue": 0.7
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.1
      }
    },
    "shape": {
      "options": {
        "character": {
          "value": [
            "t",
            "h",
            "i",
            "r",
            "t",
            "e",
            "e",
            "n",
            "w",
            "a",
            "y"
          ],
          "font": "Montserrat",
          "style": "",
          "weight": "500",
          "fill": true
        },
        "char": {
          "value": [
            "t",
            "h",
            "i",
            "r",
            "t",
            "e",
            "e",
            "n",
            "w",
            "a",
            "y"
          ],
          "font": "Montserrat",
          "style": "",
          "weight": "500",
          "fill": true
        }
      },
      "type": "char"
    },
    "size": {
      "value": 16,
      "animation": {
        "speed": 10,
        "minimumValue": 10
      }
    },
    "stroke": {
      "width": 1,
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "sync": true
          }
        }
      }
    }
  }
}
);