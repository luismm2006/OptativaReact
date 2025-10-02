import PropTypes from 'prop-types';
const UserCard = ({name, age, city}) => {
    return <h1>Hola, {name} , {age}, {city}</h1> ;
};
UserCard.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,

}
export default UserCard;