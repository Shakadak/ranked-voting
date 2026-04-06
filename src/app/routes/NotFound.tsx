import { NavigationBar } from "@components/NavigationBar";
import { Title } from "@solidjs/meta";

export function NotFound() {
  return (
    <>
      <Title>Not Found</Title>
      <h1>404 Page Not Found</h1>
      <NavigationBar/>
    </>
  )
}
