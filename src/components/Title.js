import React from 'react'

export default function Title({ title, name }) {
    return (
        <div className="row">
            <div className="col-10 my-2 mx-auto text-center titel-text">
                <h1><strong>{title}</strong> {name}</h1>
            </div>

        </div>
    );
}
