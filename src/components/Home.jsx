import React, { useContext } from 'react'
import { Context } from '../Context';

const Home = () => {

    const { input, setInput, onSent, recentPrompt, setRecentPrompt, response, showResult, loading, previousPrompt, setPreviousPrompt } = useContext(Context);

  return (
    <>
        <h1 className='bg-red-900'>Home</h1>
    </>
  )
}

export default Home