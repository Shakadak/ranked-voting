import { A } from "@solidjs/router";

export function NavigationBar() {
  return (
    <>
      <nav>
        <ol>
          <li><A href="/">Home</A></li>
          <li><A href="/hello-world">Hello World</A></li>
          <li><A href="/create-poll">Create Poll</A></li>
        </ol>
      </nav>
    </>
  )
}
