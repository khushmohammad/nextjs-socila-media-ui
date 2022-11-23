import LinksExample from "../components/Alert";
import homestyle from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <h1 className={homestyle.headingColor}  >
        Home
      </h1>
      <LinksExample />
    </div>
  )
}
