import Button from './component/Button';
import './css/styles.css';
import myImage from './public/image.jpg';

export const App = () => {
  return (
    <>
      <h1>Hello it's {process.env.NODE_ENV} mode</h1>
      <Button />
      <img src={myImage} alt="Gambar tolol" />
    </>
  );
};
