
export {
    extractAddress,
}

function extractAddress() {
    new window.daum.Postcode({
      oncomplete: (data) => {    
        // console.log(data);
        // console.log(this);
        // 우편번호 입력
        this.zonecode = data.zonecode;
        // 도로명 주소 입력
        if (data.roadAddress !== '') {
          this.roadAddress = data.roadAddress;
        } else {
          this.roadAddress=  data.autoRoadAddress;
        }
        // 지번 주소 입력
        if (data.jibunAddress !== '') {
          this.jibunAddress = data.jibunAddress;
        } else {
          this.jibunAddress = data.autoJibunAddress;
        }
    }
  }).open();
}