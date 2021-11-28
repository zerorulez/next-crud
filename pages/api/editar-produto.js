// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(process.env.API_URL + 'produtos', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(req.body)
  })
  .then(res => res.json())
  .then(resposta => {
    res.status(200).json(resposta)
  })
}
