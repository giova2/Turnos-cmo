import React from "react";
import StyledForm, {
  StyledError,
  StyledContainerInput,
  StyledLayoutWait,
  StyledHeader
} from "../assets/StyledForms";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import SocialIcons from './SocialIcons';

const MySelect = ({ field, form, children }: any) => {
  return (
    <select
      {...field}
      className={form.errors[field.name] && form.touched[field.name]? "error" : ""}
    >
      {children}
    </select>
  );
};

const MyInput = ({ field, form, ...props }: any) => {
  return (
    <input
      {...field}
      {...props}
      className={
        form.errors[field.name] && form.touched[field.name] ? "error" : ""
      }
    />
  );
};
const MyError = (props: any) => {
  return <StyledError>{props.children}</StyledError>;
};

const MENSAJE_ENVIADO ='Mensaje enviado correctamente, usted será contactado a la brevedad para coordinar su turno';
const ENVIANDO_MENSAJE = 'Estamos enviando su petición';

function FormTurnos() {
  const [enviado, setEnviado] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);
  React.useEffect(() => {
    if(process.env.REACT_APP_EMAILJS_USER !== undefined){
      emailjs.init(process.env.REACT_APP_EMAILJS_USER)
    }
  }, []);
  const renderMessageLayout = () =>{
    if(enviado){
      return (<div className="font-bold text-white">
        {MENSAJE_ENVIADO}
      </div>)
    }else{
      return (<div className="font-bold text-white">
        {ENVIANDO_MENSAJE}
      </div>);
    }
  }
  return (
    <StyledForm>
      <Formik
        initialValues={{
          nombre: "",
          telefono: "",
          obraSocial: "",
          especialidad: "",
          // dias: false,
          // horario: false,
        }}
        onSubmit={async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
          setSending(true);
          const res = await emailjs.send("cmo", "template_turno", values);
          if(res.status === 200){
            setEnviado(true);
            setTimeout(() => {
              setSending(false);  
            }, 2500);
            setTimeout(() => {
              setEnviado(false);
            }, 3500);
            resetForm();
          }
        }}
        validationSchema={Yup.object().shape({
          nombre: Yup.string().min(3,"El nombre es muy corto").max(100,"Ingrese un nombre abreviado, el texto es muy largo").required("Nombre es un campo requerido"),
          telefono: Yup.string().min(6, "El teléfono es muy corto").max(30,"Ingrese un teléfono más abreviado").required("Teléfono es un campo obligatorio"),
          especialidad: Yup.string()
            .ensure()
            .required("Selecciona una especialidad"),
          obraSocial: Yup.string()
            .ensure()
            .required("Selecciona una Obra social"),
        })}
      >
        {(props) => {
          const { dirty, isSubmitting, handleSubmit, handleReset } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <StyledLayoutWait sending={sending}>
                {renderMessageLayout()}
              </StyledLayoutWait>
              <SocialIcons/>
              <StyledHeader>
                <h1>CMO</h1>
                <p className="subtitle">TURNOS</p>
              </StyledHeader>
              <StyledContainerInput>
                <Field
                  name="nombre"
                  placeholder="Ingrese su Nombre"
                  component={MyInput}
                />
                <ErrorMessage name="nombre" component={MyError} />
              </StyledContainerInput>
              <StyledContainerInput>
                <Field
                  name="telefono"
                  placeholder="Ingrese su teléfono de contacto"
                  component={MyInput}
                />
                <ErrorMessage name="telefono" component={MyError} />
              </StyledContainerInput>
              <StyledContainerInput>
                <Field name="especialidad" component={MySelect}>
                  <option disabled value="">
                    Seleccione la especialidad buscada
                  </option>
                  <option value="odontologia">Odontología</option>
                  <option value="RPG">RPG</option>
                  <option value="osteopatia">Osteopatía</option>
                  <option value="nutricion">Nutrición</option>
                  <option value="psiquiatria">Psiquiatría</option>
                </Field>
                <ErrorMessage name="especialidad" component={MyError} />
              </StyledContainerInput>
              <StyledContainerInput>
                <Field name="obraSocial" component={MySelect}>
                  <option disabled value="">
                    Seleccione su obra social
                  </option>
                  <option value="una">una</option>
                  <option value="otra">otra</option>
                  <option value="otra mas">otra mas</option>
                </Field>
                <ErrorMessage name="obraSocial" component={MyError} />
              </StyledContainerInput>
              <StyledContainerInput>
                <div
                  className="flex justify-center flex-wrap bg-gray-100 py-2 mb-2"
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <h2 className="w-full text-lg font-bold mb-2">
                    Seleccione el día de semana de su preferencia
                  </h2>
                  <label className="flex-grow">
                    <Field type="checkbox" name="dias" value="Lunes" />
                    Lunes
                  </label>
                  <label className="flex-grow">
                    <Field type="checkbox" name="dias" value="Martes" />
                    Martes
                  </label>
                  <label className="flex-grow">
                    <Field type="checkbox" name="dias" value="Miérc." />
                    Miérc.
                  </label>
                  <label className="flex-grow">
                    <Field type="checkbox" name="dias" value="Jueves" />
                    Jueves
                  </label>
                  <label className="flex-grow">
                    <Field type="checkbox" name="dias" value="Viernes" />
                    Viernes
                  </label>
                </div>
                <ErrorMessage name="dias" component={MyError} />
              </StyledContainerInput>
              <StyledContainerInput>
                <div
                  className="flex justify-center flex-wrap bg-gray-100 py-2 mb-2"
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  <h2 className="w-full text-lg font-bold mb-2">
                    Preferencia horaria
                  </h2>
                  <label className="flex-grow">
                    <Field type="checkbox" name="horario" value="Mañana" />
                    Por la mañana
                  </label>
                  <label className="flex-grow">
                    <Field type="checkbox" name="horario" value="Tarde" />
                    Por la tarde
                  </label>
                </div>
                <ErrorMessage name="horario" component={MyError} />
              </StyledContainerInput>
              <div className="flex justify-center mb-2">
                <ReCAPTCHA
                  sitekey="6Ldt3NUZAAAAAO56xDELqwKFfGWK4xndbGNcKVMJ"
                />
              </div>
              <StyledContainerInput>
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reiniciar Formulario
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Reservar
                </button>
              </StyledContainerInput>
            </Form>
          );
        }}
      </Formik>
    </StyledForm>
  );
}

export default FormTurnos;
