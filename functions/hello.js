const items = [
  { id: 1, name: 'saurav' },
  { id: 2, name: 'kr' },
]

exports.handler = async function (e, context) {
  return { statusCode: 200, body: JSON.stringify(items) }
}
