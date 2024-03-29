import { useDaumPostcodePopup } from 'react-daum-postcode';
import DaumPostcode from 'react-daum-postcode';

const Postcode = () => {

    const open = useDaumPostcodePopup();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
    
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    const handleClick = () => {
        open({ onComplete: handleComplete })
    };

    return (<>
        {/* <button onClick={handleClick}>Open</button> */}
        <DaumPostcode onComplete={handleComplete} />
    </>)
}

export default Postcode;