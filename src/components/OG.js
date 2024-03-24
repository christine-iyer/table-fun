
import {useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const CustomButtonComponent = (props) => {
     return <button onClick={() => window.alert('clicked') }>Push Me!</button>;
   };
export default function OG() {
     const [rowData, setRowData] = useState([
          {make: 'Toyota', model: 'Celica', year: 2018, price:65897, electronic: true},
          {make: 'Honda', model: 'Accord', year: 2018, price:25897, electronic: false},
          {make: 'Nissan', model: 'Maxima', year: 2018, price:75897, electronic: true},
          {make: 'Honda', model: 'Civic', year: 2018, price:62897, electronic: false},
     ])
     const [colDefs, setColDefs] = useState([
          {
               headerName: 'Make & Model',
               valueGetter: (p) => p.data.make + ' ' + p.data.model,
               flex: 2, filter: true, floatingFilter:true, editable: true
             },
             {
               field: 'price',
               valueFormatter: (p) => '£' + Math.floor(p.value).toLocaleString(),
               flex: 1, editable: true
             },
             { field: 'electronic', flex: 1 },
             { field: 'button', cellRenderer: CustomButtonComponent, flex: 1 },

          {field: 'make', editable: true,cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
              values: ['Honda', 'Nissan', 'Toyota'],
          },
  }
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
