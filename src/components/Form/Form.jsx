import React, {Fragment, useState}  from 'react'
import styled from 'styled-components';
import FormInput from './FormInput';
import fields from '../Utils/Fields.json'
import address_fields from '../Utils/AddressFields.json'
import representativeFields from '../Utils/LegalRepresentative.json' 
import backAccountFields from '../Utils/BankAccountFields.json'


const Form = () => {

    //  Form component is used to wrap a form where inputs and buttons elements are wrapped
    

    const [showSecondSection, setShowSecondSection] = useState(false);
    const [showThirdSection, setShowThirdSection] = useState(false);
    const [showFourthSection, setShowFourthSection] = useState(false);

    const [values, setValues] = useState(
        {
          razon_social: "",
          nombre_comercial: "",
          nacionalidad: "",
          fecha_de_constitucion: "",
          rfc: "",
          regimen_fiscal: "",
          industria: "",
          nombre_calle: "",
          numero_exterior: "",
          numero_interior: "",
          codigo_postal: "",
          colonia: "",
          ciudad: "",
          estado: "",
          pais: "",
          comprobante_de_domicio: "",
          telefono: "",
          email: "",
          nombre: "",
          genero: "",
          fecha_de_nacimiento: "",
          lugar_de_nacimiento: "",
          pais_de_nacimiento: "",
          nacionalidad_representante: "",
          CURP: "",
          rfc_representante: "",
          domicilio_representante: "",
          estado_civil: "",
          email_representante: "",
          telefono_representante: "",
          identificacion: "",
          CLABE: "",
          banco: "",
        }
      );
    
      const handleSubmit = (e) => {
        e.preventDefault();
      }
    
      const onChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
      }

    const fieldsToFill = (name, array) => {
      return(
        <Fragment>
          <h2>{name}.</h2>
          {array.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        </Fragment>
      )
    };

  
  console.log(values)

  return (
    <Fragment>
        <FormStyle onSubmit={handleSubmit}>
        <h1>Formulario</h1>

        {fieldsToFill('Datos de usuario', fields)}
            <button 
                className='display-button'
                onClick={() => setShowSecondSection(!showSecondSection)}>
                  {showSecondSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar secci??n / Domicilio</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Mostrar secci??n / Domicilio</span>
                    </React.Fragment>
                  )}
                
            </button>
        {showSecondSection && fieldsToFill('Domicilio',address_fields)}
            <button 
                className='display-button'
                onClick={() => setShowThirdSection(!showThirdSection)}>
                {showThirdSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar secci??n / Representante legal.</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Mostrar secci??n / Representante legal.</span>
                    </React.Fragment>
                  )}
            </button>
        {showThirdSection && fieldsToFill('Representante legal', representativeFields)}
        <button 
                className='display-button'
                onClick={() => setShowFourthSection(!showFourthSection)}>
                {showFourthSection ? (
                    <React.Fragment>
                      <i className="fa fa-arrow-up" aria-hidden="true"></i>
                      <span>Ocultar secci??n / Datos bancarios.</span>
                    </React.Fragment>
                  ):(
                    <React.Fragment>
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>Mostrar secci??n / Datos bancarios.</span>
                    </React.Fragment>
                  )}
            </button>
        {showFourthSection && fieldsToFill("Cuenta bancaria",backAccountFields)}
        
        <button className='button-submit'>Enviar</button>
      </FormStyle>
    </Fragment>
  )
}

export default Form


const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 60px;
    border-radius: 5px;

    @media (max-width: 768px) {
      max-width: 50%;
    }

    h1{
      margin-top: 30px;
      color: #5DB8C4;
    }
    h2{
      font-size: 15px;
    }

    .display-button{
        width: 100%;
        height: 50px;
        padding: 10px;
        border: 2px solid #5DB8C4;
        color: black;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 30px;
        margin-top: 10px;
    }

    .button-submit{
      width: 100%;
      height: 50px;
      padding: 10px;
      border: none;
      background-color: #ED6217;
      color: white;
      border-radius: 5px;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      margin-bottom: 30px;
      margin-top: 10px;
    }

    button span{
        padding-left: 5px;
    }


    .button-submit:hover{
      background-color: #AB3F00;
      transition: 0.5s;
    }

`