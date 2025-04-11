import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'

function App() {
  const unreadMessagesCount = [1, 0, null, undefined]
  return (
    <main>
      <h1>Differences between ternary and && operator</h1>

      <div>
        {unreadMessagesCount.map((x, i) => (
          <Test key={i} x={x} />
        ))}
      </div>
    </main>
  )
}
function Test({x}) {
  return (
    <div className="test">
      <h2>x: {x + ''}</h2>
      <p>
        <span>ternary :</span>
        {x ? (
          <span>Vous avez {JSON.stringify(x)} messages non lus.</span>
        ) : null}
      </p>
      <p>
        <span> !! + &&</span>
        {!!x && <span>Vous avez {JSON.stringify(x)} messages non lus.</span>}
      </p>
      <p>
        <span> && only</span>
        {x && <span>Vous avez {JSON.stringify(x)} messages non lus.</span>}
      </p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
