// function func() {
//     return new Promise(function(resolve, reject) {
//         resolve(1);
//     });
// }

// async function func() {
//     return 1;
// }

// func()
// .then(function(result) {
//     console.log(result);
// });

function login(id, pw) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("사용자 입장");
            resolve(id);
        }, 3000);
    });
}

function getVideo(id) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(['아이언맨1', '아이언맨2']);
        }, 2000);
    });
}

function getDetail(video) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("비디오 제목은 : " + video);
        }, 1000);
    });
}

// function exec() {
//     login('kim', '1234')
//     .then(function(user) {
//         console.log('user님 환영');
//         return getVideo(user);
//     })
//     .then(function(videos) {
//         console.log(videos);
//         return getDetail(videos[0]);
//     })
//     .then(function(title) {
//         console.log(title);
//     })
// }

// await를 쓰려면 async가 있어야 한다.
async function exec() {
    try {
    let user = await login('kim', '1234');
    let videos = await getVideo(user);
    console.log(videos);
    let title = await getDetail(videos[0]);
    console.log(title);
    } catch(e){
        console.log( e );
    }
}

exec()