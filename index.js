
var imageSlideIndex = 1; // 이미지 번호를 담은 변수값. 싸이클때문에 5번째 인덱스값이 출력되 1로 조정
var imageTimer = setTimeout(imageSlideTimer, 3000); // 슬라이드 싸이클을 돌리기위해 한번만 실행

showImageSlides(imageSlideIndex);

function menuToggle(){
  document.getElementById('menu').classList.toggle('show');
}

function imageSlideTimer() {
  nextImageSlides(1);
}

function nextImageSlides(n) {
  clearInterval(imageTimer);
  imageTimer = setInterval(imageSlideTimer, 3000);
  showImageSlides(imageSlideIndex += n);
}

function dotImageSlides(n){
  showImageSlides(imageSlideIndex = n);
}
// 이미지 타이머 함수

function showImageSlides(n) {
  var i;
  var slides = document.getElementsByClassName('image-slide');
  var dots = document.getElementsByClassName('dot');

// 이미지 순환 코드
  if (n > slides.length) {imageSlideIndex = 1} 
  if (n < 1) {imageSlideIndex = slides.length}
    
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; // 모든 이미지를 보이지않게 처리함.
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('active', ''); // 모든 active 속성을 가진 점들을 보이지 않게 처리.
  }

  slides[imageSlideIndex-1].style.display = 'block'; // 해당하는 이미지만 출력
  dots[imageSlideIndex-1].className += ' active'; // 현재 보이는 사진 인덱스값을 아랫쪽에 점으로 밝혀줍니다.
}

// 화살표와 점에 클릭 이벤트 할당
document.getElementById('imagePrev').addEventListener('click', nextImageSlides.bind(null,-1));
document.getElementById('imageNext').addEventListener('click', nextImageSlides.bind(null,1));

document.getElementById('firstDot').addEventListener('click', dotImageSlides.bind(null,1));
document.getElementById('secondDot').addEventListener('click', dotImageSlides.bind(null,2));
document.getElementById('thirdDot').addEventListener('click', dotImageSlides.bind(null,3));
document.getElementById('forthDot').addEventListener('click', dotImageSlides.bind(null,4));
