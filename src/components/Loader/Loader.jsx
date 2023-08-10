import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <MagnifyingGlass
        visible={true}
        height="140"
        width="140"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#03196a"
      />
    </Wrapper>
  );
};
