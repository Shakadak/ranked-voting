import { Title } from '@solidjs/meta'
import { A } from '@solidjs/router'

export function Home() {
  return (
    <>
      <Title>Home</Title>
      <h1>ʬelcome Home</h1>
      <A href='/hello-world'>Hello World</A>
    </>
  )
}
