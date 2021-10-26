// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;　//サイズは幅を8で割ったもの


  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
if((i + j) % 2 == 0){
fill(255);
}
else{
fill(128);
}
rect(size * i, size * j, size, size);


//丸い駒を書く
if((i + j) % 2 == 1 && j < 3){
  fill(255, 0, 0);
  noStroke();
ellipse(size * i + size / 2, size * j + size / 2, size * 0.8);
}
else if((i + j) % 2 == 1 && j > 4){
  fill(0);
  noStroke();
  ellipse(size * i + size / 2, size * j + size / 2, size * 0.8);
}
    }
  }
}


//中間ゴールは白黒のチェッカー(格子)をつくること。
//



//条件で分ける
