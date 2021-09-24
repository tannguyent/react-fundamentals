import Icon from "./Icon"

const ButtonComponent = ({children, onClick, iconName, className}) => {
    return (
		<button onClick={onClick} className={className}>
			{ iconName && <Icon icon={iconName} /> }
			<span>{children }</span>
		</button>
	)
}

export default ButtonComponent