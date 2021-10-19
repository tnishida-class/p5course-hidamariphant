// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200)
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);//輪郭線カクカクに
  stroke(22, 131, 46)//色塗り・緑
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // 提出が遅れてしまい、すみません。
  //前回からわからない部分をどのようにすべきかすらわからず
  //履修を迷っていたのですが先生がZoomなどでお話している言葉に
  //励まされ、今後も受講する決意が出来ました。
  //今後もよろしくお願いいたします。


  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  //ここから応用編の神戸大学ロゴ
  //fill(blue);
  //ellipse(300, 100, 100, 100);
  //noStroke();
  //fill(255);//白色
  //ellipse(293, 93,80,80);
  //fill(green);
  //ellipse()
  //fill(255);//白色

}
