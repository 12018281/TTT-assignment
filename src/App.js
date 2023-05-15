import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function App() {
  const [textData, setTextData] = useState('');
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const getHistogramData = (data) => {
      const wordArray = data.split(/\s+/);
      const wordMap = {};
      wordArray.forEach((word) => {
        if (wordMap.hasOwnProperty(word)) {
          wordMap[word]++;
        } else {
          wordMap[word] = 1;
        }
      });
      const sortedData = Object.entries(wordMap).sort((a, b) => b[1] - a[1]);
      const chartData = {
        labels: sortedData.slice(0, 20).map((item) => item[0]),
        datasets: [
          {
            label: 'Word Count',
            data: sortedData.slice(0, 20).map((item) => item[1]),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      setChartData(chartData);
    };

    if (textData) {
      getHistogramData(textData);
    }
  }, [textData]);

  useEffect(() => {
    if (chartRef.current && chartData.datasets) {
      const chart = new Chart(chartRef.current, {
        type: 'bar',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [chartData, chartRef]);

  const handleExport = () => {
    const exportData = chartData.labels.map((label, index) => [
      label,
      chartData.datasets[0].data[index],
    ]);
    const csvRows = [
      ['Word', 'Count'],
      ...exportData.map((row) => row.join(',')),
    ];
    const csvString = csvRows.join('\n');
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvString}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    fetch('https://www.terriblytinytales.com/test.txt')
      .then((response) => response.text())
      .then((data) => setTextData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {!textData && (
        <button onClick={handleSubmit}>Submit</button>
      )}
      {textData && (
        <div>
          <canvas ref={chartRef} />
          <button onClick={handleExport}>Export</button>
        </div>
      )}
    </div>
  );
}

export default App;