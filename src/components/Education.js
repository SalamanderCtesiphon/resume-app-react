import React from 'react'

function Education({ onSubmitEducation, schoolName, graduationYear, titleOfStudy, setGraduationYear, setTitleOfStudy, setSchoolName}) {
  return (
    <div>
       <form onSubmit={onSubmitEducation}>
          <label htmlFor='schoolName'>School Name:</label>
          <input
            type='text'
            placeholder='School Name'
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <label htmlFor='titleOfStudy'>Title of Study:</label>
          <input
            type='text'
            placeholder='Title of Study'
            value={titleOfStudy}
            onChange={(e) => setTitleOfStudy(e.target.value)}
          />
          <label htmlFor='graduationYear'>Graduation Year:</label>
          <input
            type='text'
            placeholder='Graduation Year'
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
          />
          <button>submit</button>
        </form>
    </div>
  )
}

export default Education