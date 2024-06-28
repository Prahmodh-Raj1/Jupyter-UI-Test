//@ts-nocheck
import { useState } from 'react';
import { Jupyter, Notebook, CellSidebarRun } from '@datalayer/jupyter-react';
import { Box } from '@primer/react';
import { AppsIcon, CpuIcon } from '@primer/octicons-react';
import { UnderlineNav } from '@primer/react';
import CellComponents from './examples/cell/CellComponents';
import OutputsComponents from './examples/outputs/OutputsComponents';
import JupyterLabHeadlessApp from './examples/labapp/JupyterLabHeadlessApp';

import './App.css';

const App = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Box>
        <Jupyter startDefaultKernel={true}>
              <Notebook
                path="Documents/Sample.ipynb"
                CellSidebar={CellSidebarRun}
              />
        </Jupyter>
      </Box>
    </>
  );
}

export default App;
