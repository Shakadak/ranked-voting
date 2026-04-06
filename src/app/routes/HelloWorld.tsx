import { NavigationBar } from '@components/NavigationBar'
import { Title } from '@solidjs/meta'
import { createSignal } from 'solid-js'

export function HelloWorld() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Title>Hello World !</Title>
      <h1>Hello ʬorld</h1>
      <NavigationBar/>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
    </>
  )
}
