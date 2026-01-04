import { Title } from '@solidjs/meta'
import { A } from '@solidjs/router'
import { createSignal } from 'solid-js'

export function HelloWorld() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Title>Hello World !</Title>
      <nav>
        <ol>
          <li class='crumb'><A href='/'>Home</A></li>
          <li class='crumb'><A href='/hello-world'>Hello World</A></li>
        </ol>
      </nav>
      <h1>Hello ʬorld</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
      </div>
    </>
  )
}
