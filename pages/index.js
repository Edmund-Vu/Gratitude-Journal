import Head from 'next/head'
import Greeting from '../components/Greeting'
import History from '../components/History'
import Input from '../components/Input'
import {usestate} from 'react'

export default function Home(){
    const [user, setUser] = useState({
        "name": "Edmund",
        "email": "evu@chapman.edu",
    })

const [gratitudes, setGratitudes] = useState(['sleep', 'wifi'])
const [hasSubmittedToday, setSubmittedToday] = useState(false)

const addGratitude = (entry) => {
    let newGratitudes = [...gratitudes, entry]
    setGratitudes(newGratitudes)
    setSubmittedToday(true)
}

    return(
        <div className = "gb-gray-700 min-h-screen min-w-screen">
            <Head>
                <title>Hello</title>
                <link rel = "icon" href = "/favicon.ico"></link>
            </Head>

            <main className = "containeer mx-auto">
                <Greeting
                color = "text-pink-300"
                user = {user}
                gratitudes = {gratitudes}
                hasSubmittedToday = {hasSubmittedToday}
                ></Greeting>
                <div className="spacer"/>
                {
                    !hasSubmittedToday && <Input handleSubmit={addGratitude}/>
                }
                <div className="spacer"/>
                {
                    gratitudes.length > 0 &&
                    <History gratitudes = {gratitudes}></History>
                }
            </main>
        </div>
    )
}