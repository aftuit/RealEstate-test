import React from 'react'

const SelectField = ({ bg, option }) => {
  return (
    <select className={`w-100 bg-transparent px-2 py-3 mt-3 ${bg && 'bg-white-50'}`} disabled>
      <option value="1">
        {
          option === "Mr."?
          'Myжчинa': 'Женщина'
        }
      </option>
    </select>
  )
}

export default SelectField