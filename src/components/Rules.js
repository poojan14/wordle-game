import React from 'react'

export const Rules = () => {
  return (
<>
<table class="table table-striped table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Rules</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Exact matches (correct position in the solution) will be green</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Partial matches (in the solution but not the correct position) will be yellow </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>None-matches (not in the solution at all) will be grey</td>
    </tr>
    
  </tbody>
</table>

</>
  )
}
