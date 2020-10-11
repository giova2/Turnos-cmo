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

function FormTurnos() {
  const [recaptcha, setRecaptcha] = React.useState<boolean>(false);
  const [sending, setSending] = React.useState<boolean>(false);
  React.useEffect(() => {
    if(process.env.REACT_APP_EMAILJS_USER !== undefined){
      emailjs.init(process.env.REACT_APP_EMAILJS_USER)
    }
  }, [])
  const onChange = (value:any)=>{
    // if value is null recaptcha expired
    if (value === null){
      setRecaptcha(false);
    }else{
      setRecaptcha(true);
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
        onSubmit={async (values) => {
          setSending(true);
          const res = await emailjs.send("cmo", "template_turno", values);
          if(res.status === 200){
            setSending(false);
          }
        }}
        validationSchema={Yup.object().shape({
          nombre: Yup.string().required("Nombre es un campo requerido"),
          telefono: Yup.string().required("Teléfono es un campo obligatorio"),
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
                <div className="font-bold text-white">
                  Estamos enviando su petición
                </div>
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
                  placeholder="Ingrese teléfono de contacto"
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
                  onChange={onChange}
                />
              </div>
              <StyledContainerInput>
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
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
