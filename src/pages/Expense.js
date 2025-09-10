import React from 'react'
import Expensetrack from '../components/Expensetrack'
import { Link, Links } from 'react-router-dom'
const Expense = () => {
  return (
    <div className='con'>
    <Link to='/home' className='back'>back</Link>
    <Expensetrack/>
    </div>
  )
}

export default Expense