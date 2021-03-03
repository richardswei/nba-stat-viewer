import React, {useEffect, useState} from 'react'

function TableDisplay(props) {
  const data = props.data
  // array for filter
  // if null all headers show
  const headers = props.headers || Object.keys(props.data[0])
  console.log(data)
  return (
      <React.Fragment>
        <table>
          <tr>
            {headers && headers.map((key)=>
              <th>{key}</th>
            )}
          </tr>
          {data && data.map((row)=>
            <tr>
              {
                row && Object.values(row).map((cell) => <td>{cell}</td>)
              }
            </tr>
          )}
        </table>  
      </React.Fragment>)
  
}

export default TableDisplay