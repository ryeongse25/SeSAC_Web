import React, { useEffect, useState, useRef } from "react";
const { naver } = window;

function MapComponent() {
    const [myLocation, setMyLocation] = useState([{latitude: "number", longitude: "number"}]);
    const container = useRef();

    const initMap = async () => {
        // 현재 위치 가져오기

        // 현재 발생되고 있는 오류
        // 1. 콘솔이 두번씩 찍히는 현상
        // 2. 처음에 아래 "현재 위치 오류" alert가 나옴 -> 위치를 가져오는데 시간이 걸리는 거 같음
        // 3. 특정한 다른 위치가 꾸준히 나옴 (나는 신길동..) -> 뒤늦게 정확한 현재 위치가 찍힘
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setMyLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                })
        } else {
            alert("현재 위치 찾을 수 없음");
        }

        const mapOption = {
            zoom: 14,
            zoomCOntrol: true
        };

        if (typeof myLocation.latitude == "number") {
            // console.log("위치", myLocation);
            mapOption.center = new naver.maps.LatLng(myLocation.latitude, myLocation.longitude);
        } else {
            alert("현재 위치 오류");
            mapOption.center = new naver.maps.LatLng(37.3724620, 127.1051714);
        }

        const map = new naver.maps.Map(container.current, mapOption);

        // 마커 애니메이션
        // map.fitBounds(naver.maps.LatLngBounds.bounds(new naver.maps.LatLng(37.3724620, 127.1051714), new naver.maps.LatLng(37.3542795, 127.1174332)));

        const markerOptions = {
            position: mapOption.center,
            map,
            // icon: {
            //     content: "<img src=./heart-marker.png />",
            //     size: new naver.maps.Size(50, 52),
            //     origin: new naver.maps.Point(0, 0),
            //     anchor: new naver.maps.Point(25, 26),
            // }
            // animation: naver.maps.Animation.DROP
        }

        const marker = new naver.maps.Marker(markerOptions);

        naver.maps.Event.addListener(map, 'click', function(e) {
            marker.setPosition(e.coord);
        });
    }

    useEffect(() => {
        initMap();
    }, [myLocation, container]);

    return (<>
        <div ref={container} style={{width: '500px', height: '500px'}}></div>
        <button>지도 이동하기</button>
    </>);
}

export default MapComponent;