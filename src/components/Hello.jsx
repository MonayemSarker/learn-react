/* eslint-disable no-undef */
function Hello({ name, seatNumbers }) {
  return (
    <h1>
      Hello from learning {name} {seatNumbers}
    </h1>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

Hello.propTypes = {
  seatNumbers: PropTypes.string.isRequired,
};

export default Hello;
