document.addEventListener("DOMContentLoaded", () => {
    const getUTMParameters = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = {};

        urlParams.forEach((value, key) => {
            if (key.startsWith("utm_")) {
                utmParams[key] = value;
            }
        });

        return utmParams;
    };

    const saveUTMParameters = (utmParams) => {
        Object.entries(utmParams).forEach(([key, value]) => {
            sessionStorage.setItem(key, value);
        });
    };

    const utmParams = getUTMParameters();
    saveUTMParameters(utmParams);

    console.log("UTM Parameters saved to sessionStorage:", utmParams);
});
