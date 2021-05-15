var nodemailer = require('nodemailer');
module.exports = {
    send: function(data) {
        var user = 'bugs@xone.me',
            pass = 'kpuzaltbtylobibh';
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "QQ",
            auth: {
                user: user,
                pass: pass
            }
        });

        smtpTransport.sendMail({
            from: 'Bugs<' + user + '>',
            to: '<mail@xone.me>',
            subject: data.title || new Date().toLocaleString(),
            html: '<pre>' + data.message + '<br>' + data.stack + '</pre>'
        }, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    }
};