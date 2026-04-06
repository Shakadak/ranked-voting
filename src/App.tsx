import { Route, Router } from '@solidjs/router'
import './App.css'
import { MetaProvider } from '@solidjs/meta'
import { Home } from './app/routes/Home'
import { HelloWorld } from './app/routes/HelloWorld'
import { NotFound } from './app/routes/NotFound'
import { CreatePoll } from './app/routes/CreatePoll'

function App() {

  return (
    <MetaProvider>
      <Router base={import.meta.env.BASE_URL}>
        <Route path="/" component={Home}/>
        <Route path="/hello-world" component={HelloWorld}/>
        <Route path="/create-poll" component={CreatePoll}/>
        <Route path="*404" component={NotFound}/>
      </Router>
    </MetaProvider>
  )
}

export default App
