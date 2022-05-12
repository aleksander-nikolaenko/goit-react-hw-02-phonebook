import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';
import styles from './ContactsList.module.css';

export class ContactsList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
