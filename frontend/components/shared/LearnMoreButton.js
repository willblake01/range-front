

const LearnMoreButton = ({ category }) => (
  <a
    href={`/products/${category}-buying-guide`}
    target='_blank'
    rel='noopener noreferrer'
  >
    Learn More 📖
  </a>
);

export { LearnMoreButton };
