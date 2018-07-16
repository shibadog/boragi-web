const rp = require('request-promise');

function exec(u, p) {
    const param = {
        charName: u,
        encryptedPassword: p,
    };
    return jsonget('http://forum.netmarble.com/api/auth', param);
}

function jsonget(uri, form) {
    const obj = Object.assign(form, {
        // ボラギ専用仕様
        authType: '1',
        serverId: '108',
        gameCode: 'revolutionjp',
        isKeepLogin: false,
    });
    const options = {
        uri: uri,
        method: 'POST',
        form: obj,
        json: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };
    return rp(options);
}

module.exports = {
    exec: exec
};