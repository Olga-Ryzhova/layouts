import './icon-switch.css';

const IconSwitch = ({icon, onSwitch }) => {
	const currentIcon = icon === 'view_module' ? 'view_module' : 'view_list'; 
	
	return (
    <button
      className="btn"
      type="button"
      onClick={() => onSwitch(icon === 'view_module' ? 'view_list' : 'view_module')}>
      <span className="material-icons">{currentIcon}</span>
    </button>
  );
}

export default IconSwitch;