import React from 'react'
import './styles.scss'
interface IProps {
  children : React.ReactNode;
}

const HomeLayout = ({children} : IProps) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default HomeLayout