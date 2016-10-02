var mapSize = 11;
var tileSize = 50;
var matrix = [
  [{type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 0}, {type: 0}, {type: 1}, {type: 0}, {type: 0}, {type: 0}, {type: 1}, {type: 0}, {type: 0}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}, {type: 0}, {type: 1}],
  [{type: 0}, {type: 0}, {type: 1}, {type: 0}, {type: 0}, {type: 0}, {type: 1}, {type: 0}, {type: 0}, {type: 0}, {type: 1}],
  [{type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}, {type: 1}]
];
var map = createGrid(mapSize, tileSize, matrix);

var app = new PLAYGROUND.Application({
  width: mapSize * tileSize,
  height: mapSize * tileSize,
  smoothing: false,
  create: create,
  render: render,
  mousemove: mousemove,
  mousedown: mousedown,
  mouseup: mouseup,
  step: step,
  keydown: keydown
});

function mouseup(data) {
  map.forEach(function(tiles) {
    tiles.forEach(function(tile) {
      tile.invalidMouseDown = false;
    });
  });
}

function keydown() {
  if(this.keyboard.keys.enter) {
    for(var i = 0; i < this.monsters.length; i++) {
      this.tween(this.monsters[i])
        .delay(i + 0.5)
        .to({x: map[9][1].x + 15, y: map[9][1].y + 15},2)
        .to({x: map[8][1].x + 15, y: map[8][1].y + 15},2)
        .to({x: map[7][1].x + 15, y: map[7][1].y + 15},2)
        .to({x: map[6][1].x + 15, y: map[6][1].y + 15},2)
        .to({x: map[5][1].x + 15, y: map[5][1].y + 15},2)
        .to({x: map[4][1].x + 15, y: map[4][1].y + 15},2)
        .to({x: map[3][1].x + 15, y: map[3][1].y + 15},2)
        .to({x: map[2][1].x + 15, y: map[2][1].y + 15},2)
        .to({x: map[1][1].x + 15, y: map[1][1].y + 15},2)
        .to({x: map[1][2].x + 15, y: map[1][2].y + 15},2)
        .to({x: map[1][3].x + 15, y: map[1][3].y + 15},2)
        .to({x: map[2][3].x + 15, y: map[2][3].y + 15},2)
        .to({x: map[3][3].x + 15, y: map[3][3].y + 15},2)
        .to({x: map[4][3].x + 15, y: map[5][3].y + 15},2)
        .to({x: map[5][3].x + 15, y: map[6][3].y + 15},2)
        .to({x: map[6][3].x + 15, y: map[6][3].y + 15},2)
        .to({x: map[7][3].x + 15, y: map[7][3].y + 15},2)
        .to({x: map[8][3].x + 15, y: map[8][3].y + 15},2)
        .to({x: map[9][3].x + 15, y: map[9][3].y + 15},2)
        .to({x: map[9][4].x + 15, y: map[9][4].y + 15},2)
        .to({x: map[9][5].x + 15, y: map[9][5].y + 15},2)
        .to({x: map[8][5].x + 15, y: map[8][5].y + 15},2)
    }
  }
}

function mousedown(data) {

  for(var i = 0; i < map.length; i++) {
    for(var j = 0; j < map[i].length; j++) {
      var tile = map[i][j];
      if(
        data.x > tile.x &&
        data.x < tile.x + tile.d &&
        data.y > tile.y &&
        data.y < tile.y + tile.d
      ) {
        if(tile.type === 1) {
          tile.tower = true;
        } else {
          tile.invalidMouseDown = true;
        }

      } else {
        tile.invalidMouseDown = false;
      }
    }
  }
}

function mousemove(data) {
  for(var i = 0; i < map.length; i++) {
    for(var j = 0; j < map[i].length; j++) {
      var tile = map[i][j];
      if(
        data.x > tile.x &&
        data.x < tile.x + tile.d &&
        data.y > tile.y &&
        data.y < tile.y + tile.d
      ) {
        tile.hover = true;
      } else {
        if(tile.invalidMouseDown) tile.invalidMouseDown = false;
        tile.hover = false;
      }
    }
  }
}

