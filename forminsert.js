document.addEventListener("DOMContentLoaded", () => {
    const populateHiddenFields = () => {
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);

            if (key.startsWith("utm_")) {
                const value = sessionStorage.getItem(key);
                let hiddenField = document.querySelector(`input[name="${key}"]`);
                hiddenField.value = value;
            }
        }
    };

    populateHiddenFields();
    console.log("Hidden fields populated with UTM values from sessionStorage.");
});
