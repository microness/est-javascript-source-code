const CLIENT_ID='w0k0mhoxcw'
const CLIENT_SECRET='tMUbOkTKwPTAsjw5FL8pVCwt1g178wLjgthFoBbM'

const DETECT_URL = 'https://papago.apigw.ntruss.com/langs/v1/dect';


const response = await fetch(DETECT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
      'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
    },
    body: JSON.stringify({
      query: text,
    }),
  });

console.log(response);
