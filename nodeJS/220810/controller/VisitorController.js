// const Visitor = require("../model/Visitor");
const models = require("../model");
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    // ../model/index.js에서 db.Visitor
    models.Visitor.findAll() // sequelize 문법. Select * FROM visitor;
    .then((result) => {
        console.log("index");
        console.log("result[0] : ", result[0]);
        // [{}] 객체가 나오지만
        console.log("id : ", result[0].id);
        // 객체안에 dataValues에서 id를 자동으로 찾아준다
        res.render("index", {data: result});
        
    });
}

exports.post_comment = (req,res) => {
    let object = {
        // 키 값은 데이터베이스 컬럼 이름
        name: req.body.name,
        comment: req.body.comment
    }
    // insert into visitor ('name', 'comment') VALUES (req.body.name, req.body.comment)
    models.Visitor.create(object)
    .then((result) => {
        // select했을 때와 똑같이 객체에 데이터가 담겨진다.
        // 하지만 select를 했을 때는 배열에 객체가 담기는 반면, insert를 했을 때는 객체만 리턴된다.
        console.log(result);
        res.send({id: result.id});
    })
}

exports.get_visitor = (req,res) => {
    // select * from visitor where id = req.query.id limit 1
    // findOne은 배열에 담겨오지 않는다
    models.Visitor.findOne({
        // 두개 조건을 걸고 싶으면 where: {id: , name: }
        where: {id: req.query.id}
    }).then((result) => {
        console.log(result);
        res.send({result: result});
    })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name : req.body.name,
        comment : req.body.comment
    };
    // update visitor set name = req.body.name, comment = req.body.comment where
    models.Visitor.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        // 몇 개의 데이터가 바뀌었는지 => [1]
        console.log(result);
        res.send("수정 성공");
    })
}

exports.delete_comment = (req,res) => {
    models.Visitor.destroy({where: {id: req.body.id}})
    .then((result) => {
        // 몇 개의 데이터가 삭제되었는지 => 1
        console.log( result );
        res.send( "삭제 성공" );
    })
}