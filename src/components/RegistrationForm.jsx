import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './App.css';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Campo obligatorio'),
  lastName: Yup.string().required('Campo obligatorio'),
  email: Yup.string().email('Correo electrónico no válido').required('Campo obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Campo obligatorio'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden').required('Campo obligatorio'),
  role: Yup.string().required('Campo obligatorio'),
});

const roles = [
  { value: 'customer', label: 'Cliente' },
  { value: 'seller', label: 'Vendedor' },
];

const RegistrationForm = () => {
  const handleSubmit = (values) => {
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="registration-form">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <Field type="text" name="firstName" />
            {touched.firstName && errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <Field type="text" name="lastName" />
            {touched.lastName && errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <Field type="email" name="email" />
            {touched.email && errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <Field type="password" name="password" />
            {touched.password && errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <Field type="password" name="confirmPassword" />
            {touched.confirmPassword && errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Rol</label>
            <Field as="select" name="role">
              <option value="">Seleccionar rol</option>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </Field>
            {touched.role && errors.role && <div className="error">{errors.role}</div>}
          </div>

          <button type="submit">Registrarse</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
