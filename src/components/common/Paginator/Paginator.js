import style from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalPages, currentPage, onPageChanged}) => {

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return (
                    <span
                        key={p.toString()}
                        className={currentPage === p ? style.selectedPage.toString() : undefined}
                        onClick={() => {
                            onPageChanged(p)
                        }}>
                            {p}
                        </span>
                );
            })}
        </div>)
}

export default Paginator;