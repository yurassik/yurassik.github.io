import React from 'react';
import { make, FormComponentProps } from 'formalibre';

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    {children}
  </form>
);

const formParts = make<string>(
  {
    handleError: (e, { setFormError }) => setFormError(e.message),
  },
  FormComponent,
);
