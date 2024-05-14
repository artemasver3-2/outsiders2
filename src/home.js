import Header from "./header"
import Headliner from "./headliner"
import Blurbs from "./blurbs"
import MeetGreet from "./meet&greet"
import Footer from "./footer"

function Home () { 
    return (
    <>
        <Header 
        headerStyle="App-header"
        />
        
        <Headliner />

        <Blurbs />

        <MeetGreet />

        <Footer /> 
    </>
    )
}

export default Home