// main.js

const api_route = 'http://127.0.0.1:8000/predict';

function predict() {
    const input = document.getElementById('input_csv');
    const prediction_text = document.getElementById('prediction_text');
    
    // Get the selected file
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;

            // Split CSV content into an array of rows
            const rows = content.split('\n');

            // Loop through each row for prediction
            rows.forEach((row, index) => {
                // You may want to skip the header row (if present) using an if statement

                // Reset text and show loading for each iteration
                prediction_text.innerHTML = `กำลังตรวจสอบ รายการที่ ${index + 1}...`;

                // Predict for the current row
                axios.get(api_route, {
                    params: {
                        file: row
                    }
                }).then((response) => {
                    prediction_text.innerHTML = `รายการที่ ${index + 1}: ${response.data.sentiment}`;
                }).catch((error) => {
                    console.log(error);
                });
            });
        };

        // Read the file as text
        reader.readAsText(file);
    } else {
        // Handle the case when no file is selected
        prediction_text.innerHTML = 'กรุณาเลือกไฟล์ CSV';
    }
}
