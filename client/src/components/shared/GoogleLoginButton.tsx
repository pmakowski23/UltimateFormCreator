import google from '../../images/google.svg';
import { css } from '@emotion/css';

// type callbackType = () => void;

//find out what is going on with this type
export const GoogleLoginButton: any = ({ handleClick }: any) => {
  return (
    <div
      className={css({
        display: 'flex',
        padding: '15px',
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
      })}
      onClick={handleClick}
    >
      <img
        className={css({
          height: '20px',
          marginRight: '5px',
        })}
        src={google}
        alt="google-icon"
      />
      Login with google
    </div>
  );
};
