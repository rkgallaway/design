import React from "react";

const StandardTable = props => {
  return (
    <table class="standardTable">
      <tr>
        <th>Header One</th>
        <th>Header Two</th>
        <th>Header Three</th>
      </tr>
      <tr>
        <td>Row 1, cell 1</td>
        <td>Row 1, cell 2</td>
        <td>Row 1, cell 3</td>
      </tr>
      <tr>
        <td>Row 2, cell 1</td>
        <td>Row 2, cell 2</td>
        <td>Row 2, cell 3</td>
      </tr>
      <tr>
        <td>Row 3, cell 1</td>
        <td>Row 3, cell 2</td>
        <td>Row 3, cell 3</td>
      </tr>
    </table>
  );
};

export default StandardTable;
