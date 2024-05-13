import Header from './header'
import Footer from './footer'
import Place from './place'
import Card from './card'
import Button from './button'
import Student from './student'
import Button1 from './button1/button1.jsx'
import List from './list'
function App() {

    return(
        <>
            <Header/>
            <List/>
            <Card/>
            <Student name="Sid"
            mark={100}
            isstudent="true"/>
            <Student name="sahil"
            mark={200}
            isstudent="true"/>
            <Button/>
            <Button1/>
            <Place/>
            <Footer/>
        </>
    )
    
}

export default App
