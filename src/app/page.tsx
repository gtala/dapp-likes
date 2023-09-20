import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import Counter from "../components/Counter";


const Page = () => {
  return (
    <>

      <h1>Likes DApp</h1>

      <Connect />

      <Connected>
        <Account />
        <Counter/>
        <NetworkSwitcher />
      </Connected>
    </>
  )
}

export default Page