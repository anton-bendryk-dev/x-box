import React from 'react';

const DesignLab = () => {
    return (
        <section className="designLab-container">
            <div className="inline-dl-container">
                <div className="col-w50">
                    <h2>Xbox Design Lab</h2>
                    <p>Make yours one in a billion with new colors, 
                        metallic finishes and rubberized grips.</p>
                    <div className="design-lab-btn-container">
                        <div><a href='/' className="design-lab-btn1">Design Yours</a></div>
                        <div><a href='/' className="design-lab-btn2">Explore Consoles & Accessories</a></div>
                    </div>
                </div>
                <div className="col-w50"></div>
            </div>
        </section>
    )
}

export default DesignLab