export class SudokuSolver
{
  constructor(...rest) // [9,8,7,6,5,4,3,2,1]
  {
    this.gridCellList = [];
    let index = 0;
    for(let i = 0; i < 9; i++)
    {
      for(let u = 0; u < 9; u++)
      {
          let cell = new gridCell(i, u, rest[index])
          this.gridCellList.push(cell);
          index++;
      }
    }
  }
  checkColumns()
  {
    for(let i = 0; i < 9; i++)
    {
      let colList = [];
      for(let u = 0; u < 81; u++)
      {
        if(this.gridCellList[u].y === i)
        {
          if(colList.includes(this.gridCellList[u].value))
          {

            return false;
          }
          colList.push(this.gridCellList[u].value);
        }
      }
    }
    return true;
  }
  checkRows()
  {
    for(let i = 0; i < 9; i++)
    {
      let rowList = [];
      for(let u = 0; u < 81; u++)
      {
        if(this.gridCellList[u].x === i)
        {
          if(rowList.includes(this.gridCellList[u].value))
          {
            return false;
          }
          rowList.push(this.gridCellList[u].value);
        }
      }
    }
    return true;
  }
  checkBoxes()
  {
    let xBox = 0;
    let yBox = 0;
    for(let n = 0; n < 3; n++)
    {
      debugger;
      for(let z = 0; z < 3; z++)
      {
        let boxList = [];
        for(let x = 0+(xBox*3); x < 3+(xBox*3); x++)
        {
          for(let y = 0+(yBox*3); y < 3+(yBox*3); y++)
          {
            var tempNum = this.gridCellList.filter(function(cell)
            {
              if(cell.x === x && cell.y === y)
              {
                return cell.value;
              }
            }).value
            if (boxList.includes(tempNum))
            {
              return false;
            }
            boxList.push(tempNum)
          }
        }
        xBox++;
      }
    yBox++;
    }
    return true;
  }
}

class gridCell
{
  constructor(x, y, value = 0)
  {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}


const numList = [3, 1, 6, 5, 7, 8, 4, 9, 2, 5, 2, 9, 1, 3, 4, 7, 6, 8, 4, 8, 7, 6, 2, 9, 5, 3, 1, 2, 6, 3, 4, 1, 5, 9, 8, 7, 9, 7, 4, 8, 6, 3, 1, 2, 5, 8, 5, 1, 7, 9, 2, 6, 4, 3, 1, 3, 8, 9, 4, 7, 2, 5, 6, 6, 9, 2, 3, 5, 1, 8, 7, 4, 7, 4, 5, 2, 8, 6, 3, 1, 9]

const newGrid = new SudokuSolver(...numList);
