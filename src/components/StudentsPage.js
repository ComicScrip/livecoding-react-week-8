import React from 'react';
import StudentsTable from './StudentsTable';
import {withStudents} from '../data/students';
import LoadingIndicator from './LoadingIndicator'
import ErrorBox from './ErrorBox'

class StudentsPage extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchStudentList();
  }

  render () {
    const {loadingStudents, studentList, fetchStudentsError} = this.props
    return (
      <div>
        <h2>Liste des étudiants</h2>
        {loadingStudents ? <LoadingIndicator/> :
          (fetchStudentsError ? <ErrorBox message={fetchStudentsError} /> : <StudentsTable students={studentList} />)
        }
      </div>
    );
  }
}

export default withStudents(StudentsPage)