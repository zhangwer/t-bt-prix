import useSWR from 'swr'

const fetcher = (query) =>
  fetch('http://42.192.235.61/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

export default function Index() {
  const { data, error } = useSWR('{ users { title } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const { users } = data

  return (
    <div>
      {users.map((user, i) => (
        <div key={i}>{user.title}</div>
      ))}
    </div>
  )
}