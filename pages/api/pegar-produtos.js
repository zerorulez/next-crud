// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  fetch(process.env.API_URL + 'produtos')
  .then(res => res.json())
  .then(resposta => {
    res.status(200).json(resposta)
  })
}
