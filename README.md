# Word Frequency Analyzer

This is a React.js/Next.js frontend application that analyzes the frequency of words in a text file and generates a histogram of the 20 most occurring words. It also provides an option to export the histogram data as a CSV file.

## Getting Started

### Prerequisites

- Node.js (v12 or above)
- npm (v6 or above)

### Installation

1. Clone the repository or download the source code:

   ```
   git clone https://github.com/your-username/word-frequency-analyzer.git
   ```

2. Navigate to the project directory:

   ```
   cd word-frequency-analyzer
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Usage

1. Start the development server:

   ```
   npm run dev
   ```

   This command will start the development server and the application will be accessible at [http://localhost:3000](http://localhost:3000).

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000).

3. Click on the "Submit" button to fetch the contents of the [https://www.terriblytinytales.com/test.txt](https://www.terriblytinytales.com/test.txt) URL and analyze the word frequency.

4. Once the analysis is complete, a histogram chart will be displayed showing the 20 most occurring words.

5. To export the histogram data as a CSV file, click on the "Export" button. The CSV file will be downloaded to your local machine with the name "histogram.csv".

## Technologies Used

- React.js/Next.js - JavaScript framework for building user interfaces.
- axios - Promise-based HTTP client for making API requests.
- Chart.js - JavaScript library for creating charts and graphs.
- react-chartjs-2 - React wrapper for Chart.js.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to modify the content of the README.md file to suit your specific project and requirements.
