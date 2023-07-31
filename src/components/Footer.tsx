import { FaHeart } from 'react-icons/fa';

function Footer(): JSX.Element {
  return (
    <footer>
      <small>
        &copy; {new Date().getFullYear()} made with{' '}
        <FaHeart style={{ color: 'red' }} /> by -{' '}
        {/* <a
          target="_blank"
          // rel="noopener noreferrer"
          // href="https://granada.com.gt/es/"
        > */}
          Ostrynska Kateryna
        {/* </a> */}
      </small>
    </footer>
  );
}

export  {Footer};
