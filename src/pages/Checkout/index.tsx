/* eslint-disable prettier/prettier */

import { useState } from 'react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Row, InputGroup,TabButton } from '../Checkout/styles'
import boleto from "../../images/boleto.png"
import cartao from "../../images/cartao.png"
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
 
  const form=useFormik({
    initialValues:{
      fullName:"",
      email:"",
      cpf:"",
      deliveryEmail:"",
      confirmDeliveryEmail:"",
      cardOwner:"",
      cpfCardOwner:"",
      cardDisplayName:"",
      cardNumber:"",
      expiresMonth:"",
      expiresYear:"",
      cardCode:"",
      installments:1

    },
    onSubmit:(values)=>{
      console.log(values)
    }
    
  })

  console.log(form)
  
  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" name="fullname" id="fullName" value={form.values.fullName} onChange={form.handleChange} onBlur={form.handleBlur} />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" value={form.values.cpf} onChange={form.handleChange} onBlur={form.handleBlur}  />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" value={form.values.deliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur}   />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" id="confirmDeliveryEmail" value={form.values.confirmDeliveryEmail} onChange={form.handleChange} onBlur={form.handleBlur}  />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton onClick={()=>setPayWithCard(false)}  isActive={!payWithCard}>
            <img src={boleto} alt="Ícone de boleto"/>
            Boleto bancário
          </TabButton>
          <TabButton onClick={()=>setPayWithCard(true)}   isActive={payWithCard}>
            <img src={cartao} alt="Ícone de cartão de crédito/débito"/>
            Cartão de crédito
          </TabButton>
          <div className='margin-top'>
          {payWithCard ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome do titular do cartão</label>
                  <input type="text" id="cardOwner" value={form.values.cardOwner} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cpfCardOwner">CPF do titular do cartão</label>
                  <input type="text" id="cpfCardOwner" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input type="text" id="cardDisplayName" value={form.values.cardDisplayName} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" id="cardNumber" value={form.values.cpfCardOwner} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresMonth">Mês do vencimento</label>
                  <input type="text" id="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange} onBlur={form.handleBlur}    />
                </InputGroup>
                <InputGroup maxWidth="123px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input type="text" id="expiresYear" value={form.values.expiresYear} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
                <InputGroup maxWidth="48px">
                  <label htmlFor="cardCode">CVV</label>
                  <input type="text" id="cardCode" value={form.values.cardCode} onChange={form.handleChange} onBlur={form.handleBlur}   />
                </InputGroup>
              </Row>
              <Row marginTop="24px">
                <InputGroup maxWidth="150px">
                  <label htmlFor="installments">Parcelamento</label>
                  <select id='installments' name='installments' value={form.values.installments} onChange={form.handleChange} >
                    <option value="">1x de R$ 200,00</option>
                    <option value="">2x de R$ 200,00</option>
                    <option value="">3x de R$ 200,00</option>
                  </select>
                </InputGroup>
              </Row>
            </>
          ) : (
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </form>
  )
}
