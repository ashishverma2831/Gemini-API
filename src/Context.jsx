import { createContext, useState } from "react";
import runChat from './gemini.js';

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('')
    const [previousPrompt, setPreviousPrompt] = useState([]);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const onSent = async (prompt) => { 
        setLoading(true);
        setResponse('');
        setShowResult(true);
        setRecentPrompt(input);
        const res = await runChat(input);
        setResponse(res);
        setLoading(false);
        setInput('');

    }

    // onSent('what is react js?');

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        response,
        showResult,
        loading,
        input,
        setInput,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;