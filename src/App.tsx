import { Route, Router } from '@solidjs/router'
import './App.css'
import { MetaProvider } from '@solidjs/meta'
import { Home } from './app/routes/Home'
import { HelloWorld } from './app/routes/HelloWorld'

function App() {

  return (
    <MetaProvider>
      <Router base={import.meta.env.BASE_URL}>
        <Route path="/" component={Home}/>
        <Route path="/hello-world" component={HelloWorld}/>
      </Router>
    </MetaProvider>
  )
}

export default App
