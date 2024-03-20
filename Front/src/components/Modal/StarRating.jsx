const StarRating = ({rating, setRating}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? 'text-yellow-500 cursor-pointer' : 'text-gray-300 cursor-pointer'}
        onClick={() => setRating(i)}
      >
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

export default StarRating;
