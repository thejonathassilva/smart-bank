import Account from 'components/Account'
import Title from 'components/Title'
import React from 'react'

export default function Container() {
  return (
    <div className="container">
      <Title>Olá Fulano de Tal!</Title>
      <section className="context">
        <Account/>
      </section>
    </div>
  )
}
