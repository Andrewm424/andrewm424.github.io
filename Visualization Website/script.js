document.getElementById('fileInput').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const data = e.target.result;
        processData(data);
    };

    reader.readAsText(file);
}

function processData(data) {
    // Assuming data is in CSV format for simplicity
    const lines = data.split('\n');
    const labels = lines[0].split(',').slice(1); // Assuming first column is student names
    const attendanceData = lines[1].split(',').slice(1).map(value => parseInt(value)); // Attendance data for one student

    renderPieChart(labels, attendanceData);
    renderBarChart(labels, attendanceData);
}

function renderPieChart(labels, data) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Attendance',
                data: data,
                backgroundColor: generateRandomColors(data.length)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

function renderBarChart(labels, data) {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Attendance',
                data: data,
                backgroundColor: generateRandomColors(data.length)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    return colors;
}
