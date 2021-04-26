import Link from 'next/link'
import Button, {greeting, superGreeting} from './../components/Button'

const HomePage = () => {
    return <div>
        Welcome to Next.js! Go to {" "}
        <Link href="/hello"><a>hello page</a></Link>.
        <Button color="red">Tohle je moje tlačítko</Button>
        <Button />
        <Button children="Tohle je super tlačítko" onClick={()=>{console.log("ahoj")}} />
        {greeting("Petr")}
        {superGreeting({name: "super greeting name"})}
    </div>
}
  
export default HomePage