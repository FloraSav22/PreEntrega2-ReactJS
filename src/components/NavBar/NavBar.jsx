import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
        <h1>Holas</h1>
        <section>
            <Link to="/category/huerta">Huerta</Link>
            <Link to="/category/arboles">Frutales</Link>
            <Link to="/category/arboles">Citricos</Link>
        </section>
        <CardWidget />
    </nav>
  )
}

export default NavBar