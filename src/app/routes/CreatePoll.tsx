import { NavigationBar } from "@components/NavigationBar";
import { Title } from "@solidjs/meta";
import { createSignal, For } from "solid-js";

export function CreatePoll() {
  const [getList, setList] = createSignal<string[]>([])
  const [getInput, setInput] = createSignal("")
  return (
    <>
      <Title>Create Poll</Title>
      <NavigationBar />
      <ol>
        <For each={getList()}>
          {(item) => (
            <li>{item}</li>
          )}
        </For>
      </ol>
      <div>
        <input value={getInput()} onChange={(e) => setInput(e.currentTarget.value)}/>
        <button onClick={() => {
          setList((state) => [...state, getInput()])
          setInput("")
        }}>➕Add</button>
      </div>
    </>
  )
}
