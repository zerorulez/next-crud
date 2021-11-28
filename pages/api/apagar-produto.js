// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const id = req.query.id

  fetch(process.env.API_URL + 'produtos/' + id, {
    method: 'DELETE'
  })
  .then(() => {
    res.status(200).json()
  })
}
