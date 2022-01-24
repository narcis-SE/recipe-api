import React from "react"
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom"
import ListOfFavorites from "./ListOfFavorites"
import "./Styles.css"

export function Header() {
    return (
        <div className="Header">
            <h1>Recipe App</h1>

        </div>
    )
}
