import props from 'prop-types'
const Props = ({personName}) => {
    return (
        <div>
            <p>User name: {personName}</p>
        </div>
    )
}
Props.propTypes = {
    personName: props.string.isRequired
}

export default Props