import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import { Spacer } from '../../spacer'
import { Alert } from '../../alert'

function LoginForm({ onSubmit, onTextChange, onCheckboxChange, account, errors }) {
  return (
    <div>
      <div title="Maak een account aan bij ForecastXL" titleColor="white" />
      <div>
        {errors && errors.base && <Alert messages={errors.base} />}
        <form action="/" onSubmit={onSubmit}>
          <Spacer size={'2rem'} bottom>
            <h2>Beheerder</h2>
            <p>
              Gegevens van de beheerder van dit account. Deze persoon kan bedrijven bewerken,
              toevoegen en verwijderen.
            </p>
            <TextField
              floatingLabelText="Voornaam"
              name="firstName"
              value={account.firstName}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.firstName && <Alert messages={errors.firstName} />}
            />
            <br />
            <TextField
              floatingLabelText="Achternaam"
              name="lastName"
              value={account.lastName}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.lastName && <Alert messages={errors.lastName} />}
            />
            <br />
            <TextField
              floatingLabelText="Email"
              name="email"
              type="email"
              value={account.email}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.email && <Alert messages={errors.email} />}
            />
            <br />
            <TextField
              floatingLabelText="Wachtwoord"
              name="password"
              type="password"
              value={account.password}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.password && <Alert messages={errors.password} />}
            />
            <br />
            <TextField
              floatingLabelText="Herhaal wachtwoord"
              name="passwordConfirmation"
              type="password"
              value={account.passwordConfirmation}
              onChange={onTextChange}
              fullWidth
              errorText={
                errors &&
                  errors.passwordConfirmation &&
                  <Alert messages={errors.passwordConfirmation} />
              }
            />
            <br />
          </Spacer>
          <Spacer size={'2rem'} bottom>
            <h2>Bedrijfsgegevens</h2>
            <p>
              Bedrijfsgegevens voor de facturatie. Op basis van deze gegevens maken wij voor u
              ook alvast een voorbeeld bedrijf aan.
            </p>
            <TextField
              floatingLabelText="Bedrijfsnaam"
              name="companyName"
              value={account.companyName}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.companyName && <Alert messages={errors.companyName} />}
            />
            <br />
            <TextField
              floatingLabelText="Telefoonnummer"
              name="phoneNumber"
              type="tel"
              value={account.phoneNumber}
              onChange={onTextChange}
              fullWidth
              errorText={errors && errors.phoneNumber && <Alert messages={errors.phoneNumber} />}
            />
          </Spacer>
          <Checkbox
            label="Ik ga akkoord met de voorwaarden"
            name="agreedToGeneralTerms"
            checked={account.agreedToGeneralTerms}
            onCheck={onCheckboxChange}
          />
          {errors &&
            errors.agreedToGeneralTerms &&
            <Alert messages={errors.agreedToGeneralTerms} />}
          <button type="submit" label="Maak account aan" primary fullWidth />
        </form>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  account: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    agreedToGeneralTerms: PropTypes.bool.isRequired
  }).isRequired
}

export default LoginForm
