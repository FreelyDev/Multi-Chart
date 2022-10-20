import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useLoader } from 'hooks/useLoader';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { useCallback, useEffect, useRef, useState } from 'react';
const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]}
  ]
};

const useStyles = makeStyles(theme => ({

  root: {
    width: '100%',
    dispaly: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: '2rem !important',
    color: '#000',
    textAlign: 'center',
    dispaly: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },

  content: {
    border: '1px #eee solid',
  },

  gCol: { 
    flex : 1,
    dispaly: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
}));

const LargeSection = () => {
  const classes = useStyles();

  const gridRef = useRef();
  const [rowData] = useLoader();

  const [columnDefs, setColumnDefs] = useState([
    {field: 'make', filter: true, cellStyle: { flex: 0.3 }},
    {field: 'model', filter: true, cellStyle: { flex: 0.3 }},
    {field: 'price', cellStyle: { flex: 0.3 }}
  ]);

  const cellClickedListener = useCallback( event => {
  console.log('cellClicked', event);
  }, []);


  const [gridApi, setGridApi] = useState(null);
  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    
  };
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Large & Great</h1>
      <Grid className={classes.content} container>
        <Grid item  className={classes.gCol}>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
          />
        </Grid>

        <Grid item className={classes.gCol}>
        <div className="ag-theme-alpine" style={{width: '100%', height: 500}}>
          <AgGridReact
            rowStyle={{width : '100%'}}
            ref={gridRef} 
            rowData={rowData} 
            columnDefs={columnDefs} 
            defaultColDef={{sortable: true}}
            animateRows={true} 
            rowSelection='multiple' 
            onCellClicked={cellClickedListener} 
            onGridReady={onGridReady}
            />
        </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LargeSection;
