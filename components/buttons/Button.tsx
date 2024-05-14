type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_blue' | 'btn_white' | 'btn_dark_blue_outline';
  full?: boolean;
  onClick?: () => void; // Assurez-vous que la prop onClick est déclarée ici
}

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter w-full gap-3 rounded-lg border font-['Inter'] ${variant} ${full && 'w-full'}`}
      type={type}
      onClick={onClick} // Assurez-vous que cette prop onClick est bien passée ici
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="regular-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;

