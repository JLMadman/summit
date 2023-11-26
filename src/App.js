import { Asin } from './components/asin';
import { CaseId } from './components/caseId';
import { OrderId } from './components/orderId';
import { BuyerLauncher } from './components/buyerLauncher';
import { Links } from './components/links';

import './App.css';
import { Grid, GridCell, GridRow } from '@rmwc/grid'
import '@rmwc/grid/styles'
import '@rmwc/drawer/styles'
import '@rmwc/list/styles'


function App() {

  return (
    <Grid>
      <GridRow>
        <GridCell>
          <CaseId />
        </GridCell>
        <GridCell>
          <OrderId />
        </GridCell>
        <GridCell>
          <Asin />
          </GridCell>
        <GridCell>
          <BuyerLauncher />
       </GridCell>
      </GridRow>
      <GridRow>
        <GridCell>
          <Links />
        </GridCell>
      </GridRow>
    </Grid>
  );
}

export default App;
