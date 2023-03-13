import { ThreeDots  } from  'react-loader-spinner'

const Loader = () => {
    return ( 
        <ThreeDots 
        height="400"
        width="80"
        color="#616DA7"
        radius="6"
        wrapperClass="loader-content"
        visible={true}
        ariaLabel="rings-loading"
      />
     );
}
 
export default Loader;