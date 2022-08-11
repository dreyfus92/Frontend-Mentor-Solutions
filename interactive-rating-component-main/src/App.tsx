import { useState } from 'react'
import Submit from './components/Submit'
import Rating from './components/Rating'

function App(): JSX.Element {
    const [handleSubmit, setHandleSubmit] = useState<boolean>(true)
    const [value, setValue] = useState<string>('')

    return handleSubmit ? (
        <Rating
            togglerChanger={setHandleSubmit}
            toggleState={handleSubmit}
            valueOfButton={value}
            setValueOfButton={setValue}
        />
    ) : (
        <Submit submitText={value} />
    )
}

export default App
