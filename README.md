# SVG 색상 변경

SVG는 색상 변경을 하기 위해서 fill 속성을 사용해 주어야 한다.

# input의 outline

input요소에 focus가 잡힐시 생기는 선은 border가 아니라 outline이다.

# div에 image 꽉 채우기

div에 width height 지정
display: flex;
overflow: hidden;
justify-content: center;
align-items: center;

이미지에 max-width 설정

# 주의점!

외부 라이브러리를 추가할 때 css는 css끼리 태그를 모아놓으려는 습관이 별로 좋지 않다. 정리하는 것은 좋지만 외부 모듈과 내부 모듈의 순서가 섞이지 않도록 주의해야 한다.

# overflow 속성

블록 요소 바깥으로 요소가 안밀어지면 overflow속성을 생각해본다.
이거좀 다시 생각해 볼 필요 있을듯

# pagination control 관련 메모
일단 해결한 문제이긴 하지만 swiper-wrapper 바깥에 pagination-control 요소가 위치를해서 제대로된 위치에 가더라도 pagination-control이 보이지 않는 문제가 생겼음. pagination-control을 swiper-wrapper안으로 밀어 넣어봤더니 기존에 스타일과 너무 충돌이 심해서 overflow 속성을 이용해서 문제를 해결 했음. swiper-wrapper에 overflow

# swiper 너무 어렵고

나중에 문제점 다시 정리하겠지만 top slider 만들때 너무 힘들었음 pagination container가 자꾸 안보여서 ㅠㅠ 원인 나중에 다시 파악할것

커스텀 버튼 만드는것도 어렵네 ㅠㅠ

# 다음에 할일

로드맵 버튼 커스터마이징

계획
현재 페이지를 변수로 담아두고 클릭이벤트를 이용해본다.
