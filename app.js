const nodeMailer = require('nodemailer');

const html=`
      <h1>Hi friend</h1>
      <p> I hope u are fine. i am sending this mail to just test my nodemailer app.</p>

`;

async function main(){

    const transporter = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user:'testictmern@gmail.com',
            pass: 'frxgmjfabydsncvz'
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
