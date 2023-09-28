import React from 'react'

const InputField = ({ 
  dashed, 
  label,
  defaulValue,
  name }) => {
  return (
    <div className="input-wrap mt-4 w-100">
      <input name={name} defaultValue={defaulValue} className={`w-100 px-2 py-3 bg-transparent disabled  ${dashed && "dashed"}`} id={`id-${name}`} />
      <label htmlFor={`id-${name}`}>{label}</label>
    </div>
  )
}

export default InputField