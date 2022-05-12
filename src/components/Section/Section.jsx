import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={styles.section}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
