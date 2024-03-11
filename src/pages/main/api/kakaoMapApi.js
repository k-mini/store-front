export {
    initKakaoMap,
    initMap,
}

var vm = window.app;

function initKakaoMap() {
    console.log('initKakaoMap', vm.__vue_app__);
    if (window.kakao && window.kakao.maps) {
        // this.initMap();
    } else {
        const script = document.createElement("script");
        // global kakao
        // window.kakao.maps.load 메서드를 호출하지 않고 autoload를 사용하면
        // 자동으로 추가적인 kakao.js파일을 로딩하는데, 그렇게 되면 
        // kakao.maps.LatLng의 함수가 로딩되지 않았는데 initMap메서드가 호출되어
        // is not a function 오류 발생.
        // 올바른 흐름
        // v2스크립트 -> kakao.js 로딩 -> 카카오 맵 관련 객체(LatLng, Map) 초기화
        // vue에서 autoload 사용할 경우 아래 순서때문에 오류가 발생.
        // v2스크립트 -> 카카오 맵 관련 객체 초기화 
        //           -> 존재하지 않는다는 오류 발생(kakao 맵 관련 객체는 kakao.js 파일에 존재)
        // script.onload = () => window.kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0d26c55d5640d7a6d3fc46625ee781a6";
        document.head.appendChild(script);
    }
}

function initMap() {
    console.log('initMap', vm);
    const container = document.getElementById("kakaoMap");
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 5,
    };

    //지도 객체를 등록합니다.
    //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
    this.map = new window.kakao.maps.Map(container, options);

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      let currentLatitude = position.coords.latitude;
      let currentLongitude = position.coords.longitude;
      console.log('현재 위치 : ',currentLatitude, currentLongitude);
      var moveLatLng = new window.kakao.maps.LatLng(currentLatitude,currentLongitude);
      this.map.setCenter(moveLatLng);

      // 마커 생성
      var marker = new window.kakao.maps.Marker({
        position: this.map.getCenter()
      });
      // 지도에 마커 표시
      // marker.setMap(this.map);

      // 지도에 클릭 이벤트 등록
      window.kakao.maps.event.addListener(this.map, 'click', (e) => {
        this.clickMap(e, marker);
      });

    })
}