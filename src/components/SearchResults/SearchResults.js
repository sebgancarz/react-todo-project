import React from 'react';
import styles from './SearchResults.scss';
import {searchData} from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Container from '../Container/Container';
import {Link} from 'react-router-dom';



class SearchResults extends React.Component {
  state = {
    value: this.props.searchResults || [],
  }

  render() {
    const {cards} = this.props;

    return (
      <section>
        <Container>
          <Hero titleText={searchData.title} bgImage={searchData.image} />

          <div className={styles.component}>
            {cards.map(cardData => {
              return (
                <Link className={styles.links} to={`/list/${cardData.listId}`} key={cardData.id}>
                  <Card key={cardData.id} {...cardData} />
                </Link>
              );
            })}
          </div>

        </Container>
      </section>
    );
  }

  static propTypes = {
    cards: PropTypes.array,
    listId: PropTypes.string,
    searchResults: PropTypes.array,
  }
}

export default SearchResults;
