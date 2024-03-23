
import {useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';


export default function OG() {
     const [rowData, setRowData] = useState([
          {make: 'Toyota', model: 'Celica', year: 2018, price:65897},
          {make: 'Honda', model: 'Accord', year: 2018, price:25897},
          {make: 'Nissan', model: 'Maxima', year: 2018, price:75897},
          {make: 'Honda', model: 'Accord', year: 2018, price:62897},
     ])
     const [colDefs, setColDefs] = useState([
          {field: 'make'},
          {field:'model'},
          {field: 'year'},
          {field: 'price'}
     ])
     return (
          // wrapping container with theme & size
          <div
            className="ag-theme-quartz" applying the grid theme
           style={{ height: 500 }} // the grid will fill the size of the parent container
          >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
          </div>
         )
}
