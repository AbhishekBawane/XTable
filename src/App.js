import React, { useState } from "react";

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [tableData, setTableData] = useState(initialData);

  // ---------- SORT BY DATE ----------
  const sortByDate = () => {
    const sorted = [...tableData].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateB - dateA !== 0) return dateB - dateA; // latest first
      return b.views - a.views; // if same date → highest views first
    });

    setTableData(sorted);
  };

  // ---------- SORT BY VIEWS ----------
  const sortByViews = () => {
    const sorted = [...tableData].sort((a, b) => {
      if (b.views - a.views !== 0) return b.views - a.views; // highest first
      return new Date(b.date) - new Date(a.date); // if same views → latest date first
    });

    setTableData(sorted);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>

      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table border="0" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
