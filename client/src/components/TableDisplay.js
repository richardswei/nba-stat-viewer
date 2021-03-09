import React, {useEffect, useState} from 'react'

function TableDisplay(props) {
  const data = props.data
  // array for filter
  // if null all headers show
  console.log(data)

  const headers = data.length>0 ? props.headers || Object.keys(props.data[0]) : []
  return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              {headers && headers.map((key)=>
                <th>{key}</th>
              )}
            </tr>
            {data && data.map((row)=>
              <tr>
                {row && Object.values(row).map((cell) => <td>{cell}</td>)}
              </tr>
            )}
          </tbody>  
        </table>
      </React.Fragment>)
  
}

export default TableDisplay