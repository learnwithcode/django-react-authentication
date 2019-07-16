import React from 'react';

const card = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                    <div className="card">
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
       </div> 
    )
}

export default card;