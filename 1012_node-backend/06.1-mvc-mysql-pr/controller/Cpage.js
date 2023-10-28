const model = require('../model/Page');

exports.register = async (req, res) => {
    const { username } = req.body;
    const result = await model.register(username);

    if (result) {
        res.json({ message: `${username}님 환영합니다.` });
    } else {
        res.status(500).json({ message: '회원가입에 실패했습니다.' });
    }
};