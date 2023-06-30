const nodeMailer = require('nodemailer');

const html=`
      <h1>Hi friend</h1>
      <p> Testing nodemailer</p>

`;

async function main(){

    const transporter = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user:'testictmern@gmail.com',
            pass: '2277345Hh*'
        }
    });

    const info = await transporter.sendMail({
        from: 'sankari <testictmern@gmail.com>' ,
        to: 'sreesankarimurali@gmail.com',
        subject: 'Testing Nodemailer',
        html: html,

    })
    
    console.log("Message sent: "+ info.messageId);
}

main()
.catch(e =>console.log(e));
