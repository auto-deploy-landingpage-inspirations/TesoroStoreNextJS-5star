const ccav = require('./../../utils/ccavutil.js');
const crypto = require('crypto');
const qs = require('querystring');

export default async function handler(req, res) {
    try {
        if(req.method === 'POST') {
            console.log(req.method);
            // const accessCode = "AVCK53LA79CN78KCNC";
            const workingKey = "B119F30E7F577B431660D1EF7065B53B";
            // const merchantId = 3163052;
            const md5 = crypto.createHash('md5').update(workingKey).digest();
            const keyBase64 = Buffer.from(md5).toString('base64');
    
            //Initializing Vector and then convert in base64 string
            const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');
            console.log("Request . body Variable:")
            console.log(req.body.encResp);
            
            const encryption = req.body.encResp;
            const ccavResponse = ccav.decrypt(encryption, keyBase64, ivBase64);
            console.log("decrypted message: ", ccavResponse);
            // });
            const data = {
                data: qs.parse(ccavResponse),
                orderId: ccavResponse.order_id,
            }
            console.log(data);

            // Update order details with Payment Details
            // console.log("Cookies.get('auth_token')", Cookies.get('auth_token'));
            const responseFrom = await fetch(`https://tesoro-backend.onrender.com/api/order/update-order/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            
            const response = await responseFrom.json();
            console.log(response);

            // res.json({ 
            //     data: data, orderId: req.body.orderNo, 
            //     redirectUrl: `http://localhost:3001/my-account/orders/${req.body.orderNo}`,
            //     response: response
            // })
            if(process.env.NEXT_PUBLIC_ENV === 'PROD'){
                res.writeHead(302, {location: `https://tesorostore.in/my-account/orders/${req.body.orderNo}`})
            } else{
                res.writeHead(302, {location: `http://localhost:3001/my-account/orders/${req.body.orderNo}`})
            }
            res.end()
            // res.status(200).json({ message: 'Success', data: data, orderId: req.body.orderNo });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.log("--------------------------------------");
        console.log(error);
        res.writeHead(302, {location: `http://localhost:3001/404`})
        res.end()
    }
    
}