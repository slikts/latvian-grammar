import React from 'react'

import { inflect } from 'latvian-grammar'

const Inflect = ({ word, gender }) => {
  let data
  try {
    data = inflect(word, gender)
  } catch (e) {
    return <div>{String(e)}</div>
  }
  const { declension, inflections } = data

  const rows = Object.entries(inflections.singular).map(([case_, word]) => (
    <tr key={case_}>
      <th>{case_}</th>
      <td>{word}</td>
      <td>{inflections.plural[case_]}</td>
    </tr>
  ))

  return (
    <div>
      <table>
        <caption>Inflections</caption>
        <thead>
          <tr>
            <td></td>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <table>
        <caption>Declension</caption>
        <tbody>
          <DataRows object={declension} />
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Inflect)

const DataRows = ({ object }) =>
  Object.entries(object).map(([key, value]) => (
    <tr key={key}>
      <th>{key}</th>
      <td>
        <Value value={value} />
      </td>
    </tr>
  ))

const Value = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false'
  }
  return value
}
