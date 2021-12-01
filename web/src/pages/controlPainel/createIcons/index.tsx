
import NavBarControlPainel from "../../../componets/NavBarControlPainel";

export default function index() {
  return(
    <div>
      <NavBarControlPainel />
      <h1>Importação de Icones</h1>

      <img src={``} alt="Pré Visualização" /> <br /> <br />

      <label htmlFor="">Icones: </label>
      <input type="file" />
    </div>
  )
}
