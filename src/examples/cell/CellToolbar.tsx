//@ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import { Text, Button } from '@primer/react';
import { selectCell, cellActions } from '@datalayer/jupyter-react';

const CellToolbar: React.FC = () => {
  const cell = selectCell();
  const dispatch = useDispatch();

  return (
    <>
      <Text as="h5">Cell Example</Text>
      <Button
        variant="primary"
        onClick={() => dispatch(cellActions.execute())}
      >
        Run
      </Button>
      <Button
        variant="secondary"
        onClick={() => dispatch(cellActions.outputsCount(0))}
      >
        Reset outputs count
      </Button>
      <Text>
        Outputs count: {cell.outputsCount}
      </Text>
    </>
  );
}

export default CellToolbar;
