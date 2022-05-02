import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../Firebase/config";
import {
  query,
  where,
  documentId,
  writeBatch,
  collection,
  addDoc,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const CheckOut = () => {
  const { cart, cartTotal, emptyCart } = useContext(CartContext);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
    address: "",
    document: "",
  });
  const [terminos, setTerminos] = useState(false);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 7 a 14 numeros.
    documento: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/, // 1 millon a 999 MM
    direccion: /^[A-Za-z-0-99999999]/,
  };
  const ExpRegular = {
    name: expresiones.nombre,
    lastName: expresiones.nombre,
    email: expresiones.correo,
    tel: expresiones.telefono,
    address: expresiones.direccion,
    document: expresiones.documento,
  };
  const [validaciones, setValidaciones] = useState({
    validName: "1",
    validLastName: "1",
    validEmail: "1",
    validTel: "1",
    validAddress: "1",
    validDocument: "1",
  });

  const validacionNombre = () => {
    if (ExpRegular.name.test(values.name)) {
      setValidaciones({
        ...validaciones,
        validName: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validName: false,
      });
    }
  };
  const validacionLastName = () => {
    if (ExpRegular.lastName.test(values.lastName)) {
      setValidaciones({
        ...validaciones,
        validLastName: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validLastName: false,
      });
    }
  };

  const validacionEmail = () => {
    if (ExpRegular.email.test(values.email)) {
      setValidaciones({
        ...validaciones,
        validEmail: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validEmail: false,
      });
    }
  };
  const validacionTel = () => {
    if (ExpRegular.tel.test(values.tel)) {
      setValidaciones({
        ...validaciones,
        validTel: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validTel: false,
      });
    }
  };
  const validacionAddress = () => {
    if (ExpRegular.address.test(values.address)) {
      setValidaciones({
        ...validaciones,
        validAddress: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validAddress: false,
      });
    }
  };
  const validacionDocumento = () => {
    if (ExpRegular.document.test(values.document)) {
      setValidaciones({
        ...validaciones,
        validDocument: true,
      });
    } else {
      setValidaciones({
        ...validaciones,
        validDocument: false,
      });
    }
  };
  const [orderId, setOrderId] = useState(null);
  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleTerminos = () => {
    setTerminos(!terminos);
  };
  function validacionesOk() {
    return (
      validaciones.validName === true &&
      validaciones.validLastName === true &&
      validaciones.validEmail === true &&
      validaciones.validTel === true &&
      validaciones.validDocument === true &&
      validaciones.validAddress === true &&
      terminos
    );
  }
  function disableSubmitBtnAfterClick() {
    setTimeout(() => {
      let submitBtn = document.getElementById("submitButton");
      submitBtn.classList.add("disabled");
      setTimeout(() => {
        submitBtn.removeAttribute("disabled");
      }, 1500);
    }, 100);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validacionesOk()) {
      const order = {
        items: cart,
        total: cartTotal(),
        buyer: {
          ...values,
        },
        timeStamp: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, "orders");
      const batch = writeBatch(db);
      const productsRef = collection(db, "productos");
      const q = query(
        productsRef,
        where(
          documentId(),
          "in",
          cart.map((item) => item.id)
        )
      );
      const products = await getDocs(q);
      const outOfStock = [];
      products.docs.forEach((doc) => {
        const itemInCart = cart.find((item) => item.id === doc.id);

        if (doc.data().Stock >= itemInCart.qty) {
          batch.update(doc.ref, {
            Stock: doc.data().Stock - itemInCart.qty,
          });
        } else {
          outOfStock.push(itemInCart);
        }
      });

      if (outOfStock.length === 0) {
        addDoc(orderRef, order).then((doc) => {
          batch.commit();
          setOrderId(doc.id);
          emptyCart();
        });
      } else {
        outOfStock.forEach((doc) => {
          alert(doc.title + " no tiene stock");
        });
      }
    }
  };

  if (orderId) {
    return (
      <div className=" my-4 m-auto fontFamilyForm ">
        <img
          className="m-auto mt-5 w-50 h-50 shadow-lg"
          src="/imagenes/18122021-DSC_0009-Editar.jpg"
          alt="Imagen de una hamburguesa"
        ></img>
        <div className="card-body  w-50 m-auto my-3 ">
          <h5 className="card-title text-danger ">¡Orden procesada!</h5>
          <p className="card-text text-warning">N° de Orden: {orderId}.</p>
          <Link to="/" className="btn btn-warning text-danger ">
            Volver al Home
          </Link>
        </div>
      </div>
    );
  }
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container my-5">
      <h2 className="fontFamilyForm">Checkout</h2>
      <hr />
      <form className="fontFamilyForm" onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validName ? "input" : "inputError"
                }`}
                type={"text"}
                placeholder="Nombre"
                onChange={handleValues}
                value={values.name}
                name="name"
                id="name"
                onKeyUp={validacionNombre}
                onBlur={validacionNombre}
              />
              <div className="iconoValidacion">
                {validaciones.validName === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validName === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validName && (
              <p className="leyendaError mx-0">
                Por favor ingresa tu nombre sin caracteres especiales
              </p>
            )}
          </div>
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validLastName ? "input" : "inputError"
                }`}
                type={"text"}
                placeholder="Apellido"
                onChange={handleValues}
                value={values.lastName}
                name="lastName"
                id="lastName"
                onKeyUp={validacionLastName}
                onBlur={validacionLastName}
              />
              <div className="iconoValidacion">
                {validaciones.validLastName === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validLastName === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validLastName && (
              <p className="leyendaError mx-0">
                Por favor ingresa tu apellido sin caracteres especiales
              </p>
            )}
          </div>
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validEmail ? "input" : "inputError"
                }`}
                type={"email"}
                placeholder="Correo Electrónico"
                onChange={handleValues}
                value={values.email}
                name="email"
                id="email"
                onKeyUp={validacionEmail}
                onBlur={validacionEmail}
              />
              <div className="iconoValidacion">
                {validaciones.validEmail === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validEmail === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validEmail && (
              <p className="leyendaError mx-0">
                Por favor ingresa tu Email en el formato correcto
              </p>
            )}
          </div>
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validTel ? "input" : "inputError"
                }`}
                type={"tel"}
                placeholder="Teléfono de contacto"
                onChange={handleValues}
                value={values.tel}
                name="tel"
                id="tel"
                onKeyUp={validacionTel}
                onBlur={validacionTel}
              />
              <div className="iconoValidacion">
                {validaciones.validTel === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validTel === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validTel && (
              <p className="leyendaError mx-0">
                Por favor ingresa tu celular en formato de 10 dígitos
              </p>
            )}
          </div>
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validAddress ? "input" : "inputError"
                }`}
                type={"text"}
                placeholder="Dirección"
                onChange={handleValues}
                value={values.address}
                name="address"
                id="address"
                onKeyUp={validacionAddress}
                onBlur={validacionAddress}
              />
              <div className="iconoValidacion">
                {validaciones.validAddress === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validAddress === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validAddress && (
              <p className="leyendaError mx-0">
                Por favor ingresa tu dirección
              </p>
            )}
          </div>
          <div>
            <div className="grupoInput">
              <input
                className={`form-control my-2 ${
                  validaciones.validName ? "input" : "inputError"
                }`}
                type={"number"}
                placeholder="Documento"
                onChange={handleValues}
                value={values.document}
                name="document"
                id="document"
                onKeyUp={validacionDocumento}
                onBlur={validacionDocumento}
              />
              <div className="iconoValidacion">
                {validaciones.validDocument === true && (
                  <FaCheckCircle className="text-success" />
                )}
                {validaciones.validDocument === false && (
                  <FaTimesCircle className="text-danger" />
                )}
              </div>
            </div>
            {!validaciones.validDocument && (
              <p className="leyendaError mx-0">
                Por favor ingresar entre 7 y 9 caracteres numéricos
              </p>
            )}
          </div>
          <div className="d-flex flex-column">
            <label className="align-self-start" htmlFor="">
              <input
                className="mx-2"
                type="checkbox"
                name="terminos"
                checked={terminos}
                onChange={handleTerminos}
              />
              Aceptar términos y condiciones
            </label>
            {!terminos && (
              <p className="align-self-start leyendaError mx-2">
                Por favor aceptar los términos y condiciones
              </p>
            )}
          </div>
        </div>
        <button
          id="submitButton"
          className={`btn btn-danger text-warning ${
            !validacionesOk() ? "disabled" : ""
          }`}
          type="submit"
          onClick={() => disableSubmitBtnAfterClick()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
