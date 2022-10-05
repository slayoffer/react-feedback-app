// import { useState } from 'react';
import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('This is an example of a feedback item');

  // const handleClick = () => {
  // setRating(Math.floor(Math.random() * 10));
  //   setRating(
  //     (prev) =>
  //       console.log('=> ~ prev', prev);
  //       prev + 1
  //   );
  // };

  // const handleClick = () => {
  //   console.log(123);
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => deleteFeedback(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <button type="button" className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  // handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
