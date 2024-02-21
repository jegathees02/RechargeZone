import LogoImg from '../../assets/images/logoImg.svg';

const Logo = () => {
  return (
    <div>
      <img
        className='max-h-[60px] w-[200px] object-cover mx-auto'
        src={LogoImg}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
