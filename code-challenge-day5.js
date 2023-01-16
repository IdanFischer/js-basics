

// 3. given a number of rows and columns, output a gird of *

function rowsAndColumns(tableRows, tableColumns) {
//   let tR = tableRows
//   let tC = tableColumns
tableGrid = ""

    for(i = 0; i <= tableRows; i++) {
        // row
        tableGrid = `*`
        // console.log(tableGrid)
        for (j = 0; j <= tableColumns; j++) {
            tableGrid += `*`
            // console.log(tableGrid)
        }  
        console.log(tableGrid)
        
    }
}
   
rowsAndColumns(8, 8)