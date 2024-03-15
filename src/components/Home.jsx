import React, { useContext } from 'react'
import { Context } from '../Context';

const Home = () => {

    const { input, setInput, onSent, recentPrompt, setRecentPrompt, response, showResult, loading, previousPrompt, setPreviousPrompt } = useContext(Context);

  return (
    <>
        <div className='bg-red-200'>
            <input type="text" placeholder='Enter a prompt here...' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => onSent(input)}>Send</button>
        </div>
        <div>
            { response && showResult && !loading ? <p>{response}</p> : null }
            { loading ? <p>Loading...</p> : null }
        </div>
    </>
  )
}

export default Home