function create() {

  this.loadImage('tile-grass.jpg');
  this.loadImage('tower');
  this.loadImage('tile-rock');
  this.loadAtlases('monsterAtlas');
  this.monsters = [];
  for(var i = 0; i < 10; i++) {
    this.monsters.push({
      x: map[9][0].x + 15,
      y: map[9][0].y + 15,
      d: 20,
      life: 18
    });
  }
}

function step(dt) {
  for(var i = 0; i < map.length; i++) {
    for(var j = 0; j < map[i].length; j++) {
      this.monsters.forEach(function(monster, k) {
        if(map[i+1] && map[i-1] && map[i][j-1] && map[i][j+1])
        if(
          monster.x > map[i+1][j-1].x &&
          monster.x < map[i+1][j+1].x + map[i+1][j+1].d &&
          monster.y > map[i-1][j-1].y &&
          monster.y < map[i+1][j+1].y + map[i+1][j+1].d && map[i][j].tower === true
        ) {
          if(monster.life >= 0) {
            monster.life -= 3 * dt;
          }
        }
      });

    }
  }
}

function render() {

  var game = this;
  var monster = this.monster;

  this.layer.clear('black');

  map
    .forEach(function(tiles) {
      tiles.forEach(function(tile) {
        game.layer
          .fillStyle('green')
          .fillRect(tile.x, tile.y, tile.d, tile.d)
          .drawImage(game.images['tile-grass'], tile.x, tile.y, tile.d, tile.d)
          .strokeStyle('white');
        if(tile.type === 1) {
          game.layer.drawImage(game.images['tile-rock'], tile.x, tile.y, tile.d, tile.d)
        }
        if(tile.hover) {
          game.layer
            .fillStyle('rgba(0,255,0,0.5)')
            .fillRect(tile.x, tile.y, tile.d, tile.d);
        }
        if(tile.tower) {
          game.layer
            .drawImage(game.images['tower'], tile.x, tile.y, tile.d, tile.d)
            // .fillStyle('rgba(0,0,255,0.5)')
            // .fillRect(tile.x, tile.y, tile.d, tile.d);
        }
        if(tile.invalidMouseDown) {
          game.layer
            .fillStyle('rgba(255,0,0,0.5)')
            .fillRect(tile.x, tile.y, tile.d, tile.d);
        }
        // .strokeRect(tile.x, tile.y, tile.d, tile.d);

      });
    });
    var atlas = this.atlases.monsterAtlas;
    var current = (this.lifetime % 2 / 2) * atlas.frames.length | 0;
    for(var j = 0; j < this.atlases.monsterAtlas.frames.length; j++) {
      this.atlases.monsterAtlas.frames[j].offset = [-2, 0];
    }
    for(var i = 0; i < this.monsters.length; i++) {
      if(this.monsters[i].life) {
        game.layer
          .drawAtlasFrame(atlas, current, this.monsters[i].x, this.monsters[i].y);
        game.layer
          .fillStyle('white')
          .fillRect(this.monsters[i].x, this.monsters[i].y + this.monsters[i].d + 5, this.monsters[i].d, 4)
          .fillStyle('springgreen')
          .fillRect(this.monsters[i].x + 1, this.monsters[i].y + this.monsters[i].d + 6, this.monsters[i].life , 2)
      }

        // .drawImage(game.images['slime'], this.monsters[i].x, this.monsters[i].y, this.monsters[i].d, this.monsters[i].d)
    }


}

function createGrid(mapSize, tileSize, matrix) {
  var map = matrix || [];
  if(map.length) {
    for(var i = 0; i < map.length; i++) {
      for(var j = 0; j < map[i].length; j++) {
        var tile = map[i][j];
        tile.x = tileSize * j,
        tile.y = tileSize * i,
        tile.d = tileSize,
        tile.hover = false,
        tile.tower = false,
        tile.invalidMouseDown = false
      }
    }
  } else {
    for(var i = 0; i < mapSize; i++) {
      map.push([]);
      for(var j = 0; j < mapSize; j++) {
        map[i].push({
          x: tileSize * j,
          y: tileSize * i,
          d: tileSize,
          hover: false,
          type: Math.floor((Math.random() * 2) + 1),
          tower: false
        })
      }
    }
  }
  return map;
}
