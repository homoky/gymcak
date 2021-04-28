import Link from 'next/link'
import Button, {greeting, superGreeting} from './../components/Button'
import Image from './../components/Image'

const HomePage = () => {

    const isSquare = false;

    return <div>
        Welcome to Next.jss! Go to {" "}
        <Image src="https://homoky-files.fra1.digitaloceanspaces.com/2020/nL2ckrgYNz.png" width={300} isSquar />
    </div>
}
  
export default HomePage