// request get using axios
const api_route = 'http://127.0.0.1:8000/predict';

function predict() {
    const prediction_text = document.getElementById('prediction_text');
    const sample_text = document.getElementById('sample_text');
    const alert = document.getElementById('alert');

    // Reset text and show loading
    prediction_text.innerHTML = 'Checking...';

    // Function to create and update the line chart
    function createLineChart(data, borderColor) {
        const ctx = document.getElementById('myChart');

        // Check if a chart instance already exists
        if (ctx && Chart.getChart(ctx)) {
            // If it exists, destroy it
            Chart.getChart(ctx).destroy();
        }

        // Create the new chart instance
        const myChart = new Chart(ctx.getContext('2d'), {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    label: 'Line Plot',
                    data: Object.values(data),
                    fill: false,
                    borderColor: borderColor,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // predict
    var myMappings = {
        'N': 'Non-ecotic beats (normal beat)',
        'S': 'Supraventricular ectopic beats',
        'V': 'Ventricular ectopic beats',
        'F': 'Fusion beats',
        'Q': 'Unknown beats'
    };

    axios.post(api_route, {}).then(function (response) {
        // Use a counter to keep track of the index
        let i = 0;

        // Define a function to update prediction_text with a delay
// Define a function to update prediction_text with a delay
        function updateTextWithDelay() {
        if (i < response.data.text.length) {
            const condition = response.data.text[i] !== 'N';
            prediction_text.innerHTML = myMappings[response.data.text[i]];

            // Set text color based on the condition
            prediction_text.style.color = condition ? 'red' : 'rgba(75, 192, 192, 1)';

            sample_text.innerHTML = 'Patient Heart';
            const data = Object.values(response.data.graph[i]);

            // Determine the borderColor based on the condition
            const borderColor = condition ? 'red' : 'rgba(75, 192, 192, 1)';

            createLineChart(data, borderColor);

            if (condition) {
                alert.innerHTML = ''; // Set your desired value when condition is true
            } else {
                alert.innerHTML = ''; // Set your desired value when condition is false
            }

            // Increment the counter for the next iteration
            i++;

            // Call the function recursively after a delay (e.g., 200 milliseconds)
            setTimeout(updateTextWithDelay, 200);
        }
    }


        // Start the process by calling the function for the first time
        updateTextWithDelay();
    }).catch((error) => {
        console.log(error);
    });
}
