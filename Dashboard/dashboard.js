document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch("/Dashboard/Sales/withMonth"); // Realiza una solicitud para obtener los datos de ventas
        const data = await response.json(); // Convierte la respuesta en un objeto JavaScript

        // Extrae los datos en arrays separados para Chart.js
        const months = data.map(item => `${item.year}-${item.month}`);
        const totalSales = data.map(item => item.totalSales);

        // Configura el gráfico de barras
        const ctx = document.getElementById("salesChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: months,
                datasets: [
                    {
                        label: "Ventas Mensuales",
                        data: totalSales,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    } catch (error) {
        console.error("Error al obtener datos de ventas:", error);
    }
});
