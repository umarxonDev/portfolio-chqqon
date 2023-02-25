import React, { useEffect } from "react";
import './Footer.css'

function GoogleMap() {
    useEffect(() => {
        const ifameData = document.getElementById("iframeId")
        const lat = 41.34085;
        const lon = 69.29686;
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return (
        <>
            <div className="maps" id="map">
                <iframe id="iframeId" height="300px" width="1180px" />
            </div>
            <div className="TextMap container">
                <p>
                    DESIGNER BY: Umarkxan
                </p>
                <p>
                    © CHAQQON SMM 2023. All rights reserved.
                </p>
            </div>
        </>

    );
}
export default GoogleMap;