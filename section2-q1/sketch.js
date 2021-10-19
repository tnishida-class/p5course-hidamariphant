// 小手調べ
function setup(){
　noFill();//塗りつぶしなし
　ellipse(50,50,10)
  ellipse(50,50,20)
  ellipse(50,50,30)
  ellipse(50,50,40)

  for(let i = 0; i < 10; i++){
   //let r = ???
   let r = i * 10 + 10;
   if(i < 5){
   }
   else{

   }

   ellipse(50, 50, r)


  }
}


//まず10本の線で円を描く
//その後、条件で分けて赤と青の円をそれぞれ描く（ifとelse）
