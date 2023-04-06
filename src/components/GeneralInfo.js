import React from 'react'

function GeneralInfo({onSubmitGeneralInfo, firstName, lastName, setFirstName, setLastName, email, setEmail, phone, setPhone}) {
  return (
    <div className='individualForm'>
      <h3>General Information</h3>
      <div>
        <form onSubmit={onSubmitGeneralInfo}>
          <label htmlFor='fistName'>First Name:</label>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='phone'>Phone:</label>
          <input
            type='text'
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default GeneralInfo