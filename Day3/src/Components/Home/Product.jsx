import React from 'react'
import Header from '../Header/Header'
// import Card from '../Card/Card'
import CardComponent from '../Card/CardComponent'
import '../Card/Card.css'

export default function Product() {
  return (
    <>
      <Header/>
      <div className="card-div">
      <CardComponent/>
      </div>
    </>
  )
}
