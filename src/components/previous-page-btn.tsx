import '../styles/previous.scss'

import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Previous() {
    return(
        <div id="previous-page-btn">
            <Link to="/">
                <ArrowCircleLeft size={40} color="#ffffff" weight="thin" />
            </Link>
        </div>
    )
}