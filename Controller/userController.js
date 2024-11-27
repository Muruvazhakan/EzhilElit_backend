const { v4: uuidv4 } = require("uuid");
const User = require('../DbTablesSchema/UserMode');
const HttpError = require("../DbTablesSchema/httpError");
const findUser = async (req, res, next) => {
    console.log('req the user');
    // res.json({ userList });
    // let userlist;
    // try{
    //     userlist = await User.find({},'-passwords');
    //     console.log(userlist.length + ' userlist');
    // }catch(e){
    //     next (new HttpError ((e),244));
    // }
    // if(userlist.length > 0 )
    //     return res.status(200).json({users:userlist.map(user => user.toObject({getters: true}))});
    // next (new HttpError (('No Values'),244));
    return res.status(200).json('got user request');
}


const loginUser = async (req, res, next) => {
    const { mobile, password } = req.body;
    // console.log('details ' + mobile + password);

    // finduser = userLoginname.find(item => {
    //     if (item.mobile === mobile) {
    //         if (item.password === password)
    //             return item;
    //     }

    // });

    let finduser;
    // console.log('user');

    try {
        finduser = await User.find({ mobile: mobile, password: password });

    } catch (er) {
        throw new HttpError('error in login user' + er, 400);
    }
    //console.log(finduser);
    if (finduser.length === 0) {
        //console.log('undefined');
        res.status(224).json('not found');
    } else {
        res.status(200).json(finduser[0].userid);
    }
};

const signIn = async (req, res, next) => {
    const { mobile, password,emailid,name } = req.body;
    console.log(req.body);
    console.log('get ' + mobile );
    // let finduser = finduserpass(mobile, password);
    // if (finduser == undefined) {
    //     console.log('undefined');
    //     res.status(200).json('created');
    // } else {
    //     res.status(224).json('User alreay exist');
    // }

    let isUserexit, user;
    try {
        isUserexit = await User.find({ mobile: mobile });
        // isUserexit = finduserpass(mobile, password);
        console.log('req the isUserexit find ' + isUserexit);
        console.log('req the isUserexit find 2222');
    } catch (er) {
        console.log('inside catch');
        throw new HttpError('User find'+er, 205);
    }
    if (isUserexit.length === 0) {
        console.log('inside creation');
        try {
            user = new User({
                userid: uuidv4(),
                mobile: mobile,
                emailid:emailid,
                name:name,
                password: password,
            });
            console.log('req user input ' + user);
            await user.save();
            console.log('req the isUserexit ' + isUserexit);
        } catch (er) {
            // return next(new HttpError('error in DB connection in isUserexit process'+er,404));
            return res.status(205).json("error " + er);
        }
        return res.status(201).json(user.userid);
    }
    else {
        res.status(200).json('User already exist');
    }

}


exports.findUser = findUser;
exports.loginUser = loginUser;
exports.signIn = signIn;