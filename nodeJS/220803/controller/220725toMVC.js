exports.get_main = (req, res) => {
    res.send("index");
};

exports.get_receive = (req, res) => {
    res.send("get_receive");
};

exports.post_receive = (req, res)  => {
    res.send("post_receive");
};