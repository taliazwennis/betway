
interface Props {
  text:string,
  color:string,
  active:boolean
}

const NavItem = ({ text, color, active }: Props) => {
  return (
    <a className={`nav-item ${
      active ? `${color}` : ""
    }`}>
      
        {text}
    </a>
  );
};

export default NavItem;