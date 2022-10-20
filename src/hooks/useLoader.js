import React, { useContext, useState, useEffect } from 'react'


const DataContext = React.createContext();

export function DataProvider(props) {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
 }, []);

  const value = {
    rowData : rowData,
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}

export const useLoader = () => {
  const { rowData } = useContext(DataContext)
  return [rowData]
}
