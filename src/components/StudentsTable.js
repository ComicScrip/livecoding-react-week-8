import React from 'react';
import students from '../data/students';
import { Link } from 'react-router-dom';

const LinkTd = ({ to, children }) => <td><Link to={to}>{children}</Link></td>;

const StudentsTableRow = ({ firstName, lastName, p1bisPresented, githubUserName }) => {
  const studentDetailsPageLink = '/students/' + githubUserName;
  return (
    <tr key={githubUserName}>
      <LinkTd to={studentDetailsPageLink}>{firstName}</LinkTd>
      <LinkTd to={studentDetailsPageLink}>{lastName.toUpperCase()}</LinkTd>
      <td>{p1bisPresented ? 'Oui' : 'Pas encore'}</td>
    </tr>
  );
};

const StudentsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Prénom</td>
          <td>Nom</td>
          <td>P1bis présenté</td>
        </tr>
      </thead>
      <tbody>
        {students.map(StudentsTableRow)}
      </tbody>
    </table>
  );
};

export default StudentsTable;
