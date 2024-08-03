import React from "react";
import InputCell from "@/app/_components/InputCell/InputCell";
import styles from "./InputRow.module.css";

type InputRowProps = {
  rowIndex: number;
  rowData: string[];
  handleCellChange: (rowIndex: number, colIndex: number, value: string) => void;
};

const InputRow: React.FC<InputRowProps> = ({
  rowIndex,
  rowData,
  handleCellChange,
}) => {
  return (
    <div className={styles.row}>
      {rowData.map((cellValue, colIndex) => (
        <InputCell
          key={colIndex}
          col={colIndex}
          row={rowIndex}
          value={cellValue}
          onChange={(newValue) =>
            handleCellChange(rowIndex, colIndex, newValue)
          }
        />
      ))}
    </div>
  );
};

export default InputRow;
