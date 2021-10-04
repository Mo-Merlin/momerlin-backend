const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const validate = require('mongoose-validator')
const {to,TE} = require('../services/global.services')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema;

const UserSchema =new mongoose.Schema({
    fullName:String,
    btcAddress:String,
    ethAddress:String,
    tronAddress:String,
    seedEncrypted:String,
    password:{
        type:String,
        default:''
    },
    imageUrl:String
}, {timestamps: true});


UserSchema.plugin(mongoosePaginate); 

UserSchema.pre('save', async function(next){

    if(this.isModified('password') || this.isNew){

        let err, salt, hash;
        [err, salt] = await to(bcrypt.genSalt(10));
        if(err) TE(err.message, true);

        [err, hash] = await to(bcrypt.hash(this.password, salt));
        if(err) TE(err.message, true);
        this.password = hash;

    } else{
        return next();
    }
})

UserSchema.methods.comparePassword = async function (pw) {

    let err, pass

    if (!this.password) TE('password not set');
    [err, pass] = await to(bcrypt.compare(pw, this.password))
    if (err) TE(err)

    if (!pass) return null

    return this

}

UserSchema.methods.getJWT = function () {
    let expiration_time = parseInt(CONFIG.jwt_expiration)
    return 'Bearer ' + jwt.sign({ user_id: this._id }, CONFIG.jwt_encryption,
        { expiresIn: expiration_time })
}


const Users = module.exports = mongoose.model('users', UserSchema);