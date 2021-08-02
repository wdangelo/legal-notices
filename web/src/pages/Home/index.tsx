import NavHome from "../../componets/NavHome"

import Category from "../../componets/Category"

import './style.css'

export default function Home() {
    return (
        <div className="HomeBody">
            <NavHome />
            <Category />
        </div>
    )
}