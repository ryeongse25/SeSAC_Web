const Visitor = require("../model/Visitor");

// router.get("/", controller.index);
exports.index = (req, res) => {
    Visitor.get_visitors(function(result) {
        console.log("result : ", result);
        res.render("index", {data: result});
    });
}

// router.post("/write", controller.post_comment);
exports.post_comment = (req, res) => {
    console.log(req.body);
    Visitor.insert(req.body.name, req.body.comment, function(result) {
        // result = rows.insertId
        // axios의 then 부분으로 들어간다
        console.log(result);
        res.send({id : result});
    });
}

// router.post("/edit", controller.edit_comment);
exports.edit_comment = (req, res) => {
    console.log(req.body);
    Visitor.update(req.body.name, req.body.comment, req.body.id, function(result) {
        console.log(result);
        res.send({id : result});
    });
}