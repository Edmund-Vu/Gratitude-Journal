export default function Greeting({user, color, gratitudes, hasSubmittedToday}){
    return(
        <div className = "text-white text-6x1">
            <h1>
                Hello, <span className = {color}> {user.email} </span>!
            </h1>
            {
                hasSubmittedToday ? (
                    <h2 className = "font-black">Today you're grateful for {gratitudes.slice(-1)[0]}</h2>
                ) : (
                    <h2 className = "font-black">What are you grateful for today?</h2>
                )
            }
        </div>
    )
